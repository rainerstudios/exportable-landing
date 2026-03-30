import type { Metadata } from "next";
import { ComparisonPage } from "../components/comparison-page";

export const metadata: Metadata = {
  title: "Simple Export Alternative — Exportable vs Simple Export",
  description:
    "Compare Exportable vs Simple Export Data for Shopify. More data sources, custom columns, and scheduled exports.",
  alternates: { canonical: "https://exportable.app/simple-export-alternative" },
};

export default function SimpleExportAlternativePage() {
  return (
    <ComparisonPage
      competitor="Simple Export Data"
      headline="Exportable vs Simple Export Data"
      description="Simple Export covers basics but lacks advanced column control and newer data sources. Exportable gives you full control over what and how you export."
      features={[
        { name: "Export orders", exportable: true, competitor: true },
        { name: "Export products", exportable: true, competitor: true },
        { name: "Export customers", exportable: true, competitor: true },
        { name: "Export inventory by location", exportable: true, competitor: false },
        { name: "Export draft orders", exportable: true, competitor: false },
        { name: "Export abandoned checkouts", exportable: true, competitor: false },
        { name: "Custom column selection", exportable: true, competitor: "Limited" },
        { name: "Drag-and-drop column reorder", exportable: true, competitor: false },
        { name: "Reusable templates", exportable: true, competitor: false },
        { name: "Scheduled exports", exportable: true, competitor: true },
        { name: "Email delivery", exportable: true, competitor: true },
        { name: "Excel format", exportable: true, competitor: true },
        { name: "Metafield export", exportable: true, competitor: "Limited" },
        { name: "Free plan", exportable: "5 exports/mo", competitor: "Limited" },
      ]}
      whySwitch={[
        "6 data sources vs 3 — including inventory, drafts, and abandoned checkouts",
        "Full custom column selection with drag-and-drop reordering",
        "Save and reuse export templates",
        "Metafield export on Growth plan",
        "Formatted Excel with styled headers and auto-width",
      ]}
      competitorWeaknesses={[
        "No inventory by location export",
        "No draft order or abandoned checkout export",
        "Limited column customization",
        "No drag-and-drop column reordering",
        "No reusable templates",
      ]}
    />
  );
}
