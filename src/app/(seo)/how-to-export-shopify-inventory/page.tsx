import type { Metadata } from "next";
import { GuidePage } from "../components/guide-page";

export const metadata: Metadata = {
  title: "How to Export Shopify Inventory by Location (2026 Guide)",
  description:
    "Export Shopify inventory levels per warehouse location. Available, committed, on-hand, and incoming quantities in CSV or Excel.",
  alternates: { canonical: "https://exportable.app/how-to-export-shopify-inventory" },
};

export default function ExportInventoryGuidePage() {
  return (
    <GuidePage
      title="How to Export Shopify Inventory by Location"
      intro="Shopify doesn't let you export inventory levels per location natively. Here's how to get a complete breakdown of available, committed, on-hand, and incoming stock for every location."
      steps={[
        {
          title: "Select 'Inventory by Location' as data source",
          description:
            "Open Exportable's Export page and select 'Inventory by Location' from the dropdown. This data source creates one row per product per location, giving you a complete multi-location inventory view.",
        },
        {
          title: "Choose inventory columns",
          description:
            "Select from fields like: SKU, product title, variant title, location name, available quantity, committed quantity, on-hand quantity, incoming quantity, and tracked status.",
        },
        {
          title: "Customize and export",
          description:
            "Reorder columns, rename headers (e.g., 'available' → 'Available Stock'), and choose CSV or Excel. Click Export to download your per-location inventory report.",
        },
        {
          title: "Schedule recurring inventory reports (optional)",
          description:
            "On the Growth plan, schedule this export to run daily or weekly and have it emailed to your warehouse team automatically. Save it as a template first, then create a schedule.",
        },
      ]}
      conclusion="Multi-location inventory export is one of the most requested features that Shopify doesn't offer natively. Exportable makes it easy to get per-location stock levels for every product in your catalog."
    />
  );
}
