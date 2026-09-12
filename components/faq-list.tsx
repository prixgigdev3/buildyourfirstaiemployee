import { faqs } from "@/lib/copy";
import { cn } from "@/lib/cn";

export function FaqList() {
  return (
    <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
      {faqs.map((item) => (
        <details key={item.q} className="group">
          <summary
            className={cn(
              "flex min-h-12 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-medium text-pretty text-ink",
              "transition-colors duration-150 hover:text-ink/80",
            )}
          >
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-mute transition-transform duration-200 ease-out group-open:rotate-45"
            >
              <svg viewBox="0 0 16 16" className="size-3.5 fill-current">
                <path d="M7.25 2.5h1.5v11h-1.5z" />
                <path d="M2.5 7.25h11v1.5h-11z" />
              </svg>
            </span>
          </summary>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-out group-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="max-w-2xl pb-5 text-pretty text-base leading-7 text-ink/75">
                {item.a}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
