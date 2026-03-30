import type { Metadata } from "next";
import { PlatformPage } from "../components/platform-page";

export const metadata: Metadata = {
  title: "Best Shopify Product Export App — SEO, Images, Weights",
  description:
    "Export Shopify products with SEO titles, descriptions, multiple images, variant weights, and metafields. Custom column selection.",
  alternates: { canonical: "https://exportable.app/shopify-product-export-app" },
};

export default function ShopifyProductExportPage() {
  return (
    <PlatformPage
      platform="Shopify"
      title="The Best Shopify Product Export App"
      intro="Shopify's native product export misses SEO data, multiple images, and variant weights. Exportable includes all the product fields your team actually needs."
      painPoints={[
        "No SEO title or SEO description in the export",
        "Only 1 image URL per product — no multi-image export",
        "No variant weight or weight unit fields",
        "No product description (HTML) field",
        "Fixed columns — can't exclude fields you don't need",
        "No metafield export support",
      ]}
      solutions={[
        "Export SEO title, SEO description, and product description",
        "Export up to 10 image URLs per product",
        "Include variant weight and weight unit for shipping calculations",
        "Filter by product status: Active, Draft, or Archived",
        "Export metafields on the Growth plan",
        "Custom column selection with drag-and-drop reordering",
      ]}
      features={[
        "Product description (HTML)",
        "SEO title & description",
        "Up to 10 image URLs",
        "Variant weight & unit",
        "Product & variant IDs",
        "Status filter",
        "Metafield export",
        "Tags & vendor",
        "Custom templates",
        "Excel formatting",
      ]}
    />
  );
}
