"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is Exportable different from Shopify's built-in CSV export?",
    a: "Shopify's native export gives you fixed columns for orders, products, and customers only. Exportable lets you choose exactly which fields to include, export 6 data sources (including inventory by location, draft orders, and abandoned checkouts), save reusable templates, schedule automatic exports, and export to formatted Excel — none of which Shopify offers natively.",
  },
  {
    q: "What data can I export?",
    a: "You can export Orders, Products, Customers, Inventory by Location, Draft Orders, and Abandoned Checkouts. Each source has dozens of fields available including billing/shipping addresses, SEO data, variant weights, multiple image URLs, metafields, and more.",
  },
  {
    q: "Can I schedule automatic exports?",
    a: "Yes! On the Growth plan, you can schedule daily, weekly, or monthly exports. They run automatically and the files are delivered to your email.",
  },
  {
    q: "What formats are supported?",
    a: "The Free plan supports CSV export. The Starter and Growth plans add Excel (.xlsx) export with styled headers, auto-width columns, and proper data formatting.",
  },
  {
    q: "Is there a free trial?",
    a: "The Free plan is always free with 5 exports per month. The Growth plan includes a 7-day free trial so you can test all features before committing.",
  },
  {
    q: "Can I export metafields?",
    a: "Yes, metafield export is available on the Growth plan. You can include any product or variant metafield in your export columns.",
  },
  {
    q: "How do templates work?",
    a: "Templates save your column selection, order, custom header names, filters, and format settings. Next time you need the same export, just select the template and click export — no reconfiguration needed.",
  },
  {
    q: "Can I export inventory for specific locations?",
    a: "Yes! The Inventory by Location data source breaks down stock levels per warehouse/location, showing available, committed, on-hand, and incoming quantities for each SKU at each location.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Everything you need to know about Exportable.
          </p>
        </div>

        <Accordion className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              className="border-zinc-800"
            >
              <AccordionTrigger className="text-left text-white hover:text-blue-400 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
