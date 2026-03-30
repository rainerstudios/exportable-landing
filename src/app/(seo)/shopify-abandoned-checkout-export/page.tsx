import type { Metadata } from "next";
import { PlatformPage } from "../components/platform-page";

export const metadata: Metadata = {
  title: "Export Shopify Abandoned Checkouts to CSV & Excel",
  description:
    "Export abandoned checkout data from Shopify with customer info, cart contents, recovery URLs, and totals.",
  alternates: { canonical: "https://exportable.app/shopify-abandoned-checkout-export" },
};

export default function ShopifyAbandonedCheckoutExportPage() {
  return (
    <PlatformPage
      platform="Shopify"
      title="Export Shopify Abandoned Checkouts"
      intro="Shopify shows abandoned checkouts in the admin but doesn't let you export them natively. Exportable lets you export cart data, customer info, and recovery URLs for your re-marketing campaigns."
      painPoints={[
        "No native abandoned checkout export in Shopify",
        "Can't bulk export customer emails from abandoned carts",
        "No way to export cart contents for analysis",
        "Recovery URL not available in any standard export",
        "Manual copy-paste required for re-marketing data",
      ]}
      solutions={[
        "Export customer name, email, and phone from abandoned carts",
        "Include cart line items with SKU, quantity, and price",
        "Export recovery URLs for custom re-marketing campaigns",
        "Filter by recovery status (recovered vs not recovered)",
        "Include billing and shipping address information",
        "Schedule weekly abandoned checkout reports",
      ]}
      features={[
        "Customer email & phone",
        "Cart contents & totals",
        "Recovery URL",
        "Recovery status",
        "Billing address",
        "Shipping address",
        "Line items & SKUs",
        "Date filtering",
        "CSV & Excel format",
        "Scheduled exports",
      ]}
    />
  );
}
