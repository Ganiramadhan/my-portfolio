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
  title: "Gani Ramadhan Portfolio",
  description: "Welcome to Gani Ramadhan's portfolio, a web developer experienced in Next.js and modern technologies.",
  keywords: "portfolio, web developer, Next.js, frontend, Gani Ramadhan, JavaScript, React",
  openGraph: {
    title: "Gani Ramadhan Portfolio",
    description: "Explore my works and experiences as a web developer.",
    url: "https://gramadhan.cyou", 
    siteName: "Gani Ramadhan Portfolio",
    images: [
      {
        url: "/images/newIco.png", 
        width: 600,
        height: 315,
        alt: "Gani Ramadhan Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gani Ramadhan Portfolio",
    description: "Explore my works and experiences as a web developer.",
    images: ["/og-image.jpg"],
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
