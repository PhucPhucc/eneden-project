"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "The Forest" },
  { href: "#species", label: "Species" },
  { href: "#threats", label: "Threats" },
  { href: "#conservation", label: "Conservation" },
];

const NAV_LOGO = "EXE";
const NAV_TAGLINE = "EXE GR3";
const NAV_LEARN = "Learn More";
const NAV_PROTECT = "Protect Now";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed left-1/2 -translate-x-1/2 z-50
        w-[calc(100%-32px)] max-w-[1100px]
        rounded-2xl border border-white/[0.06]
        transition-all duration-500
        ${
          scrolled
            ? "top-3 bg-[#131313]/85 backdrop-blur-2xl shadow-lg shadow-black/20"
            : "top-4 bg-[#131313]/60 backdrop-blur-xl"
        }`}
    >
      {/* Desktop Nav */}
      <nav
        aria-label="Main"
        data-orientation="horizontal"
        className="hidden lg:flex items-center justify-between px-5 h-14"
      >
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <Image
            src="/eneden_logo_for_darkBG.png"
            alt="VC Logo"
            width={140}
            height={44}
            className="block"
          />
        </a>

        {/* Center links */}
        <div className="flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-[13px] font-[400] text-white/45 hover:text-[#e9c176] transition-colors duration-300 font-body tracking-[0.01em]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#action"
            className="text-[12px] font-[500] text-white/35 hover:text-white/65 transition-colors duration-300 font-body"
          >
            {NAV_LEARN}
          </a>
          <a
            href="#action"
            className="text-[12px] font-[500] tracking-[0.01em] text-[#0e0e0e] bg-[#e9c176] hover:bg-[#d4ae5e] px-4 py-1.5 rounded-full transition-all duration-300 font-body"
          >
            {NAV_PROTECT}
          </a>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav
        aria-label="Main"
        data-orientation="vertical"
        className="lg:hidden flex items-center justify-between px-4 h-13"
      >
        <a href="#" className="flex items-center shrink-0">
          <Image
            src="/eneden_logo_for_darkBG.png"
            alt="VC Logo"
            width={120}
            height={44}
            className="block"
          />
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative w-8 h-8 flex items-center justify-center"
          aria-label={mobileOpen ? "Close nav menu" : "Open nav menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              fill="none"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                stroke="rgba(255,255,255,0.5)"
                strokeLinecap="round"
                d="M3.5 3.5l9 9M12.5 3.5l-9 9"
              />
            </svg>
          ) : (
            <svg
              id="hamburger"
              fill="none"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                stroke="rgba(255,255,255,0.5)"
                strokeLinecap="round"
                d="M1.5 3.5h13M1.5 8h13M1.5 12.5h13"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[15px] font-[400] text-white/50 hover:text-[#e9c176] transition-colors duration-300 font-body"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-5 border-t border-white/5 space-y-4">
                <a
                  href="#action"
                  onClick={() => setMobileOpen(false)}
                  className="block text-[14px] font-[500] text-white/40 hover:text-white/70 transition-colors duration-300 font-body"
                >
                  {NAV_LEARN}
                </a>
                <a
                  href="#action"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block text-[13px] font-[500] tracking-[0.01em] text-[#0e0e0e] bg-[#e9c176] hover:bg-[#d4ae5e] px-6 py-2.5 rounded-full transition-all duration-300 font-body"
                >
                  {NAV_PROTECT}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
