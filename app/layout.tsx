import type { Metadata } from "next";
import { Analytics } from "@/components/analytics/Analytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { alegreya, interTight } from "@/lib/fonts";
import { getLocalBusinessJsonLd } from "@/lib/json-ld";
import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="fr" className={`${alegreya.variable} ${interTight.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <SmoothScroll>
          <a href="#main-content" className="skip-link">
            Aller au contenu principal
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
