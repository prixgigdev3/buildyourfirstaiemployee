import { cn } from "@/lib/cn";

export function Shell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
  tone = "paper",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "surface" | "wash";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[calc(var(--header-h)+1rem)] py-20 sm:py-24 lg:py-32",
        tone === "paper" && "bg-paper",
        tone === "surface" && "bg-surface",
        tone === "wash" && "bg-accent-soft/40",
        className,
      )}
    >
      <Shell>{children}</Shell>
    </section>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.14em] text-mute">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
      {children}
    </h2>
  );
}

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("max-w-2xl text-pretty text-base leading-7 text-ink/80 sm:text-[1.0625rem] sm:leading-8", className)}>
      {children}
    </p>
  );
}
