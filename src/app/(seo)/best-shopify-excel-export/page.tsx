import type { Metadata } from "next";
import { BestToolsPage } from "../components/best-tools-page";

export const metadata: Metadata = {
  title: "Best Shopify Excel Export Apps in 2026",
  description:
    "Export Shopify data to formatted Excel (.xlsx) with styled headers and custom columns. Compare the top apps.",
  alternates: { canonical: "https://exportable.app/best-shopify-excel-export" },
};

export default function BestExcelExportPage() {
  return (
    <BestToolsPage
      title="Best Shopify Excel Export Apps in 2026"
      intro="Need your Shopify data in a properly formatted Excel file — not just a CSV renamed to .xlsx? These apps export real Excel files with styled headers, auto-width columns, and proper data types."
      tools={[
        {
          name: "Exportable",
          featured: true,
          description:
            "Exports formatted .xlsx files with styled headers, auto-width columns, and proper number/date formatting. Choose custom columns and save templates.",
          pros: [
            "Real formatted Excel — not just CSV renamed",
            "Styled headers with auto-width columns",
            "Custom column selection and reordering",
            "6 data sources including inventory",
            "Templates for repeat exports",
          ],
          cons: ["Excel requires Starter plan ($14/mo)"],
          pricing: "Free (CSV only), Starter $14/mo, Growth $29/mo",
        },
        {
          name: "Matrixify",
          description:
            "Supports Excel export with large datasets. Good for migration but no column customization.",
          pros: ["Handles large files", "XLSX support"],
          cons: ["No custom columns", "Complex interface"],
          pricing: "From $20/mo",
        },
        {
          name: "Report Pundit",
          description:
            "Reporting tool that can export to Excel. Includes charts and analytics.",
          pros: ["Charts included", "Multiple report types"],
          cons: ["Overkill for simple exports", "Complex setup"],
          pricing: "Free (limited), from $9/mo",
        },
      ]}
    />
  );
}
