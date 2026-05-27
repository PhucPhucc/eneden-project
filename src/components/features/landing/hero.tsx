"use client";

import { motion, useScroll, useTransform } from "motion/react";

import type { Dictionary } from "@/i18n/dictionaries";

import { ParallaxLayer } from "./parallax-layer";

const BACKGROUND_URL =
  "https://www.freud.org.uk/wp-content/uploads/2022/02/JuanCholo-CC-BY-SA-4.0.jpeg";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut" as const,
      delay: 0.3 + i * 0.25,
    },
  }),
};

interface HeroProps {
  dictionary: Dictionary["hero"];
}

export function Hero({ dictionary }: HeroProps) {
  const { scrollY } = useScroll();

  const bgScale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const bgY = useTransform(scrollY, [0, 500], ["0%", "8%"]);
  const textY = useTransform(scrollY, [0, 400], ["0%", "30%"]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layer 1 — Deepest background (slight zoom + parallax) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${BACKGROUND_URL}')`,
          scale: bgScale,
          y: bgY,
        }}
      />

      {/* Layer 2 — Midground mist (speed 0.15) */}
      <ParallaxLayer
        speed={0.15}
        className="absolute inset-0 pointer-events-none"
        style={
          {
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(233, 193, 118, 0.06) 0%, transparent 65%)",
          } as React.CSSProperties
        }
      />

      {/* Layer 3 — Foreground tree silhouettes (speed 0.3) */}
      <ParallaxLayer
        speed={0.3}
        className="absolute inset-0 pointer-events-none"
        style={
          {
            background:
              "linear-gradient(to top, rgba(19,19,19,0.5) 0%, rgba(19,19,19,0.1) 20%, transparent 40%)",
          } as React.CSSProperties
        }
      />

      {/* Layer 2 — Midground mist (speed 0.15) */}
      <ParallaxLayer
        speed={0.15}
        className="absolute inset-0 pointer-events-none"
        style={
          {
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(233, 193, 118, 0.06) 0%, transparent 65%)",
          } as React.CSSProperties
        }
      />

      {/* Readability gradient — stays static */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent" />

      {/* Layer 3 — Foreground tree silhouettes (speed 0.3) */}
      <ParallaxLayer
        speed={0.3}
        className="absolute inset-0 pointer-events-none"
        style={
          {
            background:
              "linear-gradient(to top, rgba(19,19,19,0.6) 0%, rgba(19,19,19,0.15) 25%, transparent 45%)",
          } as React.CSSProperties
        }
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-[32px] max-w-[1280px] mx-auto mt-20 md:mt-0"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.h1
          className="font-display text-[48px] leading-[1.1] md:text-[72px] md:leading-[1.1] tracking-[-0.02em] text-[#bec9c0] mb-[16px] drop-shadow-lg"
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {dictionary.heading}
        </motion.h1>
        <motion.p
          className="font-body text-[18px] leading-[1.8] tracking-[0.01em] font-[300] text-[#c3c8c2] max-w-2xl mx-auto drop-shadow-md"
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {dictionary.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2, duration: 1 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e9c176"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-70"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
