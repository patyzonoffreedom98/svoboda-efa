// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import CookieConsent from './app/components/CookieConsent';

export const metadata: Metadata = {
  title: 'Bc. Patrik Svoboda, EFA',
  description:
    'Finanční plán, který obstojí v číslech i realitě. Hypotéky, investice, ochrana příjmu. Kancelář Jihlava, spolupráce po celé ČR.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        {children}
        {/* Cookie lišta – client komponenta */}
        <CookieConsent />
      </body>
    </html>
  );
}
