import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { ArrowRight, Download } from "lucide-react";

const SHOPIFY_URL = "https://apps.shopify.com/exportable";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-400">
          <Download className="h-3.5 w-3.5 text-blue-400" />
          Shopify App
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-white">Export anything from Shopify — </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            exactly the columns you need
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          Orders, products, customers, inventory, draft orders, and abandoned
          checkouts. Choose columns, set formats, save templates, schedule
          automatic exports. CSV or formatted Excel.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href={SHOPIFY_URL} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base")}>
              Install Free on Shopify
              <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 border-zinc-700 text-zinc-300 hover:text-white px-8 py-6 text-base")}>
              See Features
          </a>
        </div>

        <p className="mt-4 text-sm text-zinc-500">
          Free plan available. No credit card required.
        </p>
      </div>
    </section>
  );
}
