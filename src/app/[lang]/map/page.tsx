import { notFound } from "next/navigation";

import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface MapPageProps {
  params: Promise<{ lang: string }>;
}

export default async function MapPage({ params }: MapPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return <main>{dictionary.stubs.map}</main>;
}
