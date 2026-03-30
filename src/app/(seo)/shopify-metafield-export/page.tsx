import type { Metadata } from "next";
import { PlatformPage } from "../components/platform-page";

export const metadata: Metadata = {
  title: "Export Shopify Metafields to CSV & Excel",
  description:
    "Export product and variant metafields from Shopify. Include custom fields like material, color, and dimensions in your data export.",
  alternates: { canonical: "https://exportable.app/shopify-metafield-export" },
};

export default function MetafieldExportPage() {
  return (
    <PlatformPage
      platform="Shopify"
      title="Export Shopify Metafields to CSV & Excel"
      intro="Shopify's native export doesn't include metafields. Exportable lets you export product and variant metafields alongside all your other product data."
      painPoints={[
        "Shopify's built-in export completely ignores metafields",
        "Custom fields like Material, Color Family, or Care Instructions aren't exportable",
        "No way to audit or bulk-review metafield data across products",
        "Third-party tools need metafield data for integrations",
        "Manual metafield review is tedious for large catalogs",
      ]}
      solutions={[
        "Include any product or variant metafield in your export",
        "Export metafields alongside standard product fields",
        "Combine with other columns — title, price, SKU, and your custom metafields",
        "Save metafield export configurations as reusable templates",
        "Available on the Growth plan",
      ]}
      features={[
        "Product metafields",
        "Variant metafields",
        "Combined with standard fields",
        "Custom column order",
        "Header renaming",
        "CSV & Excel format",
        "Template support",
        "Scheduled exports",
        "Growth plan feature",
        "All metafield types",
      ]}
    />
  );
}
