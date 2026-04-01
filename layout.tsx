import './globals.css';
import type { Metadata } from 'next';
import SWRegister from './sw-register';

export const metadata: Metadata = {
  title: 'Meteo Αγριάς',
  description: 'Τοπική μετεωρολογική ενημέρωση σε πραγματικό χρόνο',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6d4" />
      </head>
      <body>
        <SWRegister />
        {children}
      </body>
    </html>
  );
}
