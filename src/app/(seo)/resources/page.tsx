import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GitCompare, Zap, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — Shopify Export Guides & Comparisons",
  description:
    "Guides, comparisons, and resources for exporting Shopify data. Learn how to export orders, products, inventory, and more.",
  alternates: { canonical: "https://exportable.app/resources" },
};

const sections = [
  {
    title: "How-To Guides",
    icon: BookOpen,
    links: [
      { label: "How to Export Shopify Orders", href: "/how-to-export-shopify-orders" },
      { label: "How to Export Shopify Products", href: "/how-to-export-shopify-products" },
      { label: "How to Export Shopify Inventory", href: "/how-to-export-shopify-inventory" },
      { label: "How to Export Shopify Customers", href: "/how-to-export-shopify-customers" },
      { label: "Export Data for Accounting", href: "/export-shopify-data-for-accounting" },
      { label: "Export Data for Warehouse", href: "/export-shopify-data-for-warehouse" },
    ],
  },
  {
    title: "Competitor Comparisons",
    icon: GitCompare,
    links: [
      { label: "Exportable vs Matrixify", href: "/matrixify-alternative" },
      { label: "Exportable vs Simple Export", href: "/simple-export-alternative" },
      { label: "Exportable vs EZ Exporter", href: "/ez-exporter-alternative" },
      { label: "Exportable vs Report Pundit", href: "/report-pundit-alternative" },
    ],
  },
  {
    title: "Best Of Lists",
    icon: Zap,
    links: [
      { label: "Best Shopify Export Apps", href: "/best-shopify-export-apps" },
      { label: "Best Shopify CSV Export", href: "/best-shopify-csv-export" },
      { label: "Best Shopify Excel Export", href: "/best-shopify-excel-export" },
    ],
  },
  {
    title: "Feature & Data Source Pages",
    icon: Target,
    links: [
      { label: "Shopify Order Export App", href: "/shopify-order-export-app" },
      { label: "Shopify Product Export App", href: "/shopify-product-export-app" },
      { label: "Shopify Inventory Export", href: "/shopify-inventory-export-app" },
      { label: "Shopify Abandoned Checkout Export", href: "/shopify-abandoned-checkout-export" },
      { label: "Shopify Draft Order Export", href: "/shopify-draft-order-export" },
      { label: "Shopify Scheduled Export", href: "/shopify-scheduled-export" },
      { label: "Shopify Metafield Export", href: "/shopify-metafield-export" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Resources</h1>
      <p className="mt-4 text-lg text-zinc-400">
        Guides, comparisons, and everything you need to know about exporting
        Shopify data.
      </p>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-2">
              <section.icon className="h-5 w-5 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700"
                >
                  <span className="text-sm text-zinc-300 group-hover:text-white">
                    {link.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-blue-400" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
