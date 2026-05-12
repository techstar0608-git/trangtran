"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ACCENT = "#8B320B";

/** Below this scroll position, hiding on downward scroll kicks in */
const SHOW_TOP_AXLE = 48;
/** Ignore tiny deltas from trackpads */
const DELTA_GATE = 6;

type NavItem = { href: string; label: string };

type Props = {
  brand: string;
  nav: NavItem[];
};

function idFromHash(): string {
  if (typeof window === "undefined") return "home";
  const h = window.location.hash.replace(/^#/, "");
  return h || "home";
}

export function SiteHeader({ brand, nav }: Props) {
  const [activeId, setActiveId] = useState<string>("home");
  const [scrollHidden, setScrollHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    setActiveId(idFromHash());
    const onHash = () => setActiveId(idFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const prev = lastYRef.current;
      lastYRef.current = y;

      setScrolled(y > 36);

      if (y < SHOW_TOP_AXLE) {
        setScrollHidden(false);
        return;
      }

      const delta = y - prev;
      if (delta > DELTA_GATE) setScrollHidden(true);
      else if (delta < -DELTA_GATE) setScrollHidden(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (scrollHidden) setMobileMenuOpen(false);
  }, [scrollHidden]);

  const bookingBtnClass =
    "shrink-0 rounded-full bg-stone-900 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-stone-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-6 sm:text-xs";

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex w-full justify-center px-4 pt-4 transition-[transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none sm:px-6 sm:pt-6"
      style={{
        transform: scrollHidden
          ? "translateY(calc(-100% - 1rem))"
          : "translateY(0)",
        willChange: "transform",
      }}
    >
      <div
        className={`pointer-events-auto relative w-full max-w-[1400px] transition-[background,box-shadow,backdrop-filter,border-radius] duration-300 ${
          scrolled
            ? "rounded-full border border-stone-200/80 bg-white/90 py-3 pl-5 pr-3 shadow-lg shadow-stone-400/15 backdrop-blur-md sm:py-3.5 sm:pl-8 sm:pr-5"
            : "border border-transparent bg-transparent py-2 sm:py-3"
        }`}
      >
        {/* Desktop & tablet: reference layout — nav | logo | booking (no sign-in) */}
        <div className="hidden items-center md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6">
          <nav
            aria-label="Điều hướng chính"
            className="flex min-w-0 items-center justify-start gap-6 lg:gap-9"
          >
            {nav.map((item) => {
              const id = item.href.replace(/^#/, "");
              const active = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveId(id)}
                  className={`whitespace-nowrap text-[13px] font-medium tracking-tight transition-colors ${
                    active ? "" : "text-stone-900 hover:text-stone-600"
                  }`}
                  style={{ color: active ? NAV_ACCENT : undefined }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href="#home"
            className="font-display max-w-[220px] text-center text-[1.0625rem] font-semibold leading-tight tracking-tight text-stone-900 transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:max-w-none sm:text-xl md:text-2xl"
            style={{ outlineColor: NAV_ACCENT }}
          >
            {brand}
          </a>

          <div className="flex items-center justify-end gap-3">
            <a
              href="#contact"
              onClick={() => setActiveId("contact")}
              className={bookingBtnClass}
              style={{ outlineColor: NAV_ACCENT }}
            >
              Đặt lịch ngay
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between gap-3 md:hidden">
          <a
            href="#home"
            className="font-display min-w-0 flex-1 pr-2 text-[0.95rem] font-semibold leading-snug text-stone-900 sm:text-lg"
          >
            {brand}
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#contact"
              onClick={() => setActiveId("contact")}
              className={bookingBtnClass}
              style={{ outlineColor: NAV_ACCENT }}
            >
              Đặt lịch
            </a>
            <button
              type="button"
              id="mobile-nav-trigger"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileMenuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-900/15 bg-white/70 text-stone-900 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: NAV_ACCENT }}
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <>
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="fixed inset-0 z-40 bg-stone-900/25 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <nav
              id="mobile-nav-panel"
              aria-label="Điều hướng điện thoại"
              className="absolute left-0 right-0 top-[calc(100%+0.65rem)] z-50 md:hidden"
            >
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white py-1 shadow-xl shadow-stone-400/25 ring-1 ring-stone-200/60">
                {nav.map((item) => {
                  const id = item.href.replace(/^#/, "");
                  const active = activeId === id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setActiveId(id);
                        setMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-3 text-sm font-semibold tracking-wide transition-colors ${
                        active ? "text-white" : "text-neutral-800 hover:bg-stone-50"
                      }`}
                      style={active ? { backgroundColor: NAV_ACCENT } : undefined}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </nav>
          </>
        ) : null}
      </div>
    </div>
  );
}
