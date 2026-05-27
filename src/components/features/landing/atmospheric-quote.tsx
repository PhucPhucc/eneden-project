"use client";

import { motion } from "motion/react";

interface AtmosphericQuoteProps {
  quote: string;
}

export function AtmosphericQuote({ quote }: AtmosphericQuoteProps) {
  return (
    <section className="py-[120px] px-[32px] bg-[#0e0e0e] relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-[32px]"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e9c176"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto opacity-80"
          >
            <path d="M10 10l.2-.2M14 10l.2-.2M12 14l.2-.2" />
            <path d="M3 12c0 1.5.5 3 1.5 4" />
            <path d="M3 12c0-1.5.5-3 1.5-4" />
            <path d="M21 12c0-1.5-.5-3-1.5-4" />
            <path d="M21 12c0 1.5-.5 3-1.5 4" />
            <path d="M12 21c1.5 0 3-.5 4-1.5" />
            <path d="M12 21c-1.5 0-3-.5-4-1.5" />
            <path d="M12 3c1.5 0 3 .5 4 1.5" />
            <path d="M12 3c-1.5 0-3 .5-4 1.5" />
            <circle cx="12" cy="12" r="1" fill="#e9c176" />
          </svg>
        </motion.div>

        <motion.p
          className="font-display text-[32px] leading-[1.2] md:text-[40px] md:leading-[1.2] text-[#bec9c0]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          {quote}
        </motion.p>

        <motion.div
          className="w-16 h-px bg-[#8d928d]/30 mx-auto mt-[32px]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          style={{ transformOrigin: "center" }}
        />
      </div>
    </section>
  );
}
