import type { Metadata } from "next";
import { BestToolsPage } from "../components/best-tools-page";

export const metadata: Metadata = {
  title: "7 Best Shopify Export Apps in 2026",
  description:
    "Compare the top Shopify export apps for orders, products, customers, and inventory. Detailed review with pricing and features.",
  alternates: { canonical: "https://exportable.app/best-shopify-export-apps" },
};

export default function BestExportAppsPage() {
  return (
    <BestToolsPage
      title="7 Best Shopify Export Apps in 2026"
      intro="Looking for the best way to export your Shopify data? We compared the top export apps on the Shopify App Store by features, pricing, and ease of use."
      tools={[
        {
          name: "Exportable",
          featured: true,
          description:
            "Purpose-built export app with 6 data sources, custom column selection, drag-and-drop reordering, reusable templates, and scheduled exports. Exports to CSV and formatted Excel.",
          pros: [
            "6 data sources including inventory, drafts, abandoned checkouts",
            "Visual column picker with drag-and-drop reorder",
            "Reusable templates for one-click repeat exports",
            "Scheduled exports with email delivery",
            "Formatted Excel with styled headers",
            "Free plan available",
          ],
          cons: [
            "No import functionality",
            "No chart/dashboard features",
          ],
          pricing: "Free, Starter $14/mo, Growth $29/mo",
        },
        {
          name: "Matrixify (formerly Excelify)",
          description:
            "Full-featured import/export tool designed for store migration and bulk data management. Handles large volumes but has a steeper learning curve.",
          pros: [
            "Import and export capability",
            "Handles very large data volumes",
            "Supports multiple file formats",
          ],
          cons: [
            "No custom column selection",
            "Complex interface — designed for migration",
            "No column reordering or templates",
            "Higher starting price",
          ],
          pricing: "Free (10 items), Basic $20/mo, Big $50/mo",
        },
        {
          name: "EZ Exporter",
          description:
            "Configurable export app with scheduling and delivery. Powerful but with a technical query-based interface.",
          pros: [
            "Wide range of data sources",
            "Scheduled exports with delivery",
            "FTP/SFTP delivery options",
          ],
          cons: [
            "No free plan",
            "Query-based column selection",
            "Steep learning curve",
            "Higher starting price ($29.95/mo)",
          ],
          pricing: "Starts at $29.95/mo",
        },
        {
          name: "Report Pundit",
          description:
            "Full reporting and analytics suite that includes export functionality. Best for merchants who also need dashboards and charts.",
          pros: [
            "Charts and dashboards included",
            "Many report templates",
            "Good customer support",
          ],
          cons: [
            "Overkill for simple exports",
            "Complex report builder",
            "No drag-and-drop column reorder",
          ],
          pricing: "Free (limited), Basic $9/mo, Pro $29/mo",
        },
        {
          name: "Simple Export Data",
          description:
            "Basic export app for orders, products, and customers. Good for simple needs but limited data sources.",
          pros: [
            "Easy to use",
            "Scheduled exports",
            "Email delivery",
          ],
          cons: [
            "Only 3 data sources",
            "Limited column customization",
            "No templates",
            "No inventory/draft/checkout export",
          ],
          pricing: "Free (limited), plans from $9.99/mo",
        },
        {
          name: "Data Export Reports",
          description:
            "Another reporting-focused app that includes export capabilities. Focused on financial reporting and analytics.",
          pros: [
            "Financial report templates",
            "Tax-focused exports",
            "Scheduled delivery",
          ],
          cons: [
            "Not focused on raw data export",
            "Limited column control",
            "No drag-and-drop",
          ],
          pricing: "Free (limited), plans from $9/mo",
        },
        {
          name: "Shopify Native Export",
          description:
            "Built into Shopify admin. Exports orders, products, and customers with fixed columns. No customization.",
          pros: [
            "Free — built into Shopify",
            "No installation needed",
            "Always available",
          ],
          cons: [
            "Fixed columns — no customization",
            "Only 3 data sources",
            "No Excel format",
            "No templates, scheduling, or email",
            "No inventory/draft/checkout export",
          ],
          pricing: "Free (included with Shopify)",
        },
      ]}
    />
  );
}
