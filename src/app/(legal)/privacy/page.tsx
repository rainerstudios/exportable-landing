import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Exportable privacy policy — how we handle your data.",
  alternates: { canonical: "https://exportable.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="prose prose-invert prose-zinc max-w-none">
      <h1>Privacy Policy</h1>
      <p className="text-zinc-400">Last updated: March 30, 2026</p>

      <h2>Introduction</h2>
      <p>
        Exportable (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a Shopify application that helps
        merchants export their store data. This Privacy Policy explains how we
        collect, use, and protect your information.
      </p>

      <h2>Information We Collect</h2>
      <h3>Store Information</h3>
      <p>
        When you install Exportable, we access your Shopify store data through
        the Shopify API. This includes:
      </p>
      <ul>
        <li>Store name and domain</li>
        <li>Orders, products, customers, inventory, draft orders, and abandoned checkout data (only when you initiate an export)</li>
        <li>Your email address (for export delivery, if configured)</li>
      </ul>

      <h3>Usage Data</h3>
      <p>
        We track basic usage metrics to improve the app, including export counts,
        data sources used, and feature usage. We do not track or store the actual
        content of your exports.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide the export functionality you request</li>
        <li>To deliver scheduled exports via email</li>
        <li>To enforce plan limits and billing</li>
        <li>To improve the app and fix bugs</li>
      </ul>

      <h2>Data Storage & Security</h2>
      <p>
        Export files are generated on-demand and delivered directly to your
        browser or email. We do not permanently store your exported data files on
        our servers. Your store configuration (templates, schedules, preferences)
        is stored in our database with encryption at rest.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not sell, rent, or share your data with third parties. We only
        access your Shopify data through the official Shopify API with the
        permissions you grant during installation.
      </p>

      <h2>Data Retention</h2>
      <p>
        When you uninstall Exportable, we retain your store configuration for 30
        days in case you reinstall. After 30 days, all data is permanently
        deleted.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Request a copy of the data we store about your store</li>
        <li>Request deletion of your data at any time</li>
        <li>Uninstall the app to revoke all API access</li>
      </ul>

      <h2>GDPR Compliance</h2>
      <p>
        We comply with GDPR requirements. We process data as a data processor on
        behalf of Shopify merchants. We respond to customer data requests and
        shop data erasure webhooks from Shopify.
      </p>

      <h2>Contact Us</h2>
      <p>
        For privacy questions or data requests, email us at{" "}
        <a href="mailto:support@exportable.app" className="text-blue-400">
          support@exportable.app
        </a>
        .
      </p>
    </article>
  );
}
