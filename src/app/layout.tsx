
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GeoSystem | Shërbime Gjeodezike në Kosovë",
    template: "%s | GeoSystem",
  },
  description:
    "GeoSystem në Podujevë ofron shërbime gjeodezike, matje kadastrale, rilevime topografike dhe pajisje gjeodezike me kërkesë për ofertë.",
  applicationName: "GeoSystem",
  openGraph: {
    type: "website",
    locale: "sq_XK",
    siteName: "GeoSystem",
    title: "GeoSystem | Shërbime Gjeodezike në Kosovë",
    description:
      "Shërbime gjeodezike, matje kadastrale, rilevime topografike dhe katalog pajisjesh gjeodezike në Podujevë, Kosovë.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="sq"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
