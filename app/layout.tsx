import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { Navbar, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Berita Kini",
  description:
    "Berita terbaru, terpopuler, dan terpercaya seputar nasional, internasional, ekonomi, dan lainnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="mx-auto px-6 lg:px-4 lg:max-w-330 pt-32">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
