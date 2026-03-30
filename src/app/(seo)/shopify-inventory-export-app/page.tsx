import type { Metadata } from "next";
import { PlatformPage } from "../components/platform-page";

export const metadata: Metadata = {
  title: "Best Shopify Inventory Export App — Per-Location Stock Levels",
  description:
    "Export Shopify inventory by location with available, committed, on-hand, and incoming quantities. Multi-warehouse inventory reports.",
  alternates: { canonical: "https://exportable.app/shopify-inventory-export-app" },
};

export default function ShopifyInventoryExportPage() {
  return (
    <PlatformPage
      platform="Shopify"
      title="Export Shopify Inventory by Location"
      intro="Shopify doesn't offer per-location inventory export natively. Exportable breaks down stock levels by warehouse, store, or any location — showing available, committed, on-hand, and incoming quantities."
      painPoints={[
        "No native per-location inventory export in Shopify",
        "Can't see committed, on-hand, or incoming quantities in exports",
        "Manual inventory counting required for multi-location reconciliation",
        "No way to schedule recurring inventory reports",
        "Third-party integrations need structured inventory data",
      ]}
      solutions={[
        "One row per product per location — complete multi-location view",
        "Available, committed, on-hand, and incoming quantities",
        "Filter by tracked status",
        "Schedule daily or weekly inventory reports",
        "Email reports directly to your warehouse team",
        "Export to Excel for inventory reconciliation",
      ]}
      features={[
        "Per-location stock levels",
        "Available quantities",
        "Committed quantities",
        "On-hand quantities",
        "Incoming quantities",
        "SKU & product/variant title",
        "Tracked status",
        "Custom column selection",
        "Scheduled exports",
        "Excel formatting",
      ]}
    />
  );
}
