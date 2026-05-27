import { notFound } from "next/navigation";

import { AtmosphericQuote } from "@/components/features/landing/atmospheric-quote";
import { CTASection } from "@/components/features/landing/cta-section";
import { Footer } from "@/components/features/landing/footer";
import { Hero } from "@/components/features/landing/hero";
import { MuseumSection } from "@/components/features/landing/museum-section";
import { Nav } from "@/components/features/landing/nav";
import { ScrollStory } from "@/components/features/landing/scroll-story";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface HomeProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="fog-layer" />
      </div>

      <Nav dictionary={dictionary.nav} language={dictionary.language} />

      <main className="relative z-10">
        <Hero dictionary={dictionary.hero} />
        <AtmosphericQuote quote={dictionary.quote} />
        <ScrollStory dictionary={dictionary.story} />
        <MuseumSection dictionary={dictionary.museum} />
        <CTASection dictionary={dictionary.cta} />
      </main>

      <Footer dictionary={dictionary.footer} />
    </>
  );
}
