import type { Metadata } from 'next';
import { Roboto, Kiwi_Maru } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto',
  subsets: ['latin'],
});
const kiwiMaru = Kiwi_Maru({
  weight: '400',
  variable: '--font-kiwiMaru',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'すみっこタイマー',
  description: '画面のすみっこで時間を計ってくれる優しい子です。',
  openGraph: {
    title: 'すみっこタイマー',
    description: '画面のすみっこで時間を計ってくれる優しい子です。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://sumikko-timer.vercel.app',
    siteName: 'すみっこタイマー',
    images: {
      url: '/ogp.png',
      type: 'image/png',
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yamap_web',
    title: 'すみっこタイマー',
    description: '画面のすみっこで時間を計ってくれる優しい子です。',
    images: {
      url: '/ogp.png',
      type: 'image/png',
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="dracula">
      <body
        className={`${roboto.variable} ${kiwiMaru.variable} font-kiwiMaru antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
