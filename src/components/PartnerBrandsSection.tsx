"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import { partnersDetailed } from "@/content/partners";

/** `threshold` must allow thin sentinels h-px — a lone 0.12 ratio often never crosses on a 1px-tall rect */
const IO_OPTIONS: IntersectionObserverInit = {
  rootMargin: "0px 0px -8% 0px",
  threshold: 0,
};

const STAGGER_MS = 96;

export function PartnerBrandsSection() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      queueMicrotask(() => setVisible(true));
      return;
    }

    let io: IntersectionObserver | undefined;
    let cancelled = false;
    let rafId = 0;

    /** Ref can be briefly null post-hydration; avoid skipping straight to visible (no animation). */
    const attachWhenReady = () => {
      if (cancelled) return;

      const el = sentinelRef.current;
      if (!el) {
        rafId = window.requestAnimationFrame(attachWhenReady);
        return;
      }

      io = new IntersectionObserver(([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        io?.disconnect();
      }, IO_OPTIONS);

      io.observe(el);
    };

    attachWhenReady();

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rafId);
      io?.disconnect();
    };
  }, []);

  return (
    <section className="border-y border-stone-200/80 bg-[linear-gradient(to_bottom,#fdfcfa_0%,#faf7f3_48%,#f5efe8_100%)] py-16 sm:py-20">
      {/* Observed sentinel — fires when this row enters viewport (do not collapse height) */}
      <div
        ref={sentinelRef}
        className="pointer-events-none mx-auto h-px w-[80%] max-w-6xl shrink-0"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollRevealHeading visible={visible} />

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {partnersDetailed.map((p, index) => (
            <li
              key={p.slug}
              className={`partner-brand-card group relative overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[0_22px_50px_-24px_rgba(28,25,23,0.35)] ring-1 ring-stone-200/55 ${
                visible ? "is-visible" : ""
              }`}
              style={{
                "--brand-stagger": `${48 + index * STAGGER_MS}ms`,
              } as CSSProperties}
            >
              <div className="relative aspect-[21/11] overflow-hidden bg-stone-100 sm:aspect-[21/12]">
                <Image
                  src={p.imageSrc}
                  alt={p.imageAltVi}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-[1.1s] ease-out motion-reduce:transition-none group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-stone-900/72 via-stone-900/15 to-transparent"
                />
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-14 sm:px-6 sm:pb-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/92">
                    {p.subtitle}
                  </p>
                  <p className="font-display mt-1.5 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                    {p.titleVi}
                  </p>
                </div>
              </div>

              <div className="space-y-3 px-5 py-5 sm:px-6 sm:pb-6">
                <p className="text-[0.9725rem] leading-relaxed text-stone-700">
                  {p.description}
                </p>
                <p className="text-sm leading-relaxed text-stone-500">{p.detailVi}</p>
                <ul className="flex flex-wrap gap-2 pt-2">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-stone-600 ring-1 ring-stone-200/90"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ScrollRevealHeading({ visible }: { visible: boolean }) {
  return (
    <header
      className={`partner-heading-reveal mx-auto max-w-3xl text-center ${
        visible ? "is-visible" : ""
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
        Thương hiệu đồng hành
      </p>
      <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
        Minh bạch sản phẩm trong từng bước làm
      </h2>
      <p className="mt-4 leading-relaxed text-stone-600">
        Tran Tran chỉ làm đẹp trên chất liệu tóc của bạn với các dòng sản phẩm uy tín, có hướng dẫn
        và ghi nhận rõ trong quy trình — dưới đây là bốn hướng hợp tác Salon lựa chọn.
      </p>
    </header>
  );
}
