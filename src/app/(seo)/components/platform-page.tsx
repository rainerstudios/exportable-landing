import { Check, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const SHOPIFY_URL = "https://apps.shopify.com/exportable";

interface PlatformPageProps {
  platform: string;
  title: string;
  intro: string;
  painPoints: string[];
  solutions: string[];
  features: string[];
}

export function PlatformPage({
  platform,
  title,
  intro,
  painPoints,
  solutions,
  features,
}: PlatformPageProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      <p className="mt-4 text-lg text-zinc-400">{intro}</p>

      {/* Pain points */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-white">
          The problem with {platform}&apos;s built-in export
        </h2>
        <ul className="mt-4 space-y-3">
          {painPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm text-zinc-400"
            >
              <span className="mt-0.5 text-zinc-600">-</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-white">
          How Exportable solves this
        </h2>
        <ul className="mt-4 space-y-3">
          {solutions.map((point) => (
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

      {/* Feature list */}
      <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h2 className="text-lg font-semibold text-white">
          Key features for {platform} merchants
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-2 text-sm text-zinc-300"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <a
          href={SHOPIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "gap-2 bg-blue-600 hover:bg-blue-700 text-white")}
        >
          Install Free on Shopify
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
