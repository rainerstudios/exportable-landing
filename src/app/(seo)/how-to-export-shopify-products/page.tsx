import type { Metadata } from "next";
import { GuidePage } from "../components/guide-page";

export const metadata: Metadata = {
  title: "How to Export Shopify Products to CSV & Excel (2026 Guide)",
  description:
    "Export Shopify products with SEO data, multiple images, variant weights, and metafields. Step-by-step guide.",
  alternates: { canonical: "https://exportable.app/how-to-export-shopify-products" },
};

export default function ExportProductsGuidePage() {
  return (
    <GuidePage
      title="How to Export Shopify Products with SEO Data & Images"
      intro="Shopify's built-in product export misses SEO titles, descriptions, variant weights, and only exports one image per product. Here's how to get everything."
      steps={[
        {
          title: "Open Exportable and select 'Products'",
          description:
            "Go to the Export page and choose 'Products' as your data source. You'll see fields Shopify doesn't include in its native export: product description (HTML), SEO title, SEO description, variant weight, and up to 10 image URLs.",
        },
        {
          title: "Select the fields you need",
          description:
            "Check the columns you want. Popular choices include: product title, description, SEO title, SEO description, vendor, product type, tags, variant title, variant SKU, variant price, variant weight, and multiple image URLs.",
        },
        {
          title: "Filter by product status (optional)",
          description:
            "Use the product status filter to export only Active, Draft, or Archived products. This is useful for auditing draft products or checking archived inventory.",
        },
        {
          title: "Include metafields (Growth plan)",
          description:
            "On the Growth plan, you can include product and variant metafields in your export. Perfect for custom fields like 'Material', 'Color Family', or any metafield you've set up.",
        },
        {
          title: "Export and download",
          description:
            "Choose CSV or Excel format and click Export. Your file will include only the columns you selected, in the order you arranged them, with the headers you specified.",
        },
      ]}
      conclusion="Stop wasting time deleting columns from Shopify's fixed export. With Exportable, you get exactly the product data you need — including SEO fields, multiple images, weights, and metafields that Shopify's native export doesn't include."
    />
  );
}
