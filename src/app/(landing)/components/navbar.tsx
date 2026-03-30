"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Download,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const SHOPIFY_URL = "https://apps.shopify.com/exportable";

const navLinks = [
  {
    label: "Features",
    href: "/#features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Compare",
    children: [
      { label: "vs Matrixify", href: "/matrixify-alternative" },
      { label: "vs Simple Export", href: "/simple-export-alternative" },
      { label: "vs EZ Exporter", href: "/ez-exporter-alternative" },
      { label: "vs Report Pundit", href: "/report-pundit-alternative" },
      { label: "Best Export Apps", href: "/best-shopify-export-apps" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Screencast", href: "/screencast" },
      { label: "Changelog", href: "/changelog" },
      { label: "Guides", href: "/how-to-export-shopify-orders" },
    ],
  },
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-[#0f1117]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <Download className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold text-white">Exportable</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white">
                  {link.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {openDropdown === link.label && (
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-zinc-800 bg-zinc-900 p-2 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={SHOPIFY_URL} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "sm" }))}>
            Install on Shopify
          </a>
        </div>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}>
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-zinc-900 border-zinc-800">
            <SheetTitle className="text-white">Menu</SheetTitle>
            <div className="mt-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="flex flex-col gap-1">
                    <span className="px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-md px-3 py-2 text-sm text-zinc-400 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm text-zinc-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <a href={SHOPIFY_URL} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "mt-4")}>
                Install on Shopify
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
