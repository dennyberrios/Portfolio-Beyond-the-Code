import type { Metadata } from "next";
import { cn } from '@/lib/utils'
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/sideBar";
import Footer from "@/components/Footer";
import { UserProvider } from "@/context";
import ScrollToTop from "@/components/ScrollToTop";

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
    <UserProvider>
      <ScrollToTop />
      <html lang="en">
        <body className={cn(
          `min-h-screen bg-light-bg font-sans ${geistSans.variable} ${geistMono.variable} antialiased`
        )}>
          <Header />
          <main className="font-arial flex justify-center items-center flex-col">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </UserProvider>
  );
}
