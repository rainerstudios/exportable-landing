import type { Metadata } from "next";
import { ComparisonPage } from "../components/comparison-page";

export const metadata: Metadata = {
  title: "EZ Exporter Alternative — Exportable vs EZ Exporter",
  description:
    "Compare Exportable vs EZ Exporter for Shopify data export. Better column control, more data sources, simpler pricing.",
  alternates: { canonical: "https://exportable.app/ez-exporter-alternative" },
};

export default function EZExporterAlternativePage() {
  return (
    <ComparisonPage
      competitor="EZ Exporter"
      headline="Exportable vs EZ Exporter"
      description="EZ Exporter offers exports but with a complex interface and higher pricing. Exportable provides the same power with a cleaner experience."
      features={[
        { name: "Export orders", exportable: true, competitor: true },
        { name: "Export products", exportable: true, competitor: true },
        { name: "Export customers", exportable: true, competitor: true },
        { name: "Export inventory by location", exportable: true, competitor: true },
        { name: "Export draft orders", exportable: true, competitor: true },
        { name: "Export abandoned checkouts", exportable: true, competitor: true },
        { name: "Visual column picker", exportable: true, competitor: false },
        { name: "Drag-and-drop column reorder", exportable: true, competitor: false },
        { name: "Reusable templates", exportable: true, competitor: true },
        { name: "Scheduled exports", exportable: true, competitor: true },
        { name: "Email delivery", exportable: true, competitor: true },
        { name: "Excel format", exportable: true, competitor: true },
        { name: "Simple setup (< 1 min)", exportable: true, competitor: false },
        { name: "Free plan", exportable: "5 exports/mo", competitor: false },
        { name: "Starting price", exportable: "$14/mo", competitor: "$29.95/mo" },
      ]}
      whySwitch={[
        "Visual column picker — check the fields you want, done",
        "Drag-and-drop column reordering in the UI",
        "Free plan to get started (EZ Exporter has no free tier)",
        "Half the price — Starter at $14 vs EZ Exporter at $29.95",
        "Cleaner, modern interface built on Shopify Polaris",
      ]}
      competitorWeaknesses={[
        "No free plan — starts at $29.95/month",
        "Complex configuration UI with steep learning curve",
        "No visual drag-and-drop column reordering",
        "Query-based column selection instead of simple checkboxes",
        "Higher cost for equivalent features",
      ]}
    />
  );
}
