import { AtmosphericQuote } from "@/components/features/landing/atmospheric-quote";
import { CTASection } from "@/components/features/landing/cta-section";
import { Footer } from "@/components/features/landing/footer";
import { Hero } from "@/components/features/landing/hero";
import { MuseumSection } from "@/components/features/landing/museum-section";
import { Nav } from "@/components/features/landing/nav";
import { ScrollStory } from "@/components/features/landing/scroll-story";

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
