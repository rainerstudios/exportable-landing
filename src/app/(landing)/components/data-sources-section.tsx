import {
  ShoppingCart,
  Package,
  Users,
  Warehouse,
  FileText,
  ShoppingBag,
  Check,
} from "lucide-react";

const sources = [
  {
    icon: ShoppingCart,
    title: "Orders",
    fields: [
      "Order number, date, status",
      "Line items with SKU & quantity",
      "Billing & shipping addresses",
      "Financial & fulfillment status",
      "Discounts, taxes, totals",
    ],
  },
  {
    icon: Package,
    title: "Products",
    fields: [
      "Title, description, vendor",
      "SEO title & description",
      "Variant weight & dimensions",
      "Up to 10 image URLs",
      "Metafields & tags",
    ],
  },
  {
    icon: Users,
    title: "Customers",
    fields: [
      "Name, email, phone",
      "Default address",
      "Order count & total spent",
      "Tags & marketing consent",
      "Account creation date",
    ],
  },
  {
    icon: Warehouse,
    title: "Inventory by Location",
    fields: [
      "SKU & product/variant title",
      "Available, committed, on-hand",
      "Incoming quantities",
      "Per-location breakdown",
      "Tracked status",
    ],
  },
  {
    icon: FileText,
    title: "Draft Orders",
    fields: [
      "Draft name & status",
      "Line items & quantities",
      "Customer & address info",
      "Taxes & discounts",
      "Linked completed order",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Abandoned Checkouts",
    fields: [
      "Customer email & phone",
      "Cart contents & totals",
      "Recovery URL",
      "Billing & shipping address",
      "Recovery status",
    ],
  },
];

export function DataSourcesSection() {
  return (
    <section className="border-t border-zinc-800/50 py-20 sm:py-28 bg-zinc-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            6 data sources,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              100+ fields
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Export far more than Shopify allows natively. Inventory by location,
            draft orders, and abandoned checkouts — with every field available.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map((source) => (
            <div
              key={source.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <source.icon className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {source.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {source.fields.map((field) => (
                  <li
                    key={field}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />
                    {field}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
