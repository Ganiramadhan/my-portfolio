import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gramadhan.cyou'),
  title: {
    default: "Gani Ramadhan - Full Stack Developer",
    template: "%s | Gani Ramadhan"
  },
  description: "Full Stack Developer with 3+ years of experience building scalable web applications using React, Next.js, Node.js, and Laravel. Based in Bandung, Indonesia.",
  keywords: ["Full Stack Developer", "Web Developer", "React Developer", "Next.js", "Laravel", "Node.js", "TypeScript", "Gani Ramadhan", "Bandung", "Indonesia", "Software Engineer"],
  authors: [{ name: "Gani Ramadhan", url: "https://gramadhan.cyou" }],
  creator: "Gani Ramadhan",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gramadhan.cyou",
    siteName: "Gani Ramadhan Portfolio",
    title: "Gani Ramadhan - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and Laravel. Building modern, scalable web applications.",
    images: [
      {
        url: "/images/newIcon.png",
        width: 1200,
        height: 630,
        alt: "Gani Ramadhan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gani Ramadhan - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and Laravel.",
    images: ["/images/newIcon.png"],
    creator: "@ganiiraaa",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://gramadhan.cyou",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
