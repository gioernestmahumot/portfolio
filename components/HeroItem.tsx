"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroItemProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function HeroItem({ children, delay = 0, className }: HeroItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
