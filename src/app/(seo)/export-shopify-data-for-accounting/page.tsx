import type { Metadata } from "next";
import { GuidePage } from "../components/guide-page";

export const metadata: Metadata = {
  title: "Export Shopify Data for Accounting & Bookkeeping",
  description:
    "Export Shopify orders with custom columns for QuickBooks, Xero, or your accountant. Scheduled reports delivered by email.",
  alternates: { canonical: "https://exportable.app/export-shopify-data-for-accounting" },
};

export default function AccountingExportPage() {
  return (
    <GuidePage
      title="Export Shopify Data for Accounting & Bookkeeping"
      intro="Your accountant doesn't need 50 columns of order data. Export exactly the financial fields they need — order number, date, subtotal, tax, discounts, and totals — in a clean spreadsheet they can import directly."
      steps={[
        {
          title: "Select the financial columns your accountant needs",
          description:
            "Choose: order number, order date, financial status, subtotal, total tax, total discounts, total price, and currency. Skip shipping addresses, line items, and fulfillment data your accountant doesn't need.",
        },
        {
          title: "Rename headers to match your accounting software",
          description:
            "QuickBooks, Xero, and FreshBooks all expect different column names. Rename 'order_number' to 'Invoice Number', 'total_price' to 'Amount', etc. directly in Exportable.",
        },
        {
          title: "Save as a template for monthly reports",
          description:
            "Save your column selection and header names as a template called 'Monthly Accounting'. Next month, just select the template and export — zero reconfiguration.",
        },
        {
          title: "Schedule automatic monthly delivery",
          description:
            "On the Growth plan, schedule this export to run on the 1st of every month and email the file directly to your accountant. Fully automated bookkeeping data.",
        },
      ]}
      conclusion="Stop manually reformatting Shopify exports for your accountant. With Exportable, you can set up the perfect accounting report once and automate it forever."
    />
  );
}
