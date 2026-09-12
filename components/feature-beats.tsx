"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Kicker, SectionTitle, Shell } from "@/components/section";
import { cn } from "@/lib/cn";

const beats = [
  {
    src: "/features/leftover-job.png",
    title: "Name one leftover job",
    body: "Not a company map. One thing that’s still stuck on you this week.",
    accent: "job",
  },
  {
    src: "/features/plug-in.png",
    title: "Plug in a ready-made employee",
    body: "Match the job. Don’t build from scratch. Keep the send button.",
    accent: "plug",
  },
  {
    src: "/features/draft-send.png",
    title: "Draft sits. You hit send.",
    body: "It drafts in your voice with your never-send rules. You approve.",
    accent: "send",
  },
] as const;

function RevealCard({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.dataset.visible = "true";
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={cn("feature-reveal", className)}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </article>
  );
}

export function FeatureBeats() {
  return (
    <section
      id="feature-beats"
      className="scroll-mt-[calc(var(--header-h)+1rem)] relative overflow-hidden border-y border-line/70 bg-white py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: "url(/features/soft-grid.png)",
          backgroundSize: "720px",
          backgroundRepeat: "repeat",
        }}
      />
      <Shell className="relative">
        <div className="max-w-3xl space-y-4">
          <Kicker>How the week works</Kicker>
          <SectionTitle>Every claim gets a visual</SectionTitle>
          <p className="max-w-2xl text-pretty text-base leading-7 text-ink/75 sm:text-[1.0625rem] sm:leading-8">
            Leftover job. Plug-in. Draft you send. Product moments — not another
            wall of copy.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-7">
          {beats.map((beat, i) => (
            <RevealCard
              key={beat.src}
              delayMs={i * 80}
              className="overflow-hidden rounded-xl border border-[#E5E5E5] bg-white/90 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F7F7]">
                <Image
                  src={beat.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain bg-[#F7F7F7]"
                />
              </div>
              <div className="space-y-2 p-5 sm:p-6">
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {beat.title}
                </h3>
                <p className="text-pretty text-sm leading-6 text-mute">
                  {beat.body}
                </p>
              </div>
            </RevealCard>
          ))}
        </div>
      </Shell>
    </section>
  );
}
