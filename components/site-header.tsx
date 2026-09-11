import { CHECKOUT_URL, cta, hero } from "@/lib/copy";
import { cn } from "@/lib/cn";
import { ctaButtonClass } from "@/components/cta-block";

const nav = [
  { href: "#week", label: "The week" },
  { href: "#employees", label: "Employees" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  return (
    <header className="material sticky top-0 z-40 border-b border-line/80 bg-paper/75 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-14 w-full max-w-6xl items-center justify-between gap-3 px-6 sm:min-h-[4.5rem] sm:gap-6 sm:px-8">
        <a
          href="#top"
          className="inline-flex min-h-11 shrink-0 items-center text-[0.8125rem] font-medium text-ink sm:text-sm"
        >
          {hero.eyebrow}
        </a>
        <nav
          aria-label="Page"
          className="hidden items-center gap-7 text-sm text-mute lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={CHECKOUT_URL}
          className={cn(
            ctaButtonClass,
            "w-auto max-w-[11.5rem] px-3 py-2 text-[0.7rem] leading-tight sm:max-w-none sm:px-5 sm:text-sm",
          )}
        >
          {cta.label}
        </a>
      </div>
    </header>
  );
}
