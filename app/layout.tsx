import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "../public/styles.css";

const manrope = Manrope({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "greek", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BALANS — здоровье, движение, медицинские знания",
  description:
    "BALANS — авторские проекты врача о здоровье, питании, тренировках и медицинском образовании.",
};

export const viewport: Viewport = {
  themeColor: "#081b2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
