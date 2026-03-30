import type { Metadata } from "next";
import { GuidePage } from "../components/guide-page";

export const metadata: Metadata = {
  title: "How to Export Shopify Customers to CSV & Excel (2026 Guide)",
  description:
    "Export Shopify customer data with custom columns, order history, and tags. Step-by-step guide to customer data export.",
  alternates: { canonical: "https://exportable.app/how-to-export-shopify-customers" },
};

export default function ExportCustomersGuidePage() {
  return (
    <GuidePage
      title="How to Export Shopify Customers to CSV & Excel"
      intro="Need to export your customer list with specific fields for email marketing, CRM import, or analytics? Here's how to get exactly the customer data you need."
      steps={[
        {
          title: "Select 'Customers' as your data source",
          description:
            "Open Exportable and choose 'Customers' from the data source dropdown. Available fields include: name, email, phone, default address, order count, total spent, tags, marketing consent, and account creation date.",
        },
        {
          title: "Pick the columns your CRM or email tool needs",
          description:
            "Different tools need different fields. For Mailchimp, you might want: email, first name, last name, tags. For a CRM import, add: phone, address, order count, total spent.",
        },
        {
          title: "Rename headers to match your import format",
          description:
            "Many tools require specific column names. Rename 'email' to 'Email Address' or 'first_name' to 'First Name' directly in Exportable — no spreadsheet editing needed.",
        },
        {
          title: "Export and import into your tool",
          description:
            "Download as CSV (compatible with everything) or Excel. Your file will have only the columns you need, in the right order, with the right headers.",
        },
      ]}
      conclusion="Stop exporting all customer fields and then manually deleting columns in Excel. With Exportable, your customer export is ready to import directly into your CRM, email tool, or analytics platform."
    />
  );
}
