import type { Metadata } from "next";
import { ComparisonPage } from "../components/comparison-page";

export const metadata: Metadata = {
  title: "Matrixify Alternative — Exportable vs Matrixify",
  description:
    "Compare Exportable vs Matrixify for Shopify data export. See why merchants switch to Exportable for simpler, faster exports.",
  alternates: { canonical: "https://exportable.app/matrixify-alternative" },
};

export default function MatrixifyAlternativePage() {
  return (
    <ComparisonPage
      competitor="Matrixify"
      headline="Exportable vs Matrixify"
      description="Matrixify is powerful but complex. If you just need clean data exports with custom columns, Exportable is simpler, faster, and more affordable."
      features={[
        { name: "Export orders", exportable: true, competitor: true },
        { name: "Export products", exportable: true, competitor: true },
        { name: "Export customers", exportable: true, competitor: true },
        { name: "Export inventory by location", exportable: true, competitor: true },
        { name: "Export draft orders", exportable: true, competitor: true },
        { name: "Export abandoned checkouts", exportable: true, competitor: true },
        { name: "Custom column selection", exportable: true, competitor: false },
        { name: "Drag-and-drop column reorder", exportable: true, competitor: false },
        { name: "Column rename / header mapping", exportable: true, competitor: false },
        { name: "Reusable export templates", exportable: true, competitor: false },
        { name: "Scheduled exports", exportable: true, competitor: true },
        { name: "Email delivery", exportable: true, competitor: false },
        { name: "Excel with styled headers", exportable: true, competitor: true },
        { name: "Import data", exportable: false, competitor: true },
        { name: "Free plan", exportable: "5 exports/mo", competitor: "10 items" },
        { name: "Starting paid price", exportable: "$14/mo", competitor: "$20/mo" },
      ]}
      whySwitch={[
        "Choose exactly which columns appear in your export",
        "Drag and drop to reorder columns — no spreadsheet editing after",
        "Save templates for one-click repeat exports",
        "Simpler UI — no import/migration complexity",
        "Lower starting price ($14 vs $20/month)",
        "Automatic email delivery of scheduled exports",
      ]}
      competitorWeaknesses={[
        "No custom column selection — you get all fields or nothing",
        "Complex UI designed for migration, not simple exports",
        "No column reordering or header renaming",
        "No reusable export templates",
        "Overkill if you just need clean CSV/Excel exports",
        "Higher learning curve for non-technical merchants",
      ]}
    />
  );
}
