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
  description: '画面のすみっこで時間を測ってくれる優しい子です。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="synthwave">
      <body
        className={`${roboto.variable} ${kiwiMaru.variable} font-kiwiMaru antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
