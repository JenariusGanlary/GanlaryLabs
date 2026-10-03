import BusinessDemo from "@/components/demos/BusinessDemo";
import { demos } from "@/components/demos/demoData";

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }));
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = demos[slug];

  if (!config) {
    return null;
  }

  return <BusinessDemo config={config} />;
}
