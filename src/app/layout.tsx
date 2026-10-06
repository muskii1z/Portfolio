import type { Metadata } from "next";
import {
  Inter,
  Fredoka,
  Nunito,
  JetBrains_Mono,
  Caveat,
  Pixelify_Sans,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700", "800"],
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

const description =
  "Musab Saraswat is an AI engineer who builds AI products that actually ship — agents, RAG systems, and mobile apps, end to end.";

export const metadata: Metadata = {
  metadataBase: new URL("https://musabsaraswat.com"),
  title: "Musab Saraswat — AI Engineer",
  description,
  openGraph: {
    title: "Musab Saraswat — AI Engineer",
    description,
    url: "https://musabsaraswat.com",
    siteName: "Musab Saraswat",
    type: "website",
    locale: "en_US",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary",
    title: "Musab Saraswat — AI Engineer",
    description,
    images: ["/icon.png"],
  },
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
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
