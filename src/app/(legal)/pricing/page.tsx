import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Exportable pricing plans — Free, Starter ($14/mo), and Growth ($29/mo). Export Shopify data to CSV and Excel.",
  alternates: { canonical: "https://exportable.app/pricing" },
};

const SHOPIFY_URL = "https://apps.shopify.com/exportable";

const comparisonFeatures = [
  { name: "Exports per month", free: "5", starter: "50", growth: "Unlimited" },
  { name: "Orders", free: true, starter: true, growth: true },
  { name: "Products", free: true, starter: true, growth: true },
  { name: "Customers", free: true, starter: true, growth: true },
  { name: "Inventory by Location", free: false, starter: true, growth: true },
  { name: "Draft Orders", free: false, starter: true, growth: true },
  { name: "Abandoned Checkouts", free: false, starter: true, growth: true },
  { name: "CSV format", free: true, starter: true, growth: true },
  { name: "Excel (.xlsx) format", free: false, starter: true, growth: true },
  { name: "Saved templates", free: "1", starter: "Unlimited", growth: "Unlimited" },
  { name: "Column selection & rename", free: true, starter: true, growth: true },
  { name: "Column mapping & filters", free: false, starter: true, growth: true },
  { name: "Drag-and-drop reorder", free: false, starter: true, growth: true },
  { name: "Metafield export", free: false, starter: false, growth: true },
  { name: "Email delivery", free: false, starter: false, growth: true },
  { name: "Scheduled exports", free: false, starter: false, growth: "Unlimited" },
  { name: "Date & currency formatting", free: false, starter: false, growth: true },
  { name: "Priority support", free: false, starter: false, growth: true },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-zinc-300">{value}</span>;
  }
  return value ? (
    <Check className="h-4 w-4 text-blue-400" />
  ) : (
    <X className="h-4 w-4 text-zinc-600" />
  );
}

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Pricing</h1>
        <p className="mt-4 text-zinc-400">
          Start free. Upgrade when you need more.
        </p>
      </div>

      {/* Plan headers */}
      <div className="mt-12 grid grid-cols-4 gap-4">
        <div />
        {[
          { name: "Free", price: "$0", period: "/mo" },
          { name: "Starter", price: "$14", period: "/mo" },
          { name: "Growth", price: "$29", period: "/mo", badge: "Popular", trial: "7-day trial" },
        ].map((plan) => (
          <div key={plan.name} className="text-center">
            {plan.badge && (
              <Badge className="mb-2 bg-blue-600 text-white hover:bg-blue-600">
                {plan.badge}
              </Badge>
            )}
            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            <div className="mt-1">
              <span className="text-2xl font-bold text-white">{plan.price}</span>
              <span className="text-zinc-500">{plan.period}</span>
            </div>
            {plan.trial && (
              <p className="mt-1 text-xs text-blue-400">{plan.trial}</p>
            )}
            <a
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm" }), `mt-3 w-full ${
                plan.badge
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`)}
            >
              {plan.name === "Free" ? "Install Free" : "Start Trial"}
            </a>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="mt-12 rounded-xl border border-zinc-800 overflow-hidden">
        {comparisonFeatures.map((feature, i) => (
          <div
            key={feature.name}
            className={`grid grid-cols-4 gap-4 px-6 py-3 ${
              i % 2 === 0 ? "bg-zinc-900/30" : "bg-zinc-900/10"
            }`}
          >
            <div className="text-sm text-zinc-300">{feature.name}</div>
            <div className="flex justify-center">
              <CellValue value={feature.free} />
            </div>
            <div className="flex justify-center">
              <CellValue value={feature.starter} />
            </div>
            <div className="flex justify-center">
              <CellValue value={feature.growth} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
