export function Footer() {
  return (
    <footer className="w-full py-[120px] bg-[#0e0e0e] border-t border-[#434844]/20 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-[32px] gap-[16px] max-w-[1280px] mx-auto">
        <div className="font-display text-[72px] leading-[1.1] tracking-[-0.02em] text-[#e9c176] opacity-80 hover:opacity-100 transition-opacity">
          VC.
        </div>

        <div className="text-center md:text-left">
          <p className="font-body text-[16px] leading-[1.6] font-[300] text-[#c3c8c2]/50">
            &copy; 2024 Vanishing Canopies. Dedicated to the primary forests of
            Vietnam.
          </p>
        </div>

        <div className="flex gap-[16px] mt-4 md:mt-0">
          {["Scientific Data", "Privacy Policy", "Contact Agency"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="font-body text-[12px] leading-[1.2] font-[500] tracking-[0.1em] text-[#c3c8c2]/50 hover:text-[#e9c176] transition-colors duration-300"
              >
                {link}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
