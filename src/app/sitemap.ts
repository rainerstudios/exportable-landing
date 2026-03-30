import type { MetadataRoute } from "next";

const BASE_URL = "https://exportable.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: `${BASE_URL}`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/pricing`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/screencast`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/changelog`, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/resources`, changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const competitorPages = [
    "matrixify-alternative",
    "simple-export-alternative",
    "ez-exporter-alternative",
    "report-pundit-alternative",
  ];

  const bestOfPages = [
    "best-shopify-export-apps",
    "best-shopify-csv-export",
    "best-shopify-excel-export",
  ];

  const guidePages = [
    "how-to-export-shopify-orders",
    "how-to-export-shopify-products",
    "how-to-export-shopify-inventory",
    "how-to-export-shopify-customers",
    "export-shopify-data-for-accounting",
    "export-shopify-data-for-warehouse",
  ];

  const featurePages = [
    "shopify-order-export-app",
    "shopify-product-export-app",
    "shopify-inventory-export-app",
    "shopify-abandoned-checkout-export",
    "shopify-draft-order-export",
    "shopify-scheduled-export",
    "shopify-metafield-export",
  ];

  const seoPages = [
    ...competitorPages,
    ...bestOfPages,
    ...guidePages,
    ...featurePages,
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...seoPages,
  ];
}
