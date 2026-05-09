import type { CSSProperties, SVGProps } from "react";

const ACCENT = "#8B320B";

export type ContactLocationProps = {
  phone: string;
  phoneHref: string;
  address: string;
  mapsUrl: string;
  mapsEmbedSrc: string;
  instagramLabel: string;
  instagramUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
  bookingNote?: string;
};

function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconTiktok(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.918-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.01-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export function ContactLocationSection({
  phone,
  phoneHref,
  address,
  mapsUrl,
  mapsEmbedSrc,
  instagramLabel,
  instagramUrl,
  facebookUrl,
  tiktokUrl,
  bookingNote,
}: ContactLocationProps) {
  const iconCls =
    "h-6 w-6 text-stone-900 transition hover:text-[color:var(--contact-accent)] focus-visible:text-[color:var(--contact-accent)]";

  const sectionStyle: CSSProperties & {
    "--contact-accent"?: string;
  } = {
    "--contact-accent": ACCENT,
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-stone-200 bg-[#f7f6f4] py-16 sm:py-[4.75rem]"
      style={sectionStyle}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20">
        <div className="min-w-0">
          <h2 className="max-w-xl font-sans text-xl font-semibold uppercase leading-snug tracking-tight text-stone-900 sm:text-2xl">
            Liên hệ và đặt lịch với salon
          </h2>

          <a
            href={phoneHref}
            className="mt-6 inline-flex items-center justify-center rounded-md px-10 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-12"
            style={{ backgroundColor: ACCENT, outlineColor: ACCENT }}
          >
            Đặt lịch
          </a>
          {bookingNote ? (
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-600">
              {bookingNote}
            </p>
          ) : null}

          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
            <div>
              <p className="text-sm font-semibold text-stone-900">Hotline</p>
              <a
                href={phoneHref}
                className="mt-2 block text-base font-medium text-stone-800 underline decoration-stone-400 underline-offset-4 transition hover:text-[color:var(--contact-accent)] hover:decoration-[color:var(--contact-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ outlineColor: ACCENT }}
              >
                {phone}
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-stone-900">Socials</p>
              <div className="mt-3 flex items-center gap-4">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-md p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: ACCENT }}
                >
                  <IconFacebook className={iconCls} />
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram — ${instagramLabel}`}
                  className="rounded-md p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: ACCENT }}
                >
                  <IconInstagram className={iconCls} />
                </a>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="rounded-md p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: ACCENT }}
                >
                  <IconTiktok className={iconCls} />
                </a>
              </div>
            </div>

            <div className="sm:col-span-2">
              <p className="text-sm font-semibold text-stone-900">Địa chỉ</p>
              <p className="mt-2 max-w-lg text-[0.9725rem] leading-relaxed text-stone-700">
                {address}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-[color:var(--contact-accent)] underline underline-offset-[3px] transition hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ outlineColor: ACCENT }}
              >
                Mở chỉ đường trên Maps
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[280px] w-full overflow-hidden rounded-3xl border border-stone-200/90 bg-stone-200 shadow-lg shadow-stone-400/20 ring-1 ring-black/5 sm:min-h-[340px] lg:min-h-[min(440px,calc(100vh-12rem))]">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[11px] font-semibold text-stone-800 shadow-md ring-1 ring-stone-200/90 backdrop-blur-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ outlineColor: ACCENT }}
          >
            Mở trong Maps
            <span aria-hidden className="inline-block opacity-70">
              ↗
            </span>
          </a>

          <iframe
            title="Bản đồ Tran Tran Hair Studio — Sóc Trăng"
            src={mapsEmbedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
