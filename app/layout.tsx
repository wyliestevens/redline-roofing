import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import { Toaster } from 'sonner';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MobileCallButton } from '@/components/mobile-call-button';
import { ChatbotContainer } from '@/components/chatbot-container';
import { SITE } from '@/lib/site-config';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = localFont({
  src: [
    {
      path: '../public/fonts/Fraunces-VariableFont.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-fraunces',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

export const metadata: Metadata = {
  title: {
    default: 'Redline Roofing & Restoration | Oklahoma City Roofing Contractor',
    template: '%s | Redline Roofing & Restoration',
  },
  description: SITE.tagline,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Redline Roofing & Restoration | Oklahoma City Roofing Contractor',
    description: SITE.tagline,
    images: [{ url: '/og/redline-storefront-1200x630.jpg', width: 1200, height: 630, alt: 'Redline Roofing & Restoration — Oklahoma City' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redline Roofing & Restoration',
    description: SITE.tagline,
    images: ['/og/redline-storefront-1200x630.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-slate-deep antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <MobileCallButton />
        <ChatbotContainer />
        <Toaster position="top-right" richColors />
        <Script
          id="retell-widget"
          src="https://retell-widget.example.com/widget.js"
          data-agent-id="REPLACE_WITH_RETELL_AGENT_ID"
          data-target="ai-chatbot-container"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
