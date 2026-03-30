import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Exportable terms of service for Shopify merchants.",
  alternates: { canonical: "https://exportable.app/terms" },
};

export default function TermsPage() {
  return (
    <article className="prose prose-invert prose-zinc max-w-none">
      <h1>Terms of Service</h1>
      <p className="text-zinc-400">Last updated: March 30, 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By installing and using Exportable (&ldquo;the App&rdquo;), you agree to these
        Terms of Service. If you do not agree, please uninstall the App.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Exportable is a Shopify application that allows merchants to export store
        data (orders, products, customers, inventory, draft orders, and abandoned
        checkouts) to CSV and Excel formats with custom column selection,
        templates, and scheduling.
      </p>

      <h2>3. Account & Installation</h2>
      <p>
        The App is installed through the Shopify App Store. You must have an
        active Shopify store to use the App. You are responsible for maintaining
        the security of your Shopify account.
      </p>

      <h2>4. Pricing & Billing</h2>
      <p>
        The App offers Free, Starter ($14/month), and Growth ($29/month) plans.
        Paid plans are billed through Shopify&apos;s billing system. You can cancel
        or change your plan at any time through the App&apos;s settings page.
      </p>

      <h2>5. Usage Limits</h2>
      <p>
        Each plan has specific limits on exports per month, data sources, file
        formats, templates, and features. These limits are enforced
        automatically. Exceeding your plan&apos;s limits requires upgrading to a
        higher plan.
      </p>

      <h2>6. Data Ownership</h2>
      <p>
        You retain full ownership of your store data. Exportable only accesses
        your data to provide the export functionality you request. We do not
        claim any rights to your data.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any illegal purpose</li>
        <li>Attempt to circumvent plan limits or billing</li>
        <li>Reverse engineer or copy the App</li>
        <li>Use the App to harm Shopify&apos;s infrastructure</li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        The App is provided &ldquo;as is&rdquo; without warranty. We are not liable for any
        data loss, business interruption, or damages arising from your use of
        the App. Our total liability is limited to the amount you paid us in the
        12 months preceding the claim.
      </p>

      <h2>9. Termination</h2>
      <p>
        You can terminate your use of the App at any time by uninstalling it
        from your Shopify store. We may terminate or suspend access if you
        violate these terms.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We may update these terms from time to time. Continued use of the App
        after changes constitutes acceptance of the new terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        For questions about these terms, email{" "}
        <a href="mailto:support@exportable.app" className="text-blue-400">
          support@exportable.app
        </a>
        .
      </p>
    </article>
  );
}
