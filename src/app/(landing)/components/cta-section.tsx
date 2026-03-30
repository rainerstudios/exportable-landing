import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const SHOPIFY_URL = "https://apps.shopify.com/exportable";

export function CTASection() {
  return (
    <section className="border-t border-zinc-800/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative mx-auto max-w-2xl">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Stop fighting with Shopify&apos;s export
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Install Exportable in seconds. Choose your columns, pick your
            format, and export exactly the data you need.
          </p>
          <a
            href={SHOPIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "mt-8 gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base")}
          >
            Install Free on Shopify
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-sm text-zinc-500">
            Free plan included. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
