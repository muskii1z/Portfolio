"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Settles a sticker/polaroid into place on load with a little tilt, and
 * wiggles it on hover. Only scale/rotate animate — never opacity — so the
 * element is fully visible before (and without) the animation.
 */
export function Pop({
  children,
  rotate = 0,
  delay = 0,
  className,
}: {
  children: ReactNode;
  rotate?: number;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={{ transform: `rotate(${rotate}deg)` }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ scale: 0.86, rotate: rotate - 8 }}
      animate={{ scale: 1, rotate }}
      whileHover={{ rotate: rotate + 3, y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 16, delay }}
    >
      {children}
    </motion.div>
  );
}
