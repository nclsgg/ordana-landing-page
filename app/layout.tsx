import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ordana - Landing Pages Profissionais para Prestadores de Serviços",
  description: "Expanda seu negócio com landing pages profissionais e otimizadas. Atraia mais clientes, fortaleça sua credibilidade online e aumente suas conversões com a Ordana.",
  keywords: ["landing page", "prestadores de serviços", "marketing digital", "conversão", "sites profissionais", "presença digital"],
  authors: [{ name: "Ordana" }],
  creator: "Ordana",
  publisher: "Ordana",
  metadataBase: new URL('https://ordana.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ordana.tech",
    title: "Ordana - Landing Pages Profissionais para Prestadores de Serviços",
    description: "Expanda seu negócio com landing pages profissionais e otimizadas. Atraia mais clientes e fortaleça sua credibilidade online.",
    siteName: "Ordana",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ordana - Landing Pages Profissionais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ordana - Landing Pages Profissionais para Prestadores de Serviços",
    description: "Expanda seu negócio com landing pages profissionais e otimizadas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a3a52" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
