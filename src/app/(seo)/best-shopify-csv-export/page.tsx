import type { Metadata } from "next";
import { BestToolsPage } from "../components/best-tools-page";

export const metadata: Metadata = {
  title: "Best Shopify CSV Export Apps in 2026",
  description:
    "Top Shopify apps for exporting data to CSV. Compare features, pricing, and column customization options.",
  alternates: { canonical: "https://exportable.app/best-shopify-csv-export" },
};

export default function BestCSVExportPage() {
  return (
    <BestToolsPage
      title="Best Shopify CSV Export Apps in 2026"
      intro="Need to export your Shopify data to CSV with more control than the built-in export? Here are the best options ranked by column customization, data sources, and value."
      tools={[
        {
          name: "Exportable",
          featured: true,
          description:
            "The most flexible CSV export app for Shopify. Choose exact columns, drag to reorder, rename headers, and save as templates.",
          pros: [
            "Choose exactly which columns appear in your CSV",
            "Drag-and-drop column reordering",
            "Rename column headers for your workflow",
            "6 data sources — more than any competitor",
            "Save templates for repeat exports",
          ],
          cons: ["No import capability"],
          pricing: "Free (5 exports/mo), Starter $14/mo, Growth $29/mo",
        },
        {
          name: "Matrixify",
          description:
            "Bulk import/export tool. CSV export is available but column selection is not customizable.",
          pros: ["Handles large volumes", "Import + export"],
          cons: ["No custom column selection", "Complex UI"],
          pricing: "Free (10 items), from $20/mo",
        },
        {
          name: "EZ Exporter",
          description:
            "Powerful CSV exports with query-based configuration.",
          pros: ["Many data sources", "FTP delivery"],
          cons: ["No free plan", "Technical setup required"],
          pricing: "From $29.95/mo",
        },
      ]}
    />
  );
}
