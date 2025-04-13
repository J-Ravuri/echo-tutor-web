import type {Metadata} from 'next';
import {Comic_Neue} from 'next/font/google';
import './globals.css';

const comicNeue = Comic_Neue({
  variable: '--font-comic-neue',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'EchoTutor',
  description: 'Your Personalized AI Learning Companion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comicNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

