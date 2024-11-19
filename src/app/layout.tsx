import type { Metadata } from "next";
import { cn } from '@/lib/utils'
import "./globals.css";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Beyond the Code - Portfólio",
description: "Explore o portfólio 'Beyond the Code' de Danny Berrios, destacando projetos inovadores, design moderno e soluções front-end criativas com foco na experiência do usuário."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        `min-h-screen bg-light font-sans ${geistSans.variable} ${geistMono.variable} antialiased`
      )}>
        {children}
      </body>
    </html>
  );
}
