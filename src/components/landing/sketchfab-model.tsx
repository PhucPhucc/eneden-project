"use client";

import { useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const MODEL_ID = "a76eb200d5fc4100b4def2465c281010";
const SKETCHFAB_BADGE = "3D Species Scan";
const SKETCHFAB_TITLE = "Cá Thù Lù";
const SKETCHFAB_DESC =
  "Heniochus — A reef butterflyfish scanned in high detail by the Hue Museum of Heritages. Rotate and explore.";
const SKETCHFAB_MODEL_BY = "Model by ";
const SKETCHFAB_MUSEUM = "Hue Museum of Heritages";
const SKETCHFAB_ON = "on Sketchfab";

export function SketchfabModel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  useEffect(() => {
    return rotation.on("change", (rad) => {
      const iframe = iframeRef.current;
      if (!iframe?.contentWindow) return;
      iframe.contentWindow.postMessage(
        JSON.stringify({
          method: "setCameraLookAt",
          params: [
            [Math.sin(rad) * 3, 0.5, Math.cos(rad) * 3],
            [0, 0, 0],
          ],
        }),
        "*",
      );
    });
  }, [rotation]);

  return (
    <section
      ref={sectionRef}
      id="species-3d"
      className="relative w-full py-24 md:py-32 overflow-hidden bg-[#0e0e0e]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e9c176]/[0.03] blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 max-w-[1280px] mx-auto">
        <div
          className="text-center mb-10 md:mb-14"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <span className="inline-block px-3 py-0.5 rounded-full bg-[#e9c176]/15 text-[#e9c176] font-body text-[11px] font-[500] tracking-wider uppercase mb-4">
            {SKETCHFAB_BADGE}
          </span>
          <h2 className="font-display text-[32px] md:text-[44px] leading-[1.15] tracking-[-0.02em] text-[#e5e2e1] mb-4">
            {SKETCHFAB_TITLE}
          </h2>
          <p className="font-body text-[15px] md:text-[17px] leading-[1.7] font-[300] text-[#c3c8c2] max-w-xl mx-auto">
            {SKETCHFAB_DESC}
          </p>
        </div>

        <div
          className="relative aspect-[4/3] md:aspect-[16/9] max-w-[900px] mx-auto rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/40 bg-[#080808]"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView
              ? "scale(1) translateY(0)"
              : "scale(0.96) translateY(20px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}
        >
          <iframe
            ref={iframeRef}
            src={`https://sketchfab.com/models/${MODEL_ID}/embed?autospin=0&autostart=1&preload=1&ui_controls=1&ui_infos=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
            title="Cá Thù Lù 3D Model"
          />
        </div>

        <p
          className="text-center mt-4 font-body text-[11px] text-white/20"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.6s ease 0.4s",
          }}
        >
          {SKETCHFAB_MODEL_BY}
          <a
            href="https://sketchfab.com/hue-museum-of-heritages"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#e9c176] transition-colors"
          >
            {SKETCHFAB_MUSEUM}
          </a>{" "}
          {SKETCHFAB_ON}
        </p>
      </div>
    </section>
  );
}
