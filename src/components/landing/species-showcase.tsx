"use client";

import { motion } from "motion/react";

const SAOLA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB43Xbwa16X-5I6aQwCCVxPh3Gvw7NHan0cJfu1Glmn5rIDmMjrkYRDFrUL6C1EHU_jvK4TzX0yl65TNxBFcBDKEjDrLW7XbBPrlkpvtYVQixv1M4K2ctP7bjp9CU2hP_aeism4N3bN1z8ZEDxO3aXaZtM1E-m1vqivKffTsdwK9ebv8CAMp1DEBC86muc33k3jcH5Sbrz1RCFNM-v0gG8YEucpSWUTS04qTRt1c8kS9lSYv6BO6O7j6hbO3UUDbaAZUY4EBc38rMg";

const LANGUR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDTFWs_TouLPdxYYt8OsMenDfBkSr41uS4MClWV8Er2SYwLugQ3mC4QcFFqwXFFqaIU_ahrbpLBWVxl-ieTXbHmrdvy8gyEJa03b4t5MTnTlLh5z5JEETffpQ3pENR2kn92qJpdV4ilTwO3x6xkHJhwfZ3nv1GLM2w-iD-Edmox6lHMod1z7bGVs2i4tgbSvKanKeuh3ABgH-ETVDANIF7n_5DHPaXrRyfOyQh6qB3RzhBoD0cbxZn27dheROSDX5oQSTnakeh3qFw";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function SpeciesShowcase() {
  return (
    <section
      id="species"
      className="py-[120px] px-[32px] bg-[#131313] relative z-10"
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          className="font-body text-[12px] leading-[1.2] font-[500] tracking-[0.1em] uppercase text-[#e9c176] mb-[16px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          Ghosts of the Canopy
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-[32px] mt-[32px] items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Saola - Image heavy */}
          <motion.div
            className="md:col-span-7 overflow-hidden rounded-[0.5rem] bg-[#201f1f] relative group"
            variants={slideInLeft}
          >
            <motion.img
              alt="Intimate, soulful portrait of a Saola"
              className="w-full h-[60vh] object-cover opacity-90 group-hover:opacity-100"
              src={SAOLA_IMG}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2, ease: "easeOut" }}
              animate={{ scale: [1, 1.02, 1] }}
              style={{ animationDelay: "0s" }}
            />
            <div className="absolute bottom-0 left-0 w-full p-[32px] bg-gradient-to-t from-[#201f1f] to-transparent">
              <span className="inline-flex items-center gap-2 bg-[#353534]/80 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-[#ffb4ab]" />
                <span className="font-body text-[12px] leading-[1.2] font-[500] tracking-[0.1em] text-[#e5e2e1]">
                  Critically Endangered
                </span>
              </span>
              <h3 className="font-display text-[40px] leading-[1.2] text-[#bec9c0]">
                Saola
              </h3>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5 space-y-[16px] md:pl-[32px]"
            variants={slideInRight}
          >
            <p className="font-body text-[18px] leading-[1.8] tracking-[0.01em] font-[300] text-[#c3c8c2]">
              Known as the &ldquo;Asian Unicorn,&rdquo; the Saola is one of the
              rarest large mammals on Earth. Discovered only in 1992, it slips
              through the dense foliage like a spirit, a quiet observer of its
              own vanishing realm.
            </p>
            <div className="h-px w-full bg-[#434844]/30" />
            <ul className="space-y-4">
              {[
                { label: "Habitat", value: "Annamite Range" },
                { label: "Population", value: "Unknown, presumed < 100" },
              ].map((item) => (
                <li key={item.label}>
                  <div className="flex justify-between items-center group cursor-pointer">
                    <span className="font-body text-[16px] leading-[1.6] font-[300] text-[#e5e2e1] group-hover:text-[#e9c176] transition-colors">
                      {item.label}
                    </span>
                    <motion.span
                      className="font-body text-[16px] leading-[1.6] font-[300] text-[#c3c8c2] opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.value}
                    </motion.span>
                  </div>
                  <div className="h-px w-full bg-[#434844]/10 mt-4" />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Langur - Text heavy side first */}
          <motion.div
            className="md:col-span-5 order-2 md:order-1 space-y-[16px] md:pr-[32px] mt-[120px] md:mt-0"
            variants={slideInLeft}
          >
            <h3 className="font-display text-[40px] leading-[1.2] text-[#bec9c0] mt-[16px]">
              Delacour&apos;s Langur
            </h3>
            <p className="font-body text-[18px] leading-[1.8] tracking-[0.01em] font-[300] text-[#c3c8c2]">
              Restricted to a few isolated limestone karst forests, this
              strikingly patterned primate watches the encroaching world from
              high ledges. Their contemplative silence is broken only by the
              distant sounds of quarrying.
            </p>
            <motion.a
              className="inline-flex items-center gap-2 text-[#e9c176] hover:text-[#bec9c0] transition-colors mt-4 cursor-pointer"
              href="#"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="font-body text-[12px] leading-[1.2] font-[500] tracking-[0.1em] uppercase">
                Read Field Notes
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            className="md:col-span-7 order-1 md:order-2 overflow-hidden rounded-[0.5rem] bg-[#201f1f] relative group mt-[120px] md:mt-0"
            variants={slideInRight}
          >
            <motion.img
              alt="Close-up portrait of a Delacour's Langur"
              className="w-full h-[70vh] object-cover opacity-90 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
              src={LANGUR_IMG}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2, ease: "easeOut" }}
              animate={{ scale: [1, 1.02, 1] }}
              style={{ animationDuration: "8s" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
