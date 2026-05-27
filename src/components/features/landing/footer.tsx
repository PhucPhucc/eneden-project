import Image from "next/image";

const LOGO_TEXT = "{LOGO_TEXT}";
const COPYRIGHT_TEXT =
  "\u00a9 2024 Vanishing Canopies. Dedicated to the primary forests of Vietnam.";
const FOOTER_LINKS = ["Scientific Data", "Privacy Policy", "Contact Agency"];

export function Footer() {
  return (
    <footer className="w-full py-16 bg-[#0e0e0e] border-t border-[#434844]/20 relative z-10">
      <div className="flex justify-center mb-16">
        <Image
          src={"/eneden_logo_for_darkBG.png"}
          alt="VC Logo"
          width={300}
          height={64}
          quality={75}
        />
      </div>
      <div className="flex flex-col justify-between items-center px-[32px] gap-[16px] max-w-[1280px] mx-auto">
        <div className="text-center md:text-left">
          <p className="font-body text-[16px] leading-[1.6] font-[300] text-[#c3c8c2]/50">
            {COPYRIGHT_TEXT}
          </p>
        </div>

        <div className="flex gap-[16px] mt-4 md:mt-0">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-[12px] leading-[1.2] font-[500] tracking-[0.1em] text-[#c3c8c2]/50 hover:text-[#e9c176] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
