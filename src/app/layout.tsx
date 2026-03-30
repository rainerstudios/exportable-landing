import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Exportable — Export Shopify Data to CSV & Excel",
    template: "%s | Exportable",
  },
  description:
    "Export orders, products, customers, inventory, draft orders & abandoned checkouts from Shopify to CSV or Excel. Custom columns, templates, and schedules.",
  metadataBase: new URL("https://exportable.app"),
  openGraph: {
    type: "website",
    siteName: "Exportable",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
