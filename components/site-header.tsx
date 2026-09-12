import { CHECKOUT_URL, cta, hero } from "@/lib/copy";
import { cn } from "@/lib/cn";

const nav = [
  { href: "#week", label: "The week" },
  { href: "#employees", label: "Employees" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  return (
    <header className="material sticky top-0 z-40 border-b border-black/[0.06] pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex min-h-14 w-full max-w-7xl items-center justify-between gap-3 px-5 sm:min-h-16 sm:gap-6 sm:px-8">
        <a
          href="#top"
          className="inline-flex min-h-11 max-w-[58%] shrink items-center truncate text-[0.8125rem] font-medium tracking-tight text-ink sm:max-w-none sm:text-sm"
        >
          {hero.brand}
        </a>
        <nav
          aria-label="Page"
          className="hidden items-center gap-8 text-[0.8125rem] text-mute lg:flex"
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
        <div className="flex items-center gap-1 sm:gap-2">
          <details className="relative lg:hidden">
            <summary
              className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full text-ink transition-colors duration-150 hover:bg-black/[0.04]"
              aria-label="Open menu"
            >
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden="true">
                <path d="M2 4.25h12v1.5H2zm0 3h12v1.5H2zm0 3h12v1.5H2z" />
              </svg>
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-44 rounded-2xl border border-black/[0.06] bg-white/95 p-2 shadow-[0_16px_40px_-24px_rgba(20,19,18,0.5)] backdrop-blur-xl">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex min-h-11 items-center rounded-xl px-3 text-sm text-ink transition-colors duration-150 hover:bg-black/[0.04]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
          <a
            href={CHECKOUT_URL}
            className={cn(
              "inline-flex min-h-11 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-full bg-join px-5 text-sm font-medium text-on-join",
              "transition-[transform,background-color,opacity] duration-150 ease-out",
              "hover:bg-black active:scale-[0.96] active:opacity-90",
              "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink",
            )}
            aria-label={cta.label}
          >
            Join
          </a>
        </div>
      </div>
    </header>
  );
}
