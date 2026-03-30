import type { Metadata } from "next";
import { GuidePage } from "../components/guide-page";

export const metadata: Metadata = {
  title: "How to Export Shopify Orders to CSV & Excel (2026 Guide)",
  description:
    "Step-by-step guide to exporting Shopify orders with custom columns, filters, and formatting. Export to CSV or Excel.",
  alternates: { canonical: "https://exportable.app/how-to-export-shopify-orders" },
};

export default function ExportOrdersGuidePage() {
  return (
    <GuidePage
      title="How to Export Shopify Orders to CSV & Excel"
      intro="Shopify's built-in order export gives you a fixed CSV with all columns. Here's how to export orders with exactly the columns and format you need using Exportable."
      steps={[
        {
          title: "Install Exportable from the Shopify App Store",
          description:
            "Search for 'Exportable' in the Shopify App Store, or go directly to the listing. Click Install. The app works immediately with no configuration needed.",
        },
        {
          title: "Select 'Orders' as your data source",
          description:
            "Open Exportable and go to the Export page. Select 'Orders' from the data source dropdown. You'll see all available fields organized by category: Order Details, Customer, Billing, Shipping, Line Items, and more.",
        },
        {
          title: "Choose your columns",
          description:
            "Check the fields you want in your export. You can include order number, date, financial status, customer name, billing address (including phone and province code), line items with SKU and quantity, discounts, taxes, and totals. Uncheck anything you don't need.",
        },
        {
          title: "Customize column order and headers",
          description:
            "In the Column Customization section, drag and drop columns to reorder them. Rename any column header — for example, change 'financial_status' to 'Payment Status' for your accounting team.",
        },
        {
          title: "Apply filters (optional)",
          description:
            "Filter orders by date range, financial status (paid, pending, refunded), or fulfillment status (fulfilled, unfulfilled). Only matching orders will be included in the export.",
        },
        {
          title: "Choose format and export",
          description:
            "Select CSV or Excel (.xlsx). Excel files include styled headers with bold text and auto-width columns. Click 'Export Now' to download immediately, or save as a template for future use.",
        },
      ]}
      conclusion="With Exportable, you can export Shopify orders with exactly the columns your accounting team, warehouse, or analytics tool needs — in the right order, with the right headers, in the right format."
    />
  );
}
