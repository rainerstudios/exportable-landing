import type { Metadata } from "next";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { StatsSection } from "./components/stats-section";
import { FeaturesSection } from "./components/features-section";
import { DataSourcesSection } from "./components/data-sources-section";
import { PricingSection } from "./components/pricing-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { FAQSection } from "./components/faq-section";
import { CTASection } from "./components/cta-section";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "Exportable — Export Shopify Data to CSV & Excel",
  description:
    "Export orders, products, customers, inventory, draft orders & abandoned checkouts from Shopify to CSV or Excel. Custom columns, templates, and schedules.",
  openGraph: {
    title: "Exportable — Export Shopify Data to CSV & Excel",
    description:
      "Export orders, products, customers, inventory, draft orders & abandoned checkouts from Shopify to CSV or Excel.",
    url: "https://exportable.app",
  },
  alternates: { canonical: "https://exportable.app" },
};

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <DataSourcesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Exportable",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "AggregateOffer",
              offers: [
                { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
                { "@type": "Offer", name: "Starter", price: "14", priceCurrency: "USD", billingDuration: "P1M" },
                { "@type": "Offer", name: "Growth", price: "29", priceCurrency: "USD", billingDuration: "P1M" },
              ],
            },
            featureList: [
              "Export 6 data sources",
              "Custom column selection",
              "Drag-and-drop reordering",
              "CSV and Excel formats",
              "Reusable templates",
              "Scheduled exports",
              "Email delivery",
              "Metafield export",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Exportable",
            url: "https://exportable.app",
          }),
        }}
      />
    </>
  );
}
