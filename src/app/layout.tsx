import '@/styles/globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Important Update: Introducing Usage-Based Pricing for Claude | Blog | Claude',
  description:
    "Today, we're announcing significant changes to how Claude is priced and accessed. Starting May 1, 2026, we will transition all users to our new usage-based pricing model: Fisher Pricing.",
  metadataBase: new URL('https://fisher-claude.github.io'),
  openGraph: {
    title: 'Important Update: Introducing Usage-Based Pricing for Claude',
    description:
      "Today, we're announcing significant changes to how Claude is priced and accessed. Starting May 1, 2026, we will transition all users to Fisher Pricing.",
    url: 'https://fisher-claude.github.io/code',
    siteName: 'Claude',
    images: [
      {
        url: '/code/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Fisher Pricing for Claude',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Important Update: Introducing Usage-Based Pricing for Claude',
    description:
      "Today, we're announcing significant changes to how Claude is priced and accessed. Starting May 1, 2026, we will transition all users to Fisher Pricing.",
    images: ['/code/images/og.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
