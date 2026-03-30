import {
  Database,
  Columns3,
  FileSpreadsheet,
  Clock,
  GripVertical,
  Mail,
  Filter,
  BookTemplate,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "6 Data Sources",
    description:
      "Export orders, products, customers, inventory by location, draft orders, and abandoned checkouts — all from one app.",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Columns3,
    title: "Custom Columns",
    description:
      "Choose exactly which fields to include. Billing addresses, SEO data, variant weights, multiple images, metafields — you decide.",
    color: "bg-cyan-500/10 text-cyan-400",
  },
  {
    icon: GripVertical,
    title: "Drag & Drop Reorder",
    description:
      "Arrange columns in any order with drag-and-drop. Rename headers, set date and currency formats per column.",
    color: "bg-violet-500/10 text-violet-400",
  },
  {
    icon: FileSpreadsheet,
    title: "CSV & Excel Export",
    description:
      "Export to plain CSV or formatted Excel (.xlsx) with styled headers, auto-width columns, and proper data types.",
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: BookTemplate,
    title: "Reusable Templates",
    description:
      "Save your column selections, filters, and format as templates. One-click repeat exports — no reconfiguration needed.",
    color: "bg-orange-500/10 text-orange-400",
  },
  {
    icon: Filter,
    title: "Smart Filters",
    description:
      "Filter by date range, financial status, fulfillment status, product status, and more before exporting.",
    color: "bg-pink-500/10 text-pink-400",
  },
  {
    icon: Clock,
    title: "Scheduled Exports",
    description:
      "Set up daily, weekly, or monthly automatic exports. Get files delivered straight to your inbox on schedule.",
    color: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Mail,
    title: "Email Delivery",
    description:
      "Have export files automatically emailed to you or your team. Perfect for recurring reports and bookkeeping.",
    color: "bg-rose-500/10 text-rose-400",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Everything Shopify&apos;s built-in export{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              can&apos;t do
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Shopify&apos;s native CSV export gives you fixed columns for orders,
            products, and customers. Exportable gives you full control over
            what you export and how.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700"
            >
              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${feature.color}`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
