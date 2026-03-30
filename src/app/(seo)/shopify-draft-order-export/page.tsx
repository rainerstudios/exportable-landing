import type { Metadata } from "next";
import { PlatformPage } from "../components/platform-page";

export const metadata: Metadata = {
  title: "Export Shopify Draft Orders to CSV & Excel",
  description:
    "Export draft orders from Shopify with line items, customer info, and linked completed orders. Filter by status and date.",
  alternates: { canonical: "https://exportable.app/shopify-draft-order-export" },
};

export default function ShopifyDraftOrderExportPage() {
  return (
    <PlatformPage
      platform="Shopify"
      title="Export Shopify Draft Orders"
      intro="Draft orders are invisible to Shopify's native export. Exportable lets you export all draft orders with line items, customer details, and links to completed orders."
      painPoints={[
        "No native draft order export in Shopify",
        "Can't bulk analyze draft order data",
        "No way to track which drafts converted to real orders",
        "Manual review required for outstanding quotes and invoices",
        "B2B wholesale workflows need draft order reports",
      ]}
      solutions={[
        "Export all draft orders with status, line items, and totals",
        "See which drafts have been converted to completed orders",
        "Include customer details and addresses",
        "Filter by status (Open, Completed, etc.) and date range",
        "Schedule weekly draft order reports for your sales team",
        "Export to Excel for B2B invoice tracking",
      ]}
      features={[
        "Draft name & status",
        "Line items & quantities",
        "Customer info",
        "Shipping & billing address",
        "Taxes & discounts",
        "Linked completed order",
        "Status filtering",
        "Date range filter",
        "CSV & Excel format",
        "Scheduled exports",
      ]}
    />
  );
}
