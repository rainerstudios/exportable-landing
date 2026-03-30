import { ArrowRight, Check, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const SHOPIFY_URL = "https://apps.shopify.com/exportable";

interface Tool {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  pricing: string;
  featured?: boolean;
}

interface BestToolsPageProps {
  title: string;
  intro: string;
  tools: Tool[];
}

export function BestToolsPage({ title, intro, tools }: BestToolsPageProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      <p className="mt-4 text-lg text-zinc-400">{intro}</p>

      <div className="mt-12 space-y-8">
        {tools.map((tool, i) => (
          <div
            key={tool.name}
            className={`rounded-xl border p-6 ${
              tool.featured
                ? "border-blue-500/50 bg-blue-950/10"
                : "border-zinc-800 bg-zinc-900/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-sm font-bold text-zinc-400">
                {i + 1}
              </span>
              <h2 className="text-xl font-semibold text-white">{tool.name}</h2>
              {tool.featured && (
                <Badge className="bg-blue-600 text-white hover:bg-blue-600">
                  Our Pick
                </Badge>
              )}
            </div>
            <p className="mt-3 text-sm text-zinc-400">{tool.description}</p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <span className="text-xs font-semibold uppercase text-emerald-400">
                  Pros
                </span>
                <ul className="mt-2 space-y-1">
                  {tool.pros.map((pro) => (
                    <li
                      key={pro}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-zinc-500">
                  Cons
                </span>
                <ul className="mt-2 space-y-1">
                  {tool.cons.map((con) => (
                    <li
                      key={con}
                      className="flex items-start gap-2 text-sm text-zinc-400"
                    >
                      <span className="mt-0.5 text-zinc-600">-</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 text-sm text-zinc-500">
              Pricing: {tool.pricing}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center">
        <h2 className="text-2xl font-bold text-white">
          Try Exportable — the #1 pick
        </h2>
        <p className="mt-2 text-zinc-400">
          Install free and export your first data in under a minute.
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
