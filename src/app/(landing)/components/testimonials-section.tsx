import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "E-commerce Manager",
    content:
      "Finally an export app that lets me choose exactly which columns I need. The built-in Shopify export was never enough for our accounting team.",
    initials: "SM",
  },
  {
    name: "David K.",
    role: "Store Owner",
    content:
      "The scheduled exports save me hours every week. I get my inventory report every Monday morning without lifting a finger.",
    initials: "DK",
  },
  {
    name: "Rachel T.",
    role: "Operations Lead",
    content:
      "Being able to export inventory by location is a game-changer for our multi-warehouse setup. No other app could do this properly.",
    initials: "RT",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-zinc-800/50 py-20 sm:py-28 bg-zinc-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Loved by Shopify merchants
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Hear from store owners who switched from Shopify&apos;s built-in export.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-zinc-800 text-xs text-zinc-400">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
