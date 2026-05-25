"use client";

import { motion } from "motion/react";

export function CTASection() {
  return (
    <section
      id="action"
      className="py-[120px] bg-[#0e0e0e] text-center px-[32px] flex flex-col items-center justify-center min-h-[60vh] relative overflow-hidden"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233,193,118,0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="font-display text-[32px] leading-[1.2] md:text-[40px] md:leading-[1.2] text-[#bec9c0] mb-[16px]">
          There is Still Time.
        </h2>

        <p className="font-body text-[16px] leading-[1.6] font-[300] text-[#c3c8c2] max-w-lg mx-auto mb-[32px]">
          Stand with the rangers. Support habitat restoration. Refuse to let the
          canopy vanish without a sound.
        </p>

        <motion.button
          className="bg-[#e9c176] text-[#261900] font-body text-[12px] leading-[1.2] font-[500] tracking-[0.1em] uppercase px-8 py-4 rounded-[0.125rem] hover:bg-[#ffdea5] transition-colors duration-300 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(233,193,118,0.2)",
              "0 0 40px rgba(233,193,118,0.6)",
              "0 0 20px rgba(233,193,118,0.2)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          Protect the Silence
        </motion.button>
      </motion.div>
    </section>
  );
}
