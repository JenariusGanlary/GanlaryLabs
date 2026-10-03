import BusinessDemo from "@/components/demos/BusinessDemo";
import { Education, LocalService, RealEstate, Restaurant, Clinic, Salon } from "@/components/demos/BespokeDemos";
import { demos } from "@/components/demos/demoData";

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }));
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = demos[slug];
  if (!config) return null;

  if (slug === "restaurant") return <Restaurant c={config} />;
  if (slug === "clinic") return <Clinic c={config} />;
  if (slug === "real-estate") return <RealEstate c={config} />;
  if (slug === "salon") return <Salon c={config} />;
  if (slug === "education") return <Education c={config} />;
  if (slug === "local-service") return <LocalService c={config} />;

  return <BusinessDemo config={config} />;
}
