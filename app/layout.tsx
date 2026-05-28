import AppShell from "@/components/AppShell";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import Script from "next/script";

const font = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "LVLX - We are passionate about youth employment.",
  description: "Get started with LVLX today",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K39XV9F5S7"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-K39XV9F5S7');
          `}
        </Script>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
