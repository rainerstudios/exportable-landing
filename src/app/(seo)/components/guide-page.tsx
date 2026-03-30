import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const SHOPIFY_URL = "https://apps.shopify.com/exportable";

interface GuideStep {
  title: string;
  description: string;
}

interface GuidePageProps {
  title: string;
  intro: string;
  steps: GuideStep[];
  conclusion: string;
}

export function GuidePage({ title, intro, steps, conclusion }: GuidePageProps) {
  return (
    <article>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      <p className="mt-4 text-lg text-zinc-400">{intro}</p>

      <div className="mt-12 space-y-8">
        {steps.map((step, i) => (
          <div key={i} className="relative pl-12">
            <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400">
              {i + 1}
            </div>
            <h2 className="text-lg font-semibold text-white">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
        <p className="text-zinc-300">{conclusion}</p>
        <a
          href={SHOPIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "mt-6 gap-2 bg-blue-600 hover:bg-blue-700 text-white")}
        >
          Try Exportable Free
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
