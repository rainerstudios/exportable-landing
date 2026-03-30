import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Exportable release notes and version history.",
  alternates: { canonical: "https://exportable.app/changelog" },
};

const releases = [
  {
    version: "1.1.0",
    date: "March 30, 2026",
    title: "New Data Sources & Column Reordering",
    changes: [
      "Added Inventory by Location export — per-location stock levels",
      "Added Draft Orders export with line items and status filters",
      "Added Abandoned Checkouts export with recovery URLs",
      "Added drag-and-drop column reordering in export customization",
      "Added product description, SEO title, SEO description fields",
      "Added variant weight and weight unit fields",
      "Added multi-image export (up to 10 image URLs per product)",
      "Added billing address phone, province code, and country code to orders",
      "Added product status filter (Active, Draft, Archived)",
    ],
  },
  {
    version: "1.0.0",
    date: "March 9, 2026",
    title: "Initial Release",
    changes: [
      "Export Orders, Products, and Customers",
      "Custom column selection with rename and format options",
      "CSV and Excel (.xlsx) export formats",
      "Reusable export templates",
      "Scheduled automatic exports (daily, weekly, monthly)",
      "Email delivery for export files",
      "Export preview with first 10 rows",
      "Export history with re-download",
      "Smart filters (date range, status, fulfillment)",
      "Metafield export support",
      "Dashboard with setup guide and usage stats",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Changelog</h1>
      <p className="mt-4 text-zinc-400">
        New features, improvements, and fixes.
      </p>

      <div className="mt-12 space-y-12">
        {releases.map((release) => (
          <div key={release.version} className="relative pl-8 border-l border-zinc-800">
            <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-blue-500" />
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-blue-500/10 px-2 py-0.5 text-sm font-mono text-blue-400">
                v{release.version}
              </span>
              <span className="text-sm text-zinc-500">{release.date}</span>
            </div>
            <h2 className="mt-2 text-xl font-semibold text-white">
              {release.title}
            </h2>
            <ul className="mt-4 space-y-2">
              {release.changes.map((change) => (
                <li
                  key={change}
                  className="text-sm text-zinc-400 before:mr-2 before:text-blue-400 before:content-['•']"
                >
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
