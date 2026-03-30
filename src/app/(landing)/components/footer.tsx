import Link from "next/link";
import { Download } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Screencast", href: "/screencast" },
    { label: "Changelog", href: "/changelog" },
  ],
  Compare: [
    { label: "vs Matrixify", href: "/matrixify-alternative" },
    { label: "vs Simple Export", href: "/simple-export-alternative" },
    { label: "vs EZ Exporter", href: "/ez-exporter-alternative" },
    { label: "Best Export Apps", href: "/best-shopify-export-apps" },
  ],
  Resources: [
    { label: "Export Orders Guide", href: "/how-to-export-shopify-orders" },
    { label: "Export Products Guide", href: "/how-to-export-shopify-products" },
    { label: "Export Inventory Guide", href: "/how-to-export-shopify-inventory" },
    { label: "All Guides", href: "/resources" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Download className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">
                Exportable
              </span>
            </Link>
            <p className="mt-3 text-sm text-zinc-500">
              Export any Shopify data to CSV or Excel with custom columns,
              templates, and scheduled runs.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white">{category}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-zinc-800/50 pt-8 text-center text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Exportable. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
