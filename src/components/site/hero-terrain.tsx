import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Abstract "Land of a Thousand Hills" terrain.
 * Rolling morphing mesh + wireframe + particles + orange light trails.
 */

const vertexShader = /* glsl */ `
  uniform float uTime;
  varying vec3 vPos;
  varying float vHeight;

  float hills(vec2 p, float t) {
    float h = 0.0;
    h += sin(p.x * 0.18 + t * 0.18) * cos(p.y * 0.14 - t * 0.12) * 6.0;
    h += sin(p.x * 0.07 - t * 0.09) * 9.0;
    h += cos(p.y * 0.09 + t * 0.07) * 7.0;
    h += sin((p.x + p.y) * 0.32 + t * 0.25) * 1.8;
    h += cos((p.x - p.y) * 0.5 - t * 0.2) * 0.9;
    return h;
  }

  void main() {
    vec3 pos = position;
    float h = hills(pos.xy, uTime);
    pos.z += h;
    vHeight = h;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec3 uNavy;
  uniform vec3 uDeep;
  uniform vec3 uOrange;
  uniform float uWire;
  varying vec3 vPos;
  varying float vHeight;

  void main() {
    // depth fade towards horizon
    float depth = smoothstep(90.0, -60.0, vPos.y);
    vec3 col = mix(uDeep, uNavy, depth);

    // elevation lift towards a lighter navy / white haze
    float lift = smoothstep(-8.0, 14.0, vHeight);
    col = mix(col, col + vec3(0.10, 0.13, 0.20), lift);

    // orange light trails travelling across the terrain
    float trail = 0.0;
    for (int i = 0; i < 3; i++) {
      float fi = float(i);
      float speed = 9.0 + fi * 3.5;
      float offset = fi * 47.0;
      float y = mod(vPos.y + uTime * speed + offset, 200.0) - 100.0;
      float band = exp(-abs(y) * 0.55);
      trail += band * (0.6 + 0.4 * sin(vPos.x * 0.08 + uTime));
    }
    trail *= smoothstep(-10.0, 8.0, vHeight);
    col += uOrange * trail * (uWire > 0.5 ? 2.4 : 1.2);


    // white ridge highlight
    float ridge = smoothstep(9.0, 15.0, vHeight);
    col = mix(col, vec3(1.0), ridge * 0.10);

    // fade edges out
    float edge = smoothstep(120.0, 60.0, abs(vPos.x)) * smoothstep(110.0, 60.0, abs(vPos.y));
    float alpha = (uWire > 0.5 ? 0.28 : 0.95) * edge;
    alpha = mix(alpha, alpha * 0.25, 1.0 - depth);

    gl_FragColor = vec4(col, alpha);
  }
`;

const particleVertex = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    p.y += sin(uTime * 0.25 + p.x * 0.06) * 2.5;
    p.z += cos(uTime * 0.2 + p.y * 0.05) * 2.0;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.2 * uPixelRatio) * (140.0 / -mv.z);
    vAlpha = smoothstep(260.0, 40.0, -mv.z) * 0.7;
  }
`;

const particleFragment = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d) * vAlpha;
    gl_FragColor = vec4(uColor, a);
  }
`;

export default function HeroTerrain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return; // no WebGL — static gradient behind stays visible
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      500,
    );
    camera.position.set(0, -78, 34);
    camera.lookAt(0, 10, 2);

    const uniforms = {
      uTime: { value: 0 },
      uNavy: { value: new THREE.Color("#12365f") },
      uDeep: { value: new THREE.Color("#08152b") },
      uOrange: { value: new THREE.Color("#f97316") },
      uWire: { value: 0 },
    };

    const geometry = new THREE.PlaneGeometry(240, 200, 140, 120);

    const surface = new THREE.Mesh(
      geometry,
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: true,
        depthWrite: false,
      }),
    );
    scene.add(surface);

    const wireUniforms = {
      ...uniforms,
      uWire: { value: 1 },
    };
    const wire = new THREE.Mesh(
      geometry,
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: wireUniforms,
        transparent: true,
        wireframe: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    wire.position.z = 0.35;
    scene.add(wire);

    // particles
    const count = window.innerWidth < 768 ? 320 : 700;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 180;
      positions[i * 3 + 2] = Math.random() * 46 + 4;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.ShaderMaterial({
      vertexShader: particleVertex,
      fragmentShader: particleFragment,
      uniforms: {
        uTime: uniforms.uTime,
        uPixelRatio: { value: dpr },
        uColor: { value: new THREE.Color("#ffb27a") },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // pointer parallax
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const onResize = () => {
      if (!container.clientWidth) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? true;
      },
      { threshold: 0 },
    );
    io.observe(container);

    const clock = new THREE.Clock();
    let raf = 0;
    const render = () => {
      raf = requestAnimationFrame(render);
      if (!visible || document.hidden) return;
      const t = reduceMotion ? 0 : clock.getElapsedTime() * 0.3;
      uniforms.uTime.value = t;
      wireUniforms.uTime.value = t;
      pointer.x += (target.x - pointer.x) * 0.03;
      pointer.y += (target.y - pointer.y) * 0.03;
      camera.position.x = pointer.x * 2;
      camera.position.z = 34 - pointer.y * 1;
      camera.lookAt(0, 10, 2);
      particles.rotation.z = t * 0.005;
      renderer.render(scene, camera);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      pGeo.dispose();
      pMat.dispose();
      (surface.material as THREE.Material).dispose();
      (wire.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
