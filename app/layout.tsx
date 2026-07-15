import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { neulisSans } from "@/lib/fonts";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Expert Residential & Commercial Roofing`,
    template: `%s | ${site.name}`,
  },
  description:
    "Trusted roofing for 60+ years — residential and commercial installations, repairs, inspections, and maintenance. Free roof inspection. Call (208) 522-4474.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={neulisSans.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
