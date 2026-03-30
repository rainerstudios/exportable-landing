import type { Metadata } from "next";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Screencast — See Exportable in Action",
  description:
    "Watch a quick demo of Exportable exporting Shopify data to CSV and Excel with custom columns, templates, and filters.",
  alternates: { canonical: "https://exportable.app/screencast" },
};

const SHOPIFY_URL = "https://apps.shopify.com/exportable";

export default function ScreencastPage() {
  return (
    <>
      <Navbar />
      <main className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              See Exportable in Action
            </h1>
            <p className="mt-4 text-zinc-400">
              Watch how easy it is to export any Shopify data with custom columns
              and formatting.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="mt-12 aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
            <div className="flex h-full items-center justify-center">
              <p className="text-zinc-500">Demo video coming soon</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-white">
              Ready to try it yourself?
            </h2>
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
      </main>
      <Footer />
    </>
  );
}
