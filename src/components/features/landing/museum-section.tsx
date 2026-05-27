"use client";

import { AnimatePresence, motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

interface Species {
  id: string;
  name: string;
  scientificName: string;
  status: "CR" | "EN" | "VU";
  statusLabel: string;
  statusColor: string;
  image: string;
  sketchfabId?: string;
  habitat: string;
  discovered: string;
  population: string;
  description: string;
}

const speciesList: Species[] = [
  {
    id: "saola",
    name: "Sao La",
    scientificName: "Pseudoryx nghetinhensis",
    status: "CR",
    statusLabel: "Critically Endangered",
    statusColor: "#dc2626",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB43Xbwa16X-5I6aQwCCVxPh3Gvw7NHan0cJfu1Glmn5rIDmMjrkYRDFrUL6C1EHU_jvK4TzX0yl65TNxBFcBDKEjDrLW7XbBPrlkpvtYVQixv1M4K2ctP7bjp9CU2hP_aeism4N3bN1z8ZEDxO3aXaZtM1E-m1vqivKffTsdwK9ebv8CAMp1DEBC86muc33k3jcH5Sbrz1RCFNM-v0gG8YEucpSWUTS04qTRt1c8kS9lSYv6BO6O7j6hbO3UUDbaAZUY4EBc38rMg",
    habitat: "Dãy Trường Sơn, Việt Nam & Lào",
    discovered: "1992",
    population: "Ước tính <100 cá thể",
    description:
      "Kỳ lân châu Á — một trong những loài thú hiếm nhất thế giới, được phát hiện năm 1992.",
  },
  {
    id: "ca-thu-lu",
    name: "Cá Thù Lù",
    scientificName: "Heniochus",
    status: "VU",
    statusLabel: "Vulnerable",
    statusColor: "#eab308",
    image:
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600&q=80",
    sketchfabId: "a76eb200d5fc4100b4def2465c281010",
    habitat: "Rạn san hô, miền Trung Việt Nam",
    discovered: "—",
    population: "Thiếu dữ liệu",
    description:
      "Cá bướm rạn san hô với vây lưng dài đặc trưng, hiện diện trong vùng biển Việt Nam.",
  },
  {
    id: "vooc-cat-ba",
    name: "Voọc Cát Bà",
    scientificName: "Trachypithecus poliocephalus",
    status: "CR",
    statusLabel: "Critically Endangered",
    statusColor: "#dc2626",
    image:
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&q=80",
    habitat: "Đảo Cát Bà, Hải Phòng",
    discovered: "—",
    population: "~60–70 cá thể",
    description:
      "Một trong những loài linh trưởng quý hiếm nhất Trái Đất, đặc hữu đảo Cát Bà.",
  },
  {
    id: "rua-ho-guom",
    name: "Rùa Hồ Gươm",
    scientificName: "Rafetus swinhoei",
    status: "CR",
    statusLabel: "Critically Endangered",
    statusColor: "#dc2626",
    image:
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&q=80",
    habitat: "Hồ Gươm & Hồ Đồng Mô",
    discovered: "—",
    population: "≤4 cá thể toàn cầu",
    description:
      "Rùa giải Hồ Gươm huyền thoại — biểu tượng của nền độc lập Việt Nam.",
  },
  {
    id: "te-te",
    name: "Tê Tê Java",
    scientificName: "Manis javanica",
    status: "CR",
    statusLabel: "Critically Endangered",
    statusColor: "#dc2626",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80",
    habitat: "Rừng thấp, Nam Việt Nam",
    discovered: "—",
    population: "Suy giảm nhanh chóng",
    description:
      "Tê tê Sunda — loài động vật bị buôn bán trái phép nhiều nhất thế giới.",
  },
  {
    id: "vuon-den",
    name: "Vượn Đen Má Trắng",
    scientificName: "Nomascus leucogenys",
    status: "CR",
    statusLabel: "Critically Endangered",
    statusColor: "#dc2626",
    image:
      "https://images.unsplash.com/photo-1574598587234-0d6e43b4f3c1?w=600&q=80",
    habitat: "Bắc Việt Nam & Lào",
    discovered: "—",
    population: "Ước tính <500 cá thể",
    description:
      "Vượn đen má trắng phương Bắc, nổi tiếng với tiếng hót buổi sáng đặc trưng.",
  },
];

const MUSEUM_BADGE = "Vietnam Red Data Book";
const MUSEUM_HEADING = "B\u1ea3o t\xe0ng S\xe1ch \u0110\u1ecf";
const MUSEUM_DESC =
  "C\xe1c lo\xe0i \u0111\u1ed9ng v\u1eadt qu\xfd hi\u1ebfm trong S\xe1ch \u0110\u1ecf Vi\u1ec7t Nam \u2014 m\u1ed7i lo\xe0i l\xe0 m\u1ed9t c\xe2u chuy\u1ec7n v\u1ec1 s\u1ef1 s\u1ed1ng \u0111ang d\u1ea7n bi\u1ebfn m\u1ea5t.";
const MUSEUM_COMING_SOON = "3D MODEL COMING SOON";

export function MuseumSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedId, setSelectedId] = useState(speciesList[0].id);

  const selected =
    speciesList.find((s) => s.id === selectedId) ?? speciesList[0];

  return (
    <section
      ref={sectionRef}
      id="museum"
      className="relative w-full py-24 md:py-32 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Ambient spotlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#e9c176]/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-3xl pointer-events-none" />

      {/* Subtle museum floor line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 px-6 max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/5 text-white/40 font-body text-[10px] font-[500] tracking-[0.15em] uppercase mb-5">
            {MUSEUM_BADGE}
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-[#e5e2e1] mb-3">
            {MUSEUM_HEADING}
          </h2>
          <p className="font-body text-[15px] md:text-[17px] leading-[1.7] font-[300] text-[#c3c8c2] max-w-2xl mx-auto">
            {MUSEUM_DESC}
          </p>
        </motion.div>

        {/* Main layout: grid left + detail right */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10">
          {/* LEFT: Species grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="w-full xl:w-[45%] grid grid-cols-2 gap-3 md:gap-4 auto-rows-fr"
          >
            {speciesList.map((species) => {
              const isActive = species.id === selectedId;
              const statusColors: Record<string, string> = {
                CR: "#dc2626",
                EN: "#f59e0b",
                VU: "#eab308",
              };
              const sc = statusColors[species.status] ?? "#6b7280";

              return (
                <motion.button
                  key={species.id}
                  onClick={() => setSelectedId(species.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative rounded-xl overflow-hidden text-left cursor-pointer border transition-all duration-400 bg-[#111111] ${
                    isActive
                      ? "border-[#e9c176]/50 ring-1 ring-[#e9c176]/20"
                      : "border-white/[0.06] hover:border-white/15"
                  }`}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${species.image}')`,
                        transform: isActive ? "scale(1.08)" : "scale(1)",
                      }}
                    />
                    {/* Dark gradient from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
                  </div>

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-[10px] font-[600] font-body px-1.5 py-0.5 rounded"
                        style={{
                          color: sc,
                          backgroundColor: `${sc}15`,
                        }}
                      >
                        {species.status}
                      </span>
                    </div>
                    <h3 className="font-body text-[13px] md:text-[15px] font-[500] text-[#e5e2e1] leading-tight">
                      {species.name}
                    </h3>
                    <p className="font-body text-[9px] md:text-[10px] text-white/30 italic mt-0.5 truncate">
                      {species.scientificName}
                    </p>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#e9c176]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* RIGHT: Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full xl:w-[55%] flex flex-col gap-5"
            >
              {/* 3D Viewer or Image */}
              <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-[#080808] aspect-[16/10] xl:aspect-[16/9]">
                {selected.sketchfabId ? (
                  <iframe
                    src={`https://sketchfab.com/models/${selected.sketchfabId}/embed?autospin=0.2&autostart=1&preload=1&ui_controls=1&ui_infos=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
                    title={`${selected.name} 3D Model`}
                  />
                ) : (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${selected.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/5">
                      <span className="font-body text-[10px] text-white/40 tracking-[0.1em]">
                        {MUSEUM_COMING_SOON}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Species info */}
              <div className="space-y-4 px-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-[10px] font-[600] font-body px-2 py-0.5 rounded"
                        style={{
                          color: selected.statusColor,
                          backgroundColor: `${selected.statusColor}15`,
                        }}
                      >
                        {selected.status} — {selected.statusLabel}
                      </span>
                    </div>
                    <h3 className="font-display text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.02em] text-[#e5e2e1]">
                      {selected.name}
                    </h3>
                    <p className="font-body text-[13px] italic text-white/30 mt-0.5">
                      {selected.scientificName}
                    </p>
                  </div>
                </div>

                <p className="font-body text-[14px] md:text-[15px] leading-[1.7] font-[300] text-[#c3c8c2]">
                  {selected.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  {[
                    { label: "Sinh cảnh", value: selected.habitat },
                    { label: "Phát hiện", value: selected.discovered },
                    { label: "Quần thể", value: selected.population },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.04]"
                    >
                      <p className="font-body text-[9px] font-[500] tracking-[0.1em] uppercase text-white/25 mb-1">
                        {item.label}
                      </p>
                      <p className="font-body text-[12px] md:text-[13px] text-white/60 leading-snug">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
