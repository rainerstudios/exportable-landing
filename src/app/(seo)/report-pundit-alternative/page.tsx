import type { Metadata } from "next";
import { ComparisonPage } from "../components/comparison-page";

export const metadata: Metadata = {
  title: "Report Pundit Alternative — Exportable vs Report Pundit",
  description:
    "Compare Exportable vs Report Pundit for Shopify exports. Focused export tool vs complex reporting suite.",
  alternates: { canonical: "https://exportable.app/report-pundit-alternative" },
};

export default function ReportPunditAlternativePage() {
  return (
    <ComparisonPage
      competitor="Report Pundit"
      headline="Exportable vs Report Pundit"
      description="Report Pundit is a full reporting suite. If you just need to export data with custom columns, Exportable is simpler and cheaper."
      features={[
        { name: "Export orders", exportable: true, competitor: true },
        { name: "Export products", exportable: true, competitor: true },
        { name: "Export customers", exportable: true, competitor: true },
        { name: "Export inventory by location", exportable: true, competitor: true },
        { name: "Export draft orders", exportable: true, competitor: true },
        { name: "Export abandoned checkouts", exportable: true, competitor: true },
        { name: "Custom column selection", exportable: true, competitor: true },
        { name: "Drag-and-drop reorder", exportable: true, competitor: false },
        { name: "Reusable templates", exportable: true, competitor: true },
        { name: "Scheduled exports", exportable: true, competitor: true },
        { name: "Email delivery", exportable: true, competitor: true },
        { name: "Excel with styled headers", exportable: true, competitor: true },
        { name: "Charts & dashboards", exportable: false, competitor: true },
        { name: "Free plan", exportable: "5 exports/mo", competitor: "Limited" },
        { name: "Starting price", exportable: "$14/mo", competitor: "$9/mo" },
        { name: "Simple UI (no learning curve)", exportable: true, competitor: false },
      ]}
      whySwitch={[
        "Purpose-built for exports — no unnecessary reporting complexity",
        "Drag-and-drop column reordering in the UI",
        "Simpler interface with zero learning curve",
        "Install and export in under 60 seconds",
        "Formatted Excel with auto-width columns and styled headers",
      ]}
      competitorWeaknesses={[
        "Complex reporting UI — overkill if you just need exports",
        "Steep learning curve for building custom reports",
        "No drag-and-drop column reordering",
        "Report builder feels like a database query tool",
        "Many features you won't use if you just need CSV/Excel files",
      ]}
    />
  );
}
