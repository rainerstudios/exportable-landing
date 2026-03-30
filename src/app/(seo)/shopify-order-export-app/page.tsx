import type { Metadata } from "next";
import { PlatformPage } from "../components/platform-page";

export const metadata: Metadata = {
  title: "Best Shopify Order Export App — Custom Columns & Filters",
  description:
    "Export Shopify orders with custom columns, date filters, and formatted Excel. Choose billing, shipping, line items, and financial data.",
  alternates: { canonical: "https://exportable.app/shopify-order-export-app" },
};

export default function ShopifyOrderExportPage() {
  return (
    <PlatformPage
      platform="Shopify"
      title="The Best Shopify Order Export App"
      intro="Shopify's built-in order export dumps every column into a CSV. Exportable lets you pick exactly which order fields you need, filter by date or status, and export to CSV or formatted Excel."
      painPoints={[
        "Fixed columns — you can't choose which fields to include or exclude",
        "No column reordering — you're stuck with Shopify's field order",
        "No Excel format — only basic CSV with no formatting",
        "No billing address phone or province code fields",
        "No scheduled exports or email delivery",
        "No reusable templates for repeat exports",
      ]}
      solutions={[
        "Choose from 50+ order fields across Order, Customer, Billing, Shipping, and Line Items categories",
        "Drag and drop to reorder columns in the exact order you need",
        "Rename column headers to match your accounting software's import format",
        "Filter by date range, financial status, or fulfillment status before exporting",
        "Export to formatted Excel with styled headers and auto-width columns",
        "Save templates and schedule automatic exports with email delivery",
      ]}
      features={[
        "50+ order fields",
        "Billing & shipping addresses",
        "Line items with SKU & quantity",
        "Financial & fulfillment status",
        "Discounts, taxes, totals",
        "Custom date ranges",
        "Excel with styled headers",
        "Reusable templates",
        "Scheduled exports",
        "Email delivery",
      ]}
    />
  );
}
