import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./editorial.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://svoboda-efa.cz"),
  title: "Bc. Patrik Svoboda, EFA",
  description:
    "Hypotéky, investice, renta a finanční strategie s klidem, systémem a dlouhodobým plánem.",
};

const GA_ID = "G-L95FKT5RB8";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <a href="#main-content" className="skip-link">Přejít na obsah</a>
        <SiteHeader />
        {children}
        <SiteFooter />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
