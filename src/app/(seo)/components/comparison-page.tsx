import { Check, X, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const SHOPIFY_URL = "https://apps.shopify.com/exportable";

interface ComparisonFeature {
  name: string;
  exportable: boolean | string;
  competitor: boolean | string;
}

interface ComparisonPageProps {
  competitor: string;
  headline: string;
  description: string;
  features: ComparisonFeature[];
  whySwitch: string[];
  competitorWeaknesses: string[];
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string")
    return <span className="text-sm text-zinc-300">{value}</span>;
  return value ? (
    <Check className="h-4 w-4 text-emerald-400" />
  ) : (
    <X className="h-4 w-4 text-zinc-600" />
  );
}

export function ComparisonPage({
  competitor,
  headline,
  description,
  features,
  whySwitch,
  competitorWeaknesses,
}: ComparisonPageProps) {
  return (
    <div>
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {headline}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          {description}
        </p>
      </div>

      {/* Comparison table */}
      <div className="mt-12 rounded-xl border border-zinc-800 overflow-hidden">
        <div className="grid grid-cols-3 gap-4 bg-zinc-900 px-6 py-4 border-b border-zinc-800">
          <div className="text-sm font-semibold text-zinc-400">Feature</div>
          <div className="text-center text-sm font-semibold text-blue-400">
            Exportable
          </div>
          <div className="text-center text-sm font-semibold text-zinc-400">
            {competitor}
          </div>
        </div>
        {features.map((feature, i) => (
          <div
            key={feature.name}
            className={`grid grid-cols-3 gap-4 px-6 py-3 ${
              i % 2 === 0 ? "bg-zinc-900/30" : "bg-zinc-900/10"
            }`}
          >
            <div className="text-sm text-zinc-300">{feature.name}</div>
            <div className="flex justify-center">
              <CellValue value={feature.exportable} />
            </div>
            <div className="flex justify-center">
              <CellValue value={feature.competitor} />
            </div>
          </div>
        ))}
      </div>

      {/* Why switch */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Why switch to Exportable?
          </h2>
          <ul className="mt-4 space-y-3">
            {whySwitch.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">
            {competitor} limitations
          </h2>
          <ul className="mt-4 space-y-3">
            {competitorWeaknesses.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm text-zinc-400"
              >
                <X className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center">
        <h2 className="text-2xl font-bold text-white">
          Ready to switch from {competitor}?
        </h2>
        <p className="mt-2 text-zinc-400">
          Install Exportable free and see the difference.
        </p>
        <a
          href={SHOPIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "mt-6 gap-2 bg-blue-600 hover:bg-blue-700 text-white")}
        >
          Install Free on Shopify
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
