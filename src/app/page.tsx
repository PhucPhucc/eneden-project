import { AtmosphericQuote } from "@/components/landing/atmospheric-quote";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { MuseumSection } from "@/components/landing/museum-section";
import { Nav } from "@/components/landing/nav";
import { ScrollStory } from "@/components/landing/scroll-story";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="fog-layer" />
      </div>

      <Nav />

      <main className="relative z-10">
        <Hero />
        <AtmosphericQuote />
        <ScrollStory />
        <MuseumSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
