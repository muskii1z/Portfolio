import type { Metadata } from "next";
import { Fredoka, Nunito, JetBrains_Mono, Caveat, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-jetbrains",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
  variable: "--font-caveat",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-pixelify",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata({ path: "/" }),
  title: { default: `${site.name} — ${site.role}`, template: `%s · ${site.name}` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${jetbrains.variable} ${caveat.variable} ${pixelify.variable}`}
    >
      <body className="paper font-body text-ink antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
