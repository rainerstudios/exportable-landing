import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const SHOPIFY_URL = "https://apps.shopify.com/exportable";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started with basic exports",
    features: [
      "5 exports per month",
      "Orders, Products, Customers",
      "CSV format",
      "1 saved template",
      "Column selection & renaming",
    ],
    cta: "Install Free",
    variant: "outline" as const,
  },
  {
    name: "Starter",
    price: "$14",
    period: "/month",
    description: "For growing stores that need more",
    features: [
      "50 exports per month",
      "All 6 data sources",
      "CSV and Excel (.xlsx)",
      "Unlimited templates",
      "Column mapping & filters",
      "Drag-and-drop reordering",
    ],
    cta: "Start Free Trial",
    variant: "outline" as const,
  },
  {
    name: "Growth",
    price: "$29",
    period: "/month",
    description: "Unlimited exports for power users",
    badge: "Most Popular",
    trial: "7-day free trial",
    features: [
      "Unlimited exports",
      "All Starter features",
      "Metafield export",
      "Email delivery",
      "Unlimited scheduled exports",
      "Date & currency formatting",
      "Priority support",
    ],
    cta: "Start Free Trial",
    variant: "default" as const,
    featured: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Start free. Upgrade when you need more exports, Excel format, or
            scheduled delivery.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 ${
                plan.featured
                  ? "border-blue-500/50 bg-blue-950/20 shadow-lg shadow-blue-500/5"
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white hover:bg-blue-600">
                  {plan.badge}
                </Badge>
              )}

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>
              </div>

              <div className="mt-6">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-zinc-500">{plan.period}</span>
                {plan.trial && (
                  <p className="mt-1 text-sm text-blue-400">{plan.trial}</p>
                )}
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={SHOPIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: plan.variant }), `mt-8 w-full ${
                  plan.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-zinc-700 text-zinc-300 hover:text-white"
                }`)}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
