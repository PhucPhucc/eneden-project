"use client";

import { ChevronDown, Languages } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from "motion/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import {
  getLocalizedPath,
  hasLocale,
  type Locale,
  locales,
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface NavProps {
  dictionary: Dictionary["nav"];
  language: Dictionary["language"];
}

interface LanguageOption {
  locale: Locale;
  label: string;
}

interface LanguageDropdownProps {
  label: string;
  value: Locale;
  options: LanguageOption[];
  onChange: (locale: Locale) => void;
  fullWidth?: boolean;
}

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function LanguageDropdown({
  label,
  value,
  options,
  onChange,
  fullWidth = false,
}: LanguageDropdownProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.locale === value);

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  }

  function handleSelect(locale: Locale) {
    onChange(locale);
    setOpen(false);
  }

  return (
    <div
      className={`relative ${fullWidth ? "w-full" : ""}`}
      onBlur={handleBlur}
    >
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={`group flex h-10 items-center justify-between gap-2 rounded-full border border-[#e9c176]/20 bg-[#131313]/80 px-3 font-body text-[12px] font-[500] text-[#c3c8c2] shadow-[0_10px_30px_rgba(0,0,0,0.24)] outline-none ring-1 ring-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-[#e9c176]/45 hover:bg-[#171717]/90 hover:text-[#e9c176] focus:border-[#e9c176]/70 focus:ring-[#e9c176]/25 ${
          fullWidth ? "w-full" : "min-w-[126px]"
        }`}
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e9c176]/10 text-[#e9c176] ring-1 ring-[#e9c176]/15 transition-colors duration-300 group-hover:bg-[#e9c176]/15">
            <Languages size={13} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="truncate">{selected?.label}</span>
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.8}
          aria-hidden="true"
          className={`shrink-0 text-[#e9c176]/70 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`absolute top-full z-50 mt-2 overflow-hidden rounded-xl border border-[#e9c176]/15 bg-[#111]/95 p-1 shadow-[0_18px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.04] backdrop-blur-2xl ${
              fullWidth ? "left-0 right-0" : "right-0 min-w-[168px]"
            }`}
            role="listbox"
            aria-label={label}
          >
            {options.map((option) => {
              const isActive = option.locale === value;

              return (
                <button
                  key={option.locale}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => handleSelect(option.locale)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left font-body text-[13px] transition-colors duration-200 ${
                    isActive
                      ? "bg-[#e9c176]/12 text-[#e9c176]"
                      : "text-[#c3c8c2]/70 hover:bg-white/[0.04] hover:text-[#e9c176]"
                  }`}
                >
                  <span>{option.label}</span>
                  <span className="font-[600] text-[10px] tracking-[0.12em] text-current/60">
                    {option.locale.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Nav({ dictionary, language }: NavProps) {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathnameLocale = pathname.split("/")[1] ?? "";
  const currentLocale = hasLocale(pathnameLocale) ? pathnameLocale : "vi";
  const languageOptions = locales.map((locale) => ({
    locale,
    label: language[locale],
  }));

  function handleLocaleChange(nextLocale: Locale) {
    router.replace(getLocalizedPath(pathname, nextLocale));
    setMobileOpen(false);
  }

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
            src="/eneden_logo_for_darkBG.avif"
            alt={dictionary.logoAlt}
            width={140}
            height={44}
            className="block"
          />
        </a>

        {/* Center links */}
        <div className="flex items-center gap-0.5">
          {dictionary.links.map((link) => (
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
            {dictionary.learn}
          </a>
          <a
            href="#action"
            className="text-[12px] font-[500] tracking-[0.01em] text-[#0e0e0e] bg-[#e9c176] hover:bg-[#d4ae5e] px-4 py-1.5 rounded-full transition-all duration-300 font-body"
          >
            {dictionary.protect}
          </a>
          <LanguageDropdown
            label={language.label}
            value={currentLocale}
            options={languageOptions}
            onChange={handleLocaleChange}
          />
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
            src="/eneden_logo_for_darkBG.avif"
            alt={dictionary.logoAlt}
            width={120}
            height={44}
            className="block"
          />
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative w-8 h-8 flex items-center justify-center"
          aria-label={mobileOpen ? dictionary.closeMenu : dictionary.openMenu}
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
              {dictionary.links.map((link) => (
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
                  {dictionary.learn}
                </a>
                <a
                  href="#action"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block text-[13px] font-[500] tracking-[0.01em] text-[#0e0e0e] bg-[#e9c176] hover:bg-[#d4ae5e] px-6 py-2.5 rounded-full transition-all duration-300 font-body"
                >
                  {dictionary.protect}
                </a>
                <LanguageDropdown
                  label={language.label}
                  value={currentLocale}
                  options={languageOptions}
                  onChange={handleLocaleChange}
                  fullWidth
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
