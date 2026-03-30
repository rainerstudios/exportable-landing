import type { Metadata } from "next";
import { GuidePage } from "../components/guide-page";

export const metadata: Metadata = {
  title: "Export Shopify Data for Warehouse & Fulfillment",
  description:
    "Export Shopify orders and inventory for your warehouse team. Pick sheets, packing slips, and inventory reconciliation reports.",
  alternates: { canonical: "https://exportable.app/export-shopify-data-for-warehouse" },
};

export default function WarehouseExportPage() {
  return (
    <GuidePage
      title="Export Shopify Data for Warehouse & Fulfillment"
      intro="Your warehouse team needs different data than your marketing team. Export pick sheets with line items and SKUs, inventory levels by location, and fulfillment-focused order reports."
      steps={[
        {
          title: "Create a pick sheet export template",
          description:
            "Select orders with these columns: order number, line item title, SKU, quantity, variant title. Filter to 'unfulfilled' orders only. Save as a 'Pick Sheet' template.",
        },
        {
          title: "Create a per-location inventory report",
          description:
            "Use the Inventory by Location data source. Include SKU, product title, location name, available quantity, and on-hand quantity. Your warehouse team can reconcile stock against physical counts.",
        },
        {
          title: "Schedule daily pick sheets",
          description:
            "On the Growth plan, schedule your pick sheet template to run every morning and email the file to your warehouse manager. Orders are always ready to pick when the team arrives.",
        },
        {
          title: "Export to Excel for easy printing",
          description:
            "Excel exports include styled headers and auto-width columns — perfect for printing pick sheets and inventory reports. No formatting needed after download.",
        },
      ]}
      conclusion="Exportable gives your warehouse team exactly the data they need — pick sheets, inventory reports, and fulfillment data — delivered automatically in print-ready Excel format."
    />
  );
}
