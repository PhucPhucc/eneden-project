"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { ParticleSystem } from "./particle-system";

const THREAT_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_Gi21JNTIy-ALaQII9HJoewR6DHPZd4VHQmE-c19f83m6hefbgcV8JnXOjhMgAZdX512rAaMsM_fste0IHadESemy86HeymtQU5XtrVYSaachHRD82vcrsly0AAicYaSDyhROFD0RQ-1dn9vUWvz3KX2wRVLJIq9-NlIK43Z0QEJl2dIar4auzUM2T_qpzzinRGtX5aDUFbiuVAqgbMTV8AWNQ6v4C3vpdtHMiPKOJy6VOVKbT4330AhrWywEqmNEVFhvAqdJbqI";

const THREAT_HEADING = "The Edge of Existence";
const THREAT_BODY =
  "Habitat fragmentation. Illegal logging. Poaching snares that carpet the forest floor like deadly wire webs. The threats are invisible until the silence becomes absolute. We are witnessing the quiet erasure of millennia of evolution.";

export function ThreatSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const desaturate = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    ["grayscale(0%) brightness(1)", "grayscale(100%) brightness(0.6)"],
  );

  const textY = useTransform(scrollYProgress, [0, 0.5], ["40px", "0px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="threats"
      className="relative py-[120px] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#131313] z-0">
        <motion.div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: `url('${THREAT_BG}')`,
            filter: desaturate,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-[#131313]/80 to-[#0e0e0e]" />
        <ParticleSystem />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-[32px] text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#434844"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-[32px]"
        >
          <path d="M16 3h5v5M8 3H3v5M12 8v8M8 12h8" />
          <path d="M3 16v5h5M16 21h5v-5" />
        </svg>

        <h2 className="font-display text-[48px] leading-[1.1] md:text-[72px] md:leading-[1.1] tracking-[-0.02em] text-[#e5e2e1] mb-[16px]">
          {THREAT_HEADING}
        </h2>

        <p className="font-body text-[18px] leading-[1.8] tracking-[0.01em] font-[300] text-[#c3c8c2] mb-[32px] max-w-2xl mx-auto">
          {THREAT_BODY}
        </p>
      </motion.div>
    </section>
  );
}
