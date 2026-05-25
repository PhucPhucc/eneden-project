"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { ReactNode } from "react";

interface ParallaxLayerProps {
  speed: number;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /**
   * MotionValue for scroll position.
   * - Page scroll: omit this, uses useScroll() internally
   * - Section scroll: pass a derived MotionValue (e.g., useTransform of scrollYProgress)
   */
  scrollY?: MotionValue<number>;
  animate?: Record<string, number | string>;
  transition?: Record<string, unknown>;
}

/**
 * 3D depth layer that translates Y at `speed` relative to the scroll source.
 * speed=0 → static, speed=1 → moves 400px over 1000px of scroll.
 */
export function ParallaxLayer({
  speed,
  children,
  className,
  style,
  scrollY,
  animate,
  transition,
}: ParallaxLayerProps) {
  const { scrollY: pageScrollY } = useScroll();
  const source = scrollY ?? pageScrollY;

  const y = useTransform(source, [0, 1000], [0, -speed * 400]);

  return (
    <motion.div
      className={className}
      style={{ ...style, y, willChange: "transform" as const }}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
