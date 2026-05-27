"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

import { ParallaxLayer } from "./parallax-layer";
import { ParticleSystem } from "./particle-system";

const SAOLA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB43Xbwa16X-5I6aQwCCVxPh3Gvw7NHan0cJfu1Glmn5rIDmMjrkYRDFrUL6C1EHU_jvK4TzX0yl65TNxBFcBDKEjDrLW7XbBPrlkpvtYVQixv1M4K2ctP7bjp9CU2hP_aeism4N3bN1z8ZEDxO3aXaZtM1E-m1vqivKffTsdwK9ebv8CAMp1DEBC86muc33k3jcH5Sbrz1RCFNM-v0gG8YEucpSWUTS04qTRt1c8kS9lSYv6BO6O7j6hbO3UUDbaAZUY4EBc38rMg";

const LANGUR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDTFWs_TouLPdxYYt8OsMenDfBkSr41uS4MClWV8Er2SYwLugQ3mC4QcFFqwXFFqaIU_ahrbpLBWVxl-ieTXbHmrdvy8gyEJa03b4t5MTnTlLh5z5JEETffpQ3pENR2kn92qJpdV4ilTwO3x6xkHJhwfZ3nv1GLM2w-iD-Edmox6lHMod1z7bGVs2i4tgbSvKanKeuh3ABgH-ETVDANIF7n_5DHPaXrRyfOyQh6qB3RzhBoD0cbxZn27dheROSDX5oQSTnakeh3qFw";

const THREAT_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_Gi21JNTIy-ALaQII9HJoewR6DHPZd4VHQmE-c19f83m6hefbgcV8JnXOjhMgAZdX512rAaMsM_fste0IHadESemy86HeymtQU5XtrVYSaachHRD82vcrsly0AAicYaSDyhROFD0RQ-1dn9vUWvz3KX2wRVLJIq9-NlIK43Z0QEJl2dIar4auzUM2T_qpzzinRGtX5aDUFbiuVAqgbMTV8AWNQ6v4C3vpdtHMiPKOJy6VOVKbT4330AhrWywEqmNEVFhvAqdJbqI";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBpkC38kgi6lJwPSs6SH-l5dbo6rOfTV7BuuSFJ0jKpZaLUF3MSN7cxQX5mb2SFZT1PFpmS-G75bvRD8qJFXn9SH6LbfzS3zXJjw76om46m0OhL8YTc2WgQncutWUi4rnajac5AeMg6e1WqiY1d8Spvl7I9A89Kt2LRU4pJLk80Y4rCIUZj8_P5vl8vOzrygqLfNlgLXmXoa89wh2mXKf04as0LKtFukhBCP2BWcDdttgtp3qGsuDfP-kFrU_clgqcYHnTQyXKyseM";

interface Panel {
  id: string;
  label: string;
  title: string;
  body: string;
  bg: string;
  position: string;
  panelClasses: string;
}

const panels: Panel[] = [
  {
    id: "intro",
    label: "Ghosts of the Canopy",
    title: "Giants of the Mist",
    body: "Deep in the Annamite Range, creatures older than memory move through forests shrinking by the day. Each step brings us closer to the edge of their world — and ours.",
    bg: HERO_BG,
    position: "top-[15%] left-[8%] md:left-[15%]",
    panelClasses: "max-w-lg",
  },
  {
    id: "saola",
    label: "Critically Endangered",
    title: "The Saola",
    body: "The 'Asian Unicorn' — discovered only in 1992. Fewer than 100 may remain. It slips through dense foliage like a spirit, a quiet observer of its vanishing realm.",
    bg: SAOLA_IMG,
    position: "top-[22%] right-[8%] md:right-[10%]",
    panelClasses: "max-w-md",
  },
  {
    id: "langur",
    label: "Endangered",
    title: "Delacour's Langur",
    body: "A strikingly patterned primate confined to isolated limestone karst forests. They watch the encroaching world from high ledges, their silence broken only by distant quarrying.",
    bg: LANGUR_IMG,
    position: "bottom-[18%] left-[8%] md:left-[10%]",
    panelClasses: "max-w-md",
  },
  {
    id: "threats",
    label: "The Edge of Existence",
    title: "Fragmentation. Logging. Poaching.",
    body: "The threats are invisible until the silence becomes absolute. We are witnessing the quiet erasure of millennia of evolution — unless we act now.",
    bg: THREAT_BG,
    position: "top-[18%] right-[8%] md:right-[10%]",
    panelClasses: "max-w-lg",
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const layerScrollY = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * panels.length), panels.length - 1);
    setActiveIndex(idx);
  });

  return (
    <section
      id="species"
      ref={sectionRef}
      className="relative bg-[#0e0e0e]"
      style={{ height: `${panels.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden will-change-transform">
        {/* 3 depth layers per panel - crossfade + parallax */}
        <div className="absolute inset-0 bg-[#0e0e0e]">
          {/* Layer 1: Background images (speed=0) */}
          {panels.map((panel, idx) => (
            <ParallaxLayer
              key={panel.id}
              speed={0}
              scrollY={layerScrollY}
              className="absolute inset-0 bg-cover bg-center"
              style={
                { backgroundImage: `url('${panel.bg}')` } as React.CSSProperties
              }
              animate={{ opacity: activeIndex === idx ? 0.35 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ))}

          {/* Layer 2: Midground mist/fog (speed=0.15) - per panel */}
          {panels.map((panel, idx) => (
            <ParallaxLayer
              key={`mg-${panel.id}`}
              speed={0.15}
              scrollY={layerScrollY}
              className="absolute inset-0 pointer-events-none"
              style={
                {
                  background:
                    "radial-gradient(ellipse at 50% 30%, rgba(233, 193, 118, 0.05) 0%, transparent 60%)",
                } as React.CSSProperties
              }
              animate={{ opacity: activeIndex === idx ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ))}

          {/* Layer 3: Foreground dark gradient (speed=0.3) - constant */}
          <ParallaxLayer
            speed={0.3}
            scrollY={layerScrollY}
            className="absolute inset-0 pointer-events-none"
            style={
              {
                background:
                  "linear-gradient(to top, rgba(14,14,14,0.7) 0%, rgba(14,14,14,0.15) 20%, transparent 45%)",
              } as React.CSSProperties
            }
          />

          {/* Static readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/70 via-[#0e0e0e]/50 to-[#0e0e0e]/90" />
        </div>

        {/* Decorative blur orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-24 w-[22rem] h-[22rem] rounded-full blur-2xl"
            style={{ background: "rgba(233, 193, 118, 0.06)" }}
            animate={{ opacity: activeIndex === 3 ? 0.6 : 0.15 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-24 w-[22rem] h-[22rem] rounded-full blur-2xl"
            style={{ background: "rgba(190, 201, 192, 0.04)" }}
            animate={{ opacity: activeIndex === 0 ? 0.6 : 0.15 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Particle system overlay - only on threats panel */}
        {activeIndex === 3 && <ParticleSystem />}

        {/* Panel count indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
          {panels.map((_, idx) => (
            <motion.div
              key={idx}
              className="rounded-full origin-center"
              animate={{
                height: activeIndex === idx ? 32 : 12,
                width: activeIndex === idx ? 8 : 8,
                backgroundColor:
                  activeIndex === idx
                    ? "rgba(233, 193, 118, 1)"
                    : "rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Panel counter text */}
        <div className="absolute right-6 bottom-8 z-10">
          <motion.p
            className="font-body text-[11px] tracking-[0.15em] text-white/30 font-[500]"
            key={activeIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(panels.length).padStart(2, "0")}
          </motion.p>
        </div>

        {/* Panels */}
        {panels.map((panel, idx) => {
          const isActive = activeIndex === idx;
          const isPast = activeIndex > idx;

          return (
            <motion.div
              key={panel.id}
              className={`absolute z-10 ${panel.position} ${panel.panelClasses}`}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : isPast ? 0.95 : 0.95,
                y: isActive ? 0 : isPast ? 20 : -20,
                pointerEvents: isActive ? ("auto" as const) : ("none" as const),
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="px-6 md:px-0">
                {/* Label badge */}
                <motion.span
                  className="inline-block px-3 py-0.5 rounded-full bg-[#e9c176]/15 text-[#e9c176] font-body text-[11px] leading-[2] font-[500] tracking-wider uppercase mb-5"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{ duration: 0.4, delay: isActive ? 0.1 : 0 }}
                >
                  {panel.label}
                </motion.span>

                {/* Title */}
                <motion.h2
                  className="font-display text-[36px] leading-[1.1] md:text-[52px] md:leading-[1.1] tracking-[-0.02em] text-[#e5e2e1] mb-4"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 12,
                  }}
                  transition={{ duration: 0.5, delay: isActive ? 0.15 : 0 }}
                >
                  {panel.title}
                </motion.h2>

                {/* Body */}
                <motion.p
                  className="font-body text-[15px] md:text-[17px] leading-[1.7] font-[300] text-[#c3c8c2]"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 16,
                  }}
                  transition={{ duration: 0.5, delay: isActive ? 0.25 : 0 }}
                >
                  {panel.body}
                </motion.p>

                {/* Bottom accent line */}
                <motion.div
                  className="h-px mt-6"
                  style={{ background: "rgba(233, 193, 118, 0.3)" }}
                  animate={{
                    scaleX: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: isActive ? 0.35 : 0,
                  }}
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          );
        })}

        {/* Scroll hint at bottom */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          animate={{ opacity: activeIndex < panels.length - 1 ? 0.4 : 0 }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
