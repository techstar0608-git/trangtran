import type { Metadata } from "next";
import { Be_Vietnam_Pro, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trang Tran Hair | TP. Sóc Trăng",
  description:
    "Salon tóc Trang Tran Hair tại TP. Sóc Trăng — cắt thiết kế, nhuộm, uốn, duỗi. Đặt lịch và tư vấn kiểu tóc phù hợp gu của bạn.",
  openGraph: {
    title: "Trang Tran Hair",
    description: "Salon Trang Tran Hair tại TP. Sóc Trăng, Việt Nam.",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">{children}</body>
    </html>
  );
}
