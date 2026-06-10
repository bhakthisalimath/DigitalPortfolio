// app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import FluidCursor from "@/components/FluidCursor";
import SiteBackground from "@/components/SiteBackground";

export const metadata: Metadata = {
  title: "Bhakthi Salimath | Digital Media Ambassador Portfolio",
  description:
    "Digital Media Ambassador portfolio for the USyd OLE In-Country Experience — short-form video, student storytelling, and cultural content by Bhakthi Salimath.",
};

const themeScript = `
(function() {
  var k = 'portfolio-theme';
  var t = localStorage.getItem(k);
  if (t === 'light' || t === 'dark') {
    document.documentElement.setAttribute('data-theme', t);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning data-theme="dark">
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <Providers>
          <SiteBackground />
          <FluidCursor />
          <Navbar />
          <main className="main-layout">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
