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
    <header className="material sticky top-0 z-40 border-b border-line/80 bg-paper/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl supports-[backdrop-filter]:bg-paper/70">
      <div className="mx-auto flex min-h-14 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:min-h-[4.5rem] sm:gap-6 sm:px-8">
        <a
          href="#top"
          className="inline-flex min-h-11 max-w-[55%] shrink items-center truncate text-[0.8125rem] font-medium text-ink sm:max-w-none sm:text-sm"
        >
          {hero.brand}
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
            "w-auto shrink-0 px-4 py-2.5 text-sm leading-none sm:px-5 sm:text-sm",
            "min-h-11 min-w-11",
          )}
          aria-label={cta.label}
        >
          <span className="sm:hidden">Join</span>
          <span className="hidden sm:inline">{cta.label}</span>
        </a>
      </div>
    </header>
  );
}
