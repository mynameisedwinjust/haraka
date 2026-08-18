import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { fadeUpVariant } from "./animations";

export function Reveal({
  children,
  delay = 0,
  className,
  variant = fadeUpVariant,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: Variants;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={cn(className)}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      // Use custom for delay if needed, but for now let's just merge delay into a style or use framer motion's transition correctly
      transition={ delay ? { delay } : undefined }
    >
      {children}
    </motion.div>
  );
}
