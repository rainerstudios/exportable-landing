const stats = [
  { value: "6", label: "Data Sources", description: "Orders, products, customers, inventory, drafts, checkouts" },
  { value: "100+", label: "Export Fields", description: "Including metafields, SEO data, and multi-image" },
  { value: "2", label: "Output Formats", description: "CSV and formatted Excel (.xlsx)" },
  { value: "0s", label: "Setup Time", description: "Install and export in under a minute" },
];

export function StatsSection() {
  return (
    <section className="border-y border-zinc-800/50 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-blue-400">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-zinc-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
