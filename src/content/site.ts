import logiicLogo from "@/assets/logiic logo.png";
import pipedriveLogo from "@/assets/Pipedrive  Logo.jpg.jpeg";
import salesforceLogo from "@/assets/Salesforce.jpeg";

/**
 * Central content source for the HARAKA website.
 * All public copy lives here so pages stay structural and content stays editable.
 * Nothing in this file may contain invented clients, statistics or testimonials.
 */

export const company = {
  name: "HARAKA",
  shortName: "HARAKA",
  descriptor: "Business & Technology Transformation",
  tagline: "Transforming Business. Enabling Growth.",
  promise:
    "HARAKA helps organizations transform, operate better and grow through strategy, technology and innovation.",
  email: "info@haraka.rw",
  website: "www.haraka.rw",
  whatsapp: "250783405745",
  addressLines: ["KG 1507 St, Kigali, Rwanda"],
  region: "Rwanda",
  hours: [
    { day: "Monday – Friday", time: "08:00 – 18:00 CAT" },
    { day: "Saturday", time: "09:00 – 13:00 CAT" },
    { day: "Sunday & public holidays", time: "Closed" },
  ],
  mapQuery: "Kigali, Rwanda",
  socials: [{ label: "LinkedIn", href: "https://www.linkedin.com/" }],
} as const;

/**
 * Structural placeholders only. These must NOT be replaced with invented
 * numbers — they stay as placeholders until the figures are verified.
 */
export const stats = [
  { value: "3", label: "Core Service Areas", subLabel: "Strategy · Technology · Implementation" },
  { value: "7+", label: "Industries We Serve", subLabel: "Financial Services · Healthcare · Retail · Manufacturing · Hospitality · Education · Real Estate" },
  { value: "10+", label: "Technology & Solution Partners", subLabel: "CRM · ERP · Cloud · Business Solutions" },
  { value: "1", label: "Accountable Partner", subLabel: "From business need to implementation" },
];

export type PracticeArea = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  capabilities: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "strategy-consulting",
    number: "01",
    title: "Strategy & Consulting",
    summary:
      "Help organizations make better decisions, improve performance and build sustainable growth.",
    capabilities: [
      "Business Strategy",
      "Business Transformation",
      "Business Process Improvement",
      "Growth Strategy",
      "Organizational Development",
      "Project Advisory",
    ],
  },
  {
    slug: "technology",
    number: "02",
    title: "Technology",
    summary:
      "Help organizations use technology to solve business problems and improve operations.",
    capabilities: [
      "Enterprise Solutions",
      "CRM",
      "ERP",
      "Business Applications",
      "Systems Integration",
      "Data & Analytics",
      "AI Solutions",
    ],
  },
  {
    slug: "digital-transformation",
    number: "03",
    title: "Digital Transformation",
    summary: "Help organizations modernize how they operate.",
    capabilities: [
      "Digital Strategy",
      "Process Digitization",
      "Workflow Automation",
      "Technology Implementation",
      "Digital Platforms",
      "Change & Adoption",
    ],
  },
  {
    slug: "business-growth",
    number: "04",
    title: "Business Growth",
    summary:
      "Help organizations improve their commercial performance and identify new opportunities.",
    capabilities: [
      "Sales Transformation",
      "CRM & Sales Operations",
      "Market Expansion",
      "Customer Experience",
      "Revenue Growth",
      "Partnerships & Market Development",
    ],
  },
];

export type Industry = { slug: string; name: string; priority: boolean };

export const industries: Industry[] = [
  { slug: "healthcare", name: "Healthcare", priority: true },
  { slug: "financial-services", name: "Financial Services", priority: true },
  { slug: "retail-distribution", name: "Retail & Distribution", priority: true },
  { slug: "manufacturing", name: "Manufacturing", priority: true },
  { slug: "hospitality", name: "Hospitality", priority: true },
  { slug: "education", name: "Education", priority: true },
  { slug: "real-estate", name: "Real Estate", priority: true },
  { slug: "agriculture", name: "Agriculture", priority: true },
  { slug: "government", name: "Government", priority: false },
  { slug: "ngos", name: "NGOs & Development Organizations", priority: false },
  { slug: "construction", name: "Construction", priority: false },
  { slug: "logistics", name: "Logistics", priority: false },
  { slug: "telecom", name: "Telecommunications", priority: false },
  { slug: "energy", name: "Energy & Utilities", priority: false },
];

export const priorityIndustries = industries.filter((i) => i.priority);
export const additionalIndustries = industries.filter((i) => !i.priority);

export type SolutionGroup = {
  slug: string;
  navLabel: string;
  title: string;
  summary: string;
  items: { title: string; description: string }[];
};

export const solutionGroups: SolutionGroup[] = [
  {
    slug: "business-management",
    navLabel: "Business Solutions",
    title: "Business Management",
    summary: "Run finance, operations and the core of the business on one dependable foundation.",
    items: [
      { title: "ERP Solutions", description: "End-to-end enterprise resource planning solutions that unify finance, supply chain, and operations into a single source of truth." },
      { title: "Business Management Systems", description: "Integrated platforms designed to streamline day-to-day business processes, improve visibility, and scale with organizational growth." },
      { title: "Finance & Operations", description: "Financial management and operational optimization tools that provide real-time insights, automate workflows, and ensure compliance." },
      { title: "Customer Experience", description: "Solutions focused on tracking customer journeys, optimizing touchpoints, and ensuring seamless service delivery across all channels." }
    ],
  },
  {
    slug: "customer-and-sales",
    navLabel: "Customer & Sales",
    title: "Customer & Sales",
    summary: "Win, serve and retain customers with commercial processes that hold together.",
    items: [
      { title: "CRM", description: "Comprehensive customer relationship management systems that centralize customer data, track interactions, and drive personalized engagement." },
      { title: "Sales Management", description: "Tools to automate pipelines, forecast revenue accurately, and empower sales teams to close deals faster and more efficiently." },
      { title: "Customer Experience", description: "Omnichannel support and engagement platforms designed to build loyalty, resolve issues quickly, and enhance client satisfaction." },
      { title: "Procurement & Supply Chain", description: "End-to-end supply chain visibility and procurement automation to reduce costs, manage vendors, and ensure reliable delivery." }
    ],
  },
  {
    slug: "industry-solutions",
    navLabel: "Industry Solutions",
    title: "Industry Solutions",
    summary: "Solutions shaped around the operating reality of specific sectors.",
    items: [
      { title: "Healthcare Management", description: "Specialized clinical and administrative systems that improve patient care, streamline operations, and meet strict healthcare compliance standards." },
      { title: "Hospitality Management", description: "Property, booking, and guest experience solutions designed to elevate service quality and optimize revenue for hotels and resorts." },
      { title: "Retail & Distribution", description: "Point of sale, inventory management, and omnichannel retail systems that unify the in-store and online customer experience." },
      { title: "Manufacturing", description: "Production planning, quality control, and inventory tracking systems built for the complex demands of modern manufacturing environments." },
      { title: "Education", description: "Student information systems, learning management, and administrative tools tailored for schools, universities, and training institutions." },
      { title: "Property Management", description: "Lease administration, facility maintenance, and tenant portal solutions for residential, commercial, and mixed-use property portfolios." }
    ],
  },
  {
    slug: "data-and-intelligence",
    navLabel: "Data & Intelligence",
    title: "Data & Intelligence",
    summary: "Turn operational data into decisions, and repetitive work into automated work.",
    items: [
      { title: "Business Intelligence", description: "Advanced analytics and visualization platforms that turn raw organizational data into actionable, strategic business insights." },
      { title: "Data Analytics", description: "Deep-dive data processing and modeling services to uncover trends, predict outcomes, and optimize performance across departments." },
      { title: "AI Solutions", description: "Applied artificial intelligence for decision support, natural language processing, and advanced pattern recognition tailored to business needs." },
      { title: "Intelligent Automation", description: "Robotic process automation and workflow intelligence that eliminates repetitive tasks and dramatically increases operational efficiency." }
    ],
  },
];

export type Product = {
  slug: string;
  name: string;
  summary: string;
  tier: "flagship" | "core" | "emerging";
};

export const productsIntro = "Technology designed around real business needs.";

export const products: Product[] = [
  {
    slug: "haraka-erp",
    name: "HARAKA ERP",
    summary: "Finance, operations and business management in one integrated system.",
    tier: "flagship",
  },
  {
    slug: "haraka-crm",
    name: "HARAKA CRM",
    summary: "Customer, pipeline and sales management for commercial teams.",
    tier: "flagship",
  },
  {
    slug: "haraka-pos",
    name: "HARAKA POS",
    summary: "Point of sale for retail and distribution operations.",
    tier: "core",
  },
  {
    slug: "haraka-marketplace",
    name: "HARAKA Marketplace",
    summary: "A commerce platform connecting sellers, buyers and fulfilment.",
    tier: "core",
  },
  {
    slug: "healthcare-management-system",
    name: "Healthcare Management System",
    summary: "Clinical and administrative operations for healthcare providers.",
    tier: "core",
  },
  {
    slug: "property-management-system",
    name: "Property Management System",
    summary: "Lease, billing and facilities management for property portfolios.",
    tier: "emerging",
  },
  {
    slug: "ai-business-solutions",
    name: "AI Business Solutions",
    summary: "Applied AI for decision support, automation and business insight.",
    tier: "emerging",
  },
];

export const about = {
  paragraphs: [
    "HARAKA is a business and technology transformation firm helping organizations improve performance, modernize operations and achieve sustainable growth.",
    "We combine business expertise, technology and industry knowledge to design and implement practical solutions that create measurable value.",
    "HARAKA is building its capabilities across Rwanda and East Africa, working with clients and specialist partners to deliver solutions aligned with real business needs.",
  ],
};

export const approach = [
  { step: "01", title: "Discover", description: "Understand the business, challenges and objectives." },
  { step: "02", title: "Design", description: "Develop the right strategy and solution." },
  { step: "03", title: "Implement", description: "Put the solution into operation." },
  { step: "04", title: "Transform", description: "Support adoption and organizational change." },
  { step: "05", title: "Grow", description: "Measure results and identify opportunities for continuous improvement." },
];

import nzizaImage from "@/assets/NZIZA.jpg.jpeg";
import rurangirwaImage from "@/assets/RURANGIRWA .jpg.jpeg";
import abijuruImage from "@/assets/ABIJURU.jpg.jpeg";
import kimenyiImage from "@/assets/KIMENYI.jpg.jpeg";
import mupenziImage from "@/assets/MUPENZI.jpg.jpeg";
import bwimbaImage from "@/assets/BWIMBA.jpg.jpeg";
import mwizaImage from "@/assets/MWIZA .jpg.jpeg";

export const whyHaraka = [
  { title: "Business Understanding", description: "We start with the business problem, not the technology." },
  { title: "Practical Technology", description: "We select and implement technology based on real organizational needs." },
  { title: "Local Knowledge", description: "We understand the African business environment." },
  { title: "Execution", description: "We focus on turning strategy into measurable results." },
];

export const leadership = [
  { name: "NZIZA Kevin", role: "Founder & CEO", expertise: "Vision, strategy, sales, client relationships, fundraising", image: nzizaImage },
  { name: "RURANGIRWA Freddy", role: "Co-Founder & CTO", expertise: "Technical architecture, engineering, product development, tech partnerships", image: rurangirwaImage },
  { name: "ABIJURU Ariane", role: "Head of Client Solutions", expertise: "Business consulting and project delivery, single point of contact for clients", image: abijuruImage },
  { name: "KIMENYI Henriet", role: "Head of Operations & Finance", expertise: "Day-to-day operations, budgeting, contracts, compliance", image: kimenyiImage },
  { name: "MUPENZI Yves", role: "Head of Growth (Sales, Marketing & Partnerships)", expertise: "Client acquisition, brand, and partnerships", image: mupenziImage },
  { name: "BWIMBA Victor", role: "Head of Digital Products", expertise: "Owns HARAKA ERP, CRM, POS and Marketplace as products, separate from client delivery", image: bwimbaImage },
  { name: "MWIZA Rachel", role: "Head of People & Culture", expertise: "Hiring, onboarding, culture", image: mwizaImage },
];


export const ecosystem = {
  statement:
    "HARAKA works with technology providers, specialists and industry organizations to bring the right capabilities to each engagement.",
  categories: ["Technology", "Cloud", "AI & Data", "Industry Expertise", "Implementation", "Business Process"],
  /** Capability relationships — not clients, not endorsements. */
  relationshipGroups: [
    {
      title: "Technology Partners",
      items: ["Odoo", "Pipedrive", "Logiic"]
    },
    {
      title: "Business & Solution Partners",
      items: ["MobiCell"]
    }
  ],
};

export type EcosystemPartner = { name: string; logo: string };

/**
 * Ecosystem partner logos shown in the Our Ecosystem marquee.
 * These are technology providers, specialists and delivery relationships —
 * NOT clients and NOT endorsements.
 * To add a partner, append one entry here. Nothing else needs to change.
 */
export const ecosystemPartners: EcosystemPartner[] = [
  { name: "Logiic", logo: logiicLogo },
  { name: "Pipedrive", logo: pipedriveLogo },
  { name: "Salesforce", logo: salesforceLogo },
  { name: "Odoo", logo: "https://cdn.worldvectorlogo.com/logos/odoo.svg" },
];


export const insightsMeta = {
  title: "HARAKA INSIGHT",
  description: "Perspectives on Business & Technology in Rwanda & East Africa",
  categories: ["Business", "Technology", "Transformation", "Industries", "Africa", "Innovation"],
};

export type Insight = { slug: string; title: string; category: string; excerpt: string; tags: string[] };

export const insights: Insight[] = [
  {
    slug: "digital-transformation-gap-east-africa",
    title: "The Digital Transformation Gap in East Africa",
    category: "Transformation",
    excerpt:
      "Many organizations across Rwanda and East Africa are ready to grow but are held back by fragmented systems — manual processes, disconnected tools, and technology that doesn't scale with the business. HARAKA exists to close that gap: pairing the right strategy with the right technology, so growth doesn't outpace the systems meant to support it.",
    tags: ["East Africa", "Systems Integration", "Growth"],
  },
  {
    slug: "why-local-expertise-matters",
    title: "Why Local Expertise Matters",
    category: "Africa",
    excerpt:
      "Global platforms (ERP, CRM, cloud) are powerful, but only when implemented with local context — local compliance, local business behavior, local infrastructure realities. HARAKA combines global-standard tools with on-the-ground understanding of how businesses in Rwanda and the region actually operate.",
    tags: ["Rwanda", "ERP", "Implementation"],
  },
  {
    slug: "technology-should-follow-strategy",
    title: "Technology Should Follow Strategy, Not Replace It",
    category: "Business",
    excerpt:
      "A common mistake growing companies make is buying technology before defining the problem it should solve. HARAKA's approach starts with strategy and consulting first — technology is the tool, not the starting point.",
    tags: ["Strategy", "Consulting", "Leadership"],
  },
  {
    slug: "africas-advantage-building-without-legacy-baggage",
    title: "Africa's Advantage: Building Without Legacy Baggage",
    category: "Africa",
    excerpt:
      "Many African businesses are building their digital foundations from scratch — no decades-old legacy systems to untangle. That's an advantage, not a disadvantage: it means organizations here can adopt modern, cloud-first, AI-ready systems immediately, rather than spending years migrating off outdated infrastructure the way many global companies must.",
    tags: ["Cloud", "Modernization", "Africa"],
  },
  {
    slug: "the-sme-growth-bottleneck",
    title: "The SME Growth Bottleneck",
    category: "Business",
    excerpt:
      "Small and mid-sized businesses across the region often hit a ceiling not because of market demand, but because internal systems — finance, HR, customer management — can't keep up with growth. Scaling revenue without scaling systems is one of the most common (and preventable) points of business failure. This is where consulting and technology intersect most directly.",
    tags: ["SME", "Operations", "Scaling"],
  },
  {
    slug: "public-and-private-sector-digital-readiness",
    title: "Public and Private Sector Digital Readiness",
    category: "Industries",
    excerpt:
      "As government institutions and development organizations across East Africa accelerate digital service delivery, the organizations best positioned to partner with them are those who understand both compliance-heavy public sector needs and modern technical delivery. Bridging that gap — speaking both languages — is where the next wave of impactful partnerships will come from.",
    tags: ["Public Sector", "Compliance", "Partnerships"],
  },
  {
    slug: "ai-adoption-fast-movers",
    title: "AI Adoption Will Separate Fast-Movers from Followers",
    category: "Innovation",
    excerpt:
      "Artificial intelligence is no longer an emerging trend — it's a competitive differentiator. Organizations that begin adopting AI-driven automation, analytics, and decision-support tools now will outpace those waiting for \"the right time.\" The right time is early, with the right guidance.",
    tags: ["AI", "Automation", "Analytics"],
  },
];


export const insightTags = Array.from(new Set(insights.flatMap((post) => post.tags))).sort();

export const careers = {
  headline: "Build What's Next.",
  copy: "Join HARAKA and help organizations across Africa use technology, innovation and better ways of working to create lasting growth.",
  openings: [] as { title: string; type: string; location: string }[],
};

export const contact = {
  headline: "Let's Talk",
  copy: "Whether you are looking to transform your operations, implement technology, improve performance or explore a new opportunity, talk to HARAKA.",
  primaryCta: "Start a Conversation",
  secondaryCta: "Contact Us",
};

/**
 * DRAFT CONTENT — NOT FOR PUBLICATION.
 * No testimonial may be published without explicit written client permission.
 * `testimonialsPublished` must stay false until real, approved quotes exist.
 */
export const testimonialsPublished = false;

export const testimonials = [
  {
    quote: "[Add real client testimonial]",
    role: "[Role]",
    org: "[Client organization type, location]",
    draft: true,
  },
  {
    quote: "[Add real client testimonial]",
    role: "[Role]",
    org: "[Client organization type, location]",
    draft: true,
  },
];
