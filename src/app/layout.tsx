import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musabsaraswat.com"),
  title: "Musab - AI Product Manager",
  description: "AI Product Manager specializing in rapid prototyping, UX/UI design, and shipping MVPs.",
  openGraph: {
    title: "Musab - AI Product Manager",
    description: "AI Product Manager specializing in rapid prototyping, UX/UI design, and shipping MVPs.",
    url: "https://musabsaraswat.com",
    siteName: "Musab Saraswat",
    type: "website",
    locale: "en_US",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary",
    title: "Musab - AI Product Manager",
    description: "AI Product Manager specializing in rapid prototyping, UX/UI design, and shipping MVPs.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
