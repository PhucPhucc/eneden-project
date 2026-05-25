import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { AtmosphericQuote } from "@/components/landing/atmospheric-quote";
import { ScrollStory } from "@/components/landing/scroll-story";
import { MuseumSection } from "@/components/landing/museum-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

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
