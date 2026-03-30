import type { Metadata } from "next";
import { PlatformPage } from "../components/platform-page";

export const metadata: Metadata = {
  title: "Shopify Scheduled Export — Automatic Reports by Email",
  description:
    "Schedule automatic Shopify data exports daily, weekly, or monthly. CSV or Excel files delivered to your inbox.",
  alternates: { canonical: "https://exportable.app/shopify-scheduled-export" },
};

export default function ScheduledExportPage() {
  return (
    <PlatformPage
      platform="Shopify"
      title="Shopify Scheduled Exports — Automatic Reports by Email"
      intro="Stop manually exporting the same data every week. Exportable lets you schedule automatic exports that run daily, weekly, or monthly and deliver files straight to your inbox."
      painPoints={[
        "Shopify has no built-in scheduled export feature",
        "Manual exports waste 10-30 minutes every week",
        "Team members forget to pull recurring reports",
        "No way to automatically email reports to stakeholders",
        "Third-party integrations need fresh data on a schedule",
      ]}
      solutions={[
        "Schedule any export to run daily, weekly, or monthly",
        "Save your column selection and filters as a template first",
        "Deliver CSV or Excel files directly via email",
        "Unlimited schedules on the Growth plan",
        "Combine with any data source — orders, inventory, etc.",
        "Files arrive formatted and ready to use",
      ]}
      features={[
        "Daily schedules",
        "Weekly schedules",
        "Monthly schedules",
        "Email delivery",
        "Template-based",
        "All 6 data sources",
        "CSV & Excel format",
        "Custom columns",
        "Filter support",
        "Unlimited on Growth",
      ]}
    />
  );
}
