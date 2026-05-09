"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import { ScrollReveal } from "@/components/ScrollReveal";
import { servicesDetailed } from "@/content/services";

const STICKY_TOP_CLASS = "top-32";
/** Must match CARD_H calc (8rem = sticky top offset). */
const STICKY_TOP_PX = 128;

function smootherstep(t: number): number {
  const x = Math.min(1, Math.max(0, t));
  return x * x * x * (x * (x * 6 - 15) + 10);
}

function useScrollOverlapProgress(scrollRangeRef: React.RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0);

  const update = useCallback(() => {
    const el = scrollRangeRef.current;
    if (!el) return;

    const scrollY =
      typeof window.scrollY === "number" ? window.scrollY : 0;

    /** Document Y of scroll track top */
    const topDoc = el.getBoundingClientRect().top + scrollY;

    /** When pinned, track top aligns with sticky offset below nav */
    const pinStartScroll = topDoc - STICKY_TOP_PX;
    const denom =
      el.offsetHeight - window.innerHeight + STICKY_TOP_PX;

    let next = (scrollY - pinStartScroll) / Math.max(1, denom);
    next = Math.min(1, Math.max(0, next));
    setP(next);
  }, [scrollRangeRef]);

  useEffect(() => {
    let raf = 0;
    const onTick = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onTick, { passive: true });
    window.addEventListener("resize", onTick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onTick);
      window.removeEventListener("resize", onTick);
    };
  }, [update]);

  return p;
}

function cardTransforms(
  progress: number,
  index: number,
  total: number,
): Pick<CSSProperties, "transform" | "opacity" | "zIndex" | "pointerEvents"> {
  const segments = Math.max(1, total - 1);
  const phase = progress * segments;
  const seg = Math.min(Math.floor(phase + 1e-9), segments - 1);
  const rawLocal = phase - seg;
  const localIn = smootherstep(rawLocal);

  /** Outgoing slide (below incoming) — index seg */
  const outgoing = seg;
  const incoming = seg + 1;

  /** Below stack (not reached yet): sit under viewport */
  if (index > incoming) {
    return {
      zIndex: 10 + index,
      transform: "translate3d(0,115%,0) scale(0.985)",
      opacity: 1,
      pointerEvents: "none",
    };
  }

  /** Fully settled under newer cards */
  if (index < outgoing) {
    return {
      zIndex: 10 + index,
      transform: "translate3d(0,-3%,0) scale(0.988)",
      opacity: 1,
      pointerEvents: "none",
    };
  }

  /** Outgoing: gently pushed back / lifted (stay fully opaque — no cross-fade bleed) */
  if (index === outgoing) {
    const lift = 9 * localIn;
    return {
      zIndex: 10 + index,
      transform: `translate3d(0,calc(${-lift}% + ${localIn * 6}px),0) scale(${0.986 + localIn * 0.009})`,
      opacity: 1,
      pointerEvents: "none",
    };
  }

  /** Incoming (on top): solid cover; motion is translate/scale only */
  if (index === incoming) {
    const yPct = (1 - localIn) * 78;
    return {
      zIndex: 40 + index,
      transform: `translate3d(0,calc(${yPct}% + ${(1 - localIn) * 8}px),0) scale(${0.97 + localIn * 0.03})`,
      opacity: 1,
      pointerEvents: localIn > 0.15 ? "auto" : "none",
    };
  }

  return { zIndex: 10 + index };
}

export function ServicesSection() {
  const scrollRangeRef = useRef<HTMLDivElement>(null);
  const progress = useScrollOverlapProgress(scrollRangeRef);

  const n = servicesDetailed.length;
  /** How much parent scroll feeds the transitions — larger = overlap feels slower/smoother */
  const scrollStretchVh = Math.max((n - 1) * 155, n * 90);

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-[#fbf9f6] via-background to-background"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/90 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-20 sm:pt-24">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Dịch vụ nổi bật
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                Chuyên nghiệp — cá nhân hóa cho bạn
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600">
                Cuộn trang để từng dịch vụ chồng dần lên phía trước — tốc độ chuyển cảnh được
                giữ mượt và đối xứng khi cuộn lại.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Parent scroll drives progress; tall track = slow, smooth overlap */}
        <div ref={scrollRangeRef} style={{ height: `${scrollStretchVh}vh` }} className="relative w-full pb-[min(32vh,18rem)] pt-14">
          <div
            className={`sticky ${STICKY_TOP_CLASS} z-20 mx-auto w-[80%] max-w-6xl`}
          >
            <div className="relative h-[calc(100dvh-8rem)] max-h-[calc(100dvh-8rem)] overflow-visible rounded-2xl border border-stone-200/90 shadow-[0_24px_64px_-16px_rgba(28,25,23,0.22)] ring-1 ring-stone-200/70">
              {servicesDetailed.map((s, index) => {
                const st = cardTransforms(progress, index, n);
                return (
                  <article
                    key={s.n}
                    className="group absolute inset-0 isolate flex flex-col overflow-hidden rounded-2xl border border-transparent bg-white will-change-transform motion-reduce:transform-none motion-reduce:transition-none"
                    style={{
                      ...st,
                      boxShadow: "0 -12px 40px rgba(28,25,23,0.12)",
                    }}
                  >
                    <div className="relative z-[1] grid min-h-0 flex-1 gap-8 overflow-y-auto px-5 py-5 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-stone-200">
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5 lg:grid-cols-2 lg:gap-3">
                        {s.thumbnails.map((thumb, i) => (
                          <div
                            key={thumb.src}
                            className="relative aspect-square overflow-hidden rounded-xl bg-stone-100 ring-1 ring-stone-200/80 transition duration-500 group-hover:ring-accent/25"
                            style={{ transitionDelay: `${i * 45}ms` }}
                          >
                            <Image
                              src={thumb.src}
                              alt={thumb.alt}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                              className="object-cover transition duration-500 group-hover:scale-[1.03]"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="relative min-w-0">
                        <div className="flex flex-wrap items-baseline gap-3">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-soft/20 to-accent/10 font-display text-lg font-semibold text-accent shadow-inner ring-2 ring-accent-soft/10">
                            {s.n}
                          </span>
                          <div>
                            <h3 className="font-display text-2xl font-semibold text-stone-900 sm:text-[1.65rem]">
                              {s.titleVi}
                            </h3>
                            <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                              {s.titleEn}
                            </p>
                          </div>
                        </div>
                        <p className="mt-5 text-base font-medium leading-relaxed text-stone-800">
                          {s.summary}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">{s.detail}</p>
                        <ul className="mt-6 space-y-2.5 border-t border-stone-100 pt-6 text-sm text-stone-600">
                          {s.highlights.map((line) => (
                            <li key={line} className="flex gap-2.5 leading-relaxed">
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
                                aria-hidden
                              />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                        <span className="mt-6 inline-block h-0.5 w-10 rounded-full bg-accent/50 transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
