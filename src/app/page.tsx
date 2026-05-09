import Image from "next/image";

import { SiteHeader } from "@/components/SiteHeader";
import { ContactLocationSection } from "@/components/ContactLocationSection";
import { PartnerBrandsSection } from "@/components/PartnerBrandsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ScrollReveal } from "@/components/ScrollReveal";

/** Hero portrait — match reference vibe; swap with salon shoot in `/public/` when ready */
const heroPortraitSrc =
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=85";

const site = {
  brand: "Tran Tran",
  tagline: "Mong một khách đến trăm lần còn hơn trăm khách đến một lần",
  /** Hero location line — short label like reference (“Berlin, Germany”) */
  heroLocation: "TP. Sóc Trăng · Việt Nam",
  address: "18-19 LK2, khu dân cư Tuấn Lan — Hùng Vương, TP. Sóc Trăng",
  /** Google Maps search — opens pin / directions around this address */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("18-19 LK2 khu dân cư Tuấn Lan, Hùng Vương, TP. Sóc Trăng, Việt Nam"),
  /** Cập nhật số điện thoại / Instagram thật khi triển khai */
  phone: "0299 382 6789",
  phoneHref: "tel:+842993826789",
  instagram: "@trantran.hairstudio",
  instagramUrl: "https://instagram.com/",
  /** Cập nhật đúng trang salon khi triển khai */
  facebookUrl: "https://www.facebook.com/",
  tiktokUrl: "https://www.tiktok.com/",
  bookingNote: "Đặt lịch qua hotline hoặc tin nhắn Instagram",
  /** Embed Google Maps (search theo địa chỉ — thay bằng URL embed Share từ Maps nếu cần pin khớp hơn) */
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(
      "18-19 LK2 khu dân cư Tuấn Lan, Hùng Vương, TP. Sóc Trăng, Việt Nam",
    ) +
    "&hl=vi&z=17&output=embed",
};

const nav = [
  { href: "#home", label: "Trang chủ" },
  { href: "#about", label: "Giới thiệu" },
  { href: "#pricing", label: "Bảng giá" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#contact", label: "Liên hệ" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <SiteHeader brand={site.brand} nav={nav} />

      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-[linear-gradient(165deg,#fceee9_0%,#ebe4ee_45%,#b9c5d6_100%)] pb-16 pt-28 text-stone-900 sm:pb-24 sm:pt-32 lg:pb-28"
        >
          <div aria-hidden className="pointer-events-none absolute -right-[20%] top-[-10%] h-[65%] w-[65%] rounded-full bg-[#d4c4dc]/55 blur-[100px]" />
          <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-12 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12 xl:gap-24">
            <div className="max-w-xl flex-1 space-y-8 lg:py-8">
              <p className="flex items-center gap-4 text-[13px] font-medium tracking-tight text-stone-900">
                <span className="inline-block h-px w-8 bg-stone-900 md:w-14" aria-hidden />
                <span>{site.heroLocation}</span>
              </p>

              <h1 className="font-sans text-[clamp(2.25rem,5vw,3.85rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block">Tất cả vì</span>
                <span className="mt-2 block">vẻ đẹp</span>
                <span className="mt-2 inline-flex items-center">
                  của{" "}
                  <span className="ml-4 inline-block rounded-2xl bg-stone-900 px-4 py-1.5 pb-2 text-white sm:ml-5 sm:px-6 sm:py-2">
                    bạn
                  </span>
                </span>
              </h1>

              <p className="max-w-lg text-[1.0625rem] leading-relaxed text-stone-700 sm:text-lg">
                {site.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-x-10 gap-y-5 pt-1">
                <a
                  href="#contact"
                  className="inline-flex min-h-[52px] min-w-[170px] items-center justify-center rounded-full bg-stone-900 px-10 text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-stone-900/25 transition hover:-translate-y-0.5 hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 motion-reduce:transition-none"
                >
                  Đặt lịch ngay
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-4 text-[15px] font-medium tracking-tight text-stone-900 transition hover:text-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
                >
                  <span
                    className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-stone-900 bg-white shadow-sm"
                    aria-hidden
                  >
                    <svg
                      className="ml-1 h-5 w-5 text-stone-900"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="border-b-[1.5px] border-current pb-0.5">Xem quy trình làm đẹp</span>
                </a>
              </div>
            </div>

            <div className="relative flex flex-1 justify-center lg:max-w-[min(560px,calc(100%-2rem))] lg:flex-none lg:basis-[48%]">
              <div
                aria-hidden
                className="absolute -right-[6%] top-[10%] h-[92%] w-[92%] max-w-xl rounded-[42%_42%_28%_28%] bg-[#8b97a9]/42 sm:rounded-[45%_45%_30%_30%]"
              />
              <div className="relative z-[1] aspect-[3/4] w-full overflow-hidden rounded-tr-[clamp(96px,_18vw,_180px)] rounded-bl-[clamp(96px,_18vw,_180px)] shadow-[0_40px_80px_-28px_rgba(28,_25,_23,_0.42)] lg:aspect-[11/13] xl:aspect-[10/13]">
                <Image
                  src={heroPortraitSrc}
                  alt="Khách tại salon Tran Tran Hair Studio — phong cách hiện đại, nhẹ nhàng"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="object-cover object-[center_15%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-white via-white to-[#f8f5f0] py-20 sm:py-24">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-accent-soft/[0.06] blur-3xl" />
          <ScrollReveal>
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Bước tiến lớn
            </p>
            <h2 className="font-display mt-3 max-w-[20ch] text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Hành trình Tran Tran tại Sóc Trăng
            </h2>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:items-start">
              <div className="space-y-5 text-[1.03rem] leading-relaxed text-stone-600">
                <p>
                  Tran Tran bắt đầu từ một không gian nhỏ, tập trung vào tay nghề và
                  sự chỉn chu trong từng đường kéo. Qua thời gian, chúng tôi mở rộng
                  studio tại trung tâm{" "}
                  <strong className="font-semibold text-stone-800">
                    TP. Sóc Trăng
                  </strong>{" "}
                  để phục vụ khách hàng trong và ngoài tỉnh — giữ nguyên tinh thần:
                  làm đẹp bền vững, lắng nghe thật và tôn trọng chất tóc.
                </p>
                <p>
                  Đội ngũ stylist được đào tạo bài bản, cập nhật xu hướng và kỹ thuật
                  an toàn; mỗi lần ghé salon là một trải nghiệm thư giãn, rõ ràng về
                  chi phí và kết quả.
                </p>
              </div>
              <div className="relative rounded-2xl border border-stone-200/80 bg-gradient-to-br from-[#faf6f2] via-[#f5efe6] to-[#ebe3d8] p-8 text-stone-700 shadow-xl shadow-stone-300/40 ring-1 ring-white/70">
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
                <p className="pl-5 font-display text-lg font-semibold text-stone-900">
                  Về chúng tôi
                </p>
                <p className="mt-4 pl-5 text-sm leading-relaxed text-stone-600">
                  Tran Tran Hair Studio đặt khách hàng trung tâm — từ tư vấn kiểu phù
                  hợp khuôn mặt đến chăm sóc sau dịch vụ. Chúng tôi hợp tác các dòng
                  sản phẩm uy tín để bảo vệ cấu trúc tóc trong suốt quy trình làm đẹp.
                </p>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </section>

        <ServicesSection />

        <PartnerBrandsSection />

        <section className="relative overflow-hidden bg-surface-dark py-20 text-[#f5f0e8] sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--accent-soft),transparent)] opacity-[0.12]" />
          <ScrollReveal delayMs={40}>
            <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-soft">
                Instagram
              </p>
              <h2 className="font-display mt-5 bg-gradient-to-b from-[#faf6f2] via-stone-200 to-stone-500 bg-clip-text text-3xl font-semibold text-transparent sm:text-5xl">
                {site.instagram}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[0.97rem] leading-relaxed text-stone-400">
                Theo dõi Tran Tran để xem các mẫu tóc mới, combo dịch vụ và khuyến mãi
                theo mùa.
              </p>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-2 rounded-full border border-stone-500/90 bg-stone-900/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-stone-100 shadow-lg shadow-black/30 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-accent-soft/80 hover:bg-stone-800/60 hover:text-accent-soft hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
              >
                Mở Instagram
                <span aria-hidden className="inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </ScrollReveal>
        </section>

        <section id="pricing" className="relative bg-gradient-to-b from-white to-[#faf8f6] py-20 sm:py-24">
          <ScrollReveal>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Bảng giá tham khảo
              </p>
              <h2 className="font-display mt-3 max-w-[22ch] text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                Minh bạch — báo giá sau khi soi tóc
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">
                Giá phụ thuộc độ dài, độ khó kỹ thuật và sản phẩm sử dụng. Dưới đây là
                khoảng giá để bạn tham khảo; stylist sẽ chốt chi tiết tại salon trước khi
                làm.
              </p>
              <ul className="mt-12 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg shadow-stone-200/50 ring-1 ring-stone-100">
                {[
                  { name: "Cắt + gội styling", range: "150.000 — 350.000đ" },
                  { name: "Nhuộm single process", range: "từ 600.000đ" },
                  { name: "Uốn / duỗi (theo độ dài)", range: "từ 900.000đ" },
                  { name: "Combo chăm sóc & phục hồi", range: "liên hệ" },
                ].map((row, i) => (
                  <li
                    key={row.name}
                    className={`flex flex-wrap items-center justify-between gap-3 px-6 py-5 text-sm transition-colors sm:text-base ${
                      i % 2 === 0 ? "bg-white" : "bg-stone-50/80"
                    } hover:bg-accent-soft/[0.06]`}
                  >
                    <span className="font-medium text-stone-800">{row.name}</span>
                    <span className="rounded-full bg-stone-100/90 px-3 py-1 text-sm font-medium text-stone-700 ring-1 ring-stone-200/80">
                      {row.range}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </section>

        <ContactLocationSection
          phone={site.phone}
          phoneHref={site.phoneHref}
          address={site.address}
          mapsUrl={site.mapsUrl}
          mapsEmbedSrc={site.mapsEmbedSrc}
          instagramLabel={site.instagram}
          instagramUrl={site.instagramUrl}
          facebookUrl={site.facebookUrl}
          tiktokUrl={site.tiktokUrl}
          bookingNote={site.bookingNote}
        />
      </main>

      <footer className="border-t border-stone-200/80 bg-background py-12 text-xs text-stone-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:flex-row sm:justify-between sm:px-6">
          <div className="max-w-xl text-center leading-relaxed sm:text-left">
            <p className="text-stone-600">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-stone-700">{site.brand}</span> Hair Studio
            </p>
            <p className="mt-3">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-stone-700 transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {site.address}
                <span className="mx-2 hidden text-stone-400 sm:inline" aria-hidden>
                  ·
                </span>
                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide text-accent sm:mt-0 sm:inline sm:text-xs">
                  Xem trên Google Maps <span aria-hidden>↗</span>
                </span>
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium">
            {nav.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-stone-500 transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
