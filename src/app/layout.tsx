import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Bifrost Code - Conectamos empresas con la tecnología',
  description: 'Soluciones tecnológicas innovadoras para empresas. Desarrollo de software, aplicaciones web y móviles que impulsan tu negocio.',
  keywords: 'desarrollo software, aplicaciones web, tecnología empresarial, soluciones digitales, desarrollo móvil',
  authors: [{ name: 'Bifrost Code' }],
  creator: 'Bifrost Code',
  publisher: 'Bifrost Code',
  category: 'technology',
  openGraph: {
    title: 'Bifrost Code - Conectamos empresas con la tecnología',
    description: 'Soluciones tecnológicas innovadoras para empresas. Desarrollo de software, aplicaciones web y móviles que impulsan tu negocio.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.bifrostcode.com',
    siteName: 'Bifrost Code',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bifrost Code - Soluciones Tecnológicas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bifrost Code',
    description: 'Soluciones tecnológicas innovadoras para empresas. Desarrollo de software, aplicaciones web y móviles.',
    images: ['/og-image.jpg'],
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
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
