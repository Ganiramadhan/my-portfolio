import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // Menambahkan opsi bobot font
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio Gani Ramadhan",
  description: "Selamat datang di portfolio Gani Ramadhan, seorang pengembang web dengan pengalaman di Next.js dan teknologi modern.",
  keywords: "portfolio, web developer, Next.js, frontend, Gani Ramadhan",
  openGraph: {
    title: "Portfolio Gani Ramadhan",
    description: "Jelajahi karya dan pengalaman saya sebagai pengembang web.",
    url: "https://gramadhan.cyou", 
    siteName: "Portfolio Gani Ramadhan",
    images: [
      {
        url: "/images/newIco.png", 
        width: 1200,
        height: 630,
        alt: "Portfolio Gani Ramadhan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Gani Ramadhan",
    description: "Jelajahi karya dan pengalaman saya sebagai pengembang web.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
