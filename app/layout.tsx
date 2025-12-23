import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://gramadhan.cyou'),
  title: {
    default: "Gani Ramadhan | Full Stack Developer - React, Next.js, Laravel Expert",
    template: "%s | Gani Ramadhan - Full Stack Developer"
  },
  description: "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and Laravel. 3+ years building scalable web applications with modern technologies. Based in Bandung, Indonesia. Available for freelance and full-time opportunities.",
  keywords: [
    "Full Stack Developer",
    "Web Developer", 
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Gani Ramadhan",
    "Bandung Developer",
    "Indonesia Developer",
    "Freelance Developer",
    "Web Application Developer",
    "REST API Developer",
    "PostgreSQL",
    "Docker",
    "Kubernetes"
  ],
  authors: [{ name: "Gani Ramadhan", url: "https://gramadhan.cyou" }],
  creator: "Gani Ramadhan",
  publisher: "Gani Ramadhan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gramadhan.cyou",
    siteName: "Gani Ramadhan - Full Stack Developer",
    title: "Gani Ramadhan | Full Stack Developer - Building Modern Web Applications",
    description: "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and Laravel. Building scalable, high-performance web applications.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gani Ramadhan - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gani Ramadhan | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and Laravel. Building modern web applications.",
    images: ["/images/og-image.png"],
    creator: "@ganiiraaa",
    site: "@ganiiraaa",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://gramadhan.cyou",
    languages: {
      'en-US': 'https://gramadhan.cyou',
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gani Ramadhan",
  "url": "https://gramadhan.cyou",
  "image": "https://gramadhan.cyou/images/profile.png",
  "jobTitle": "Full Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bandung",
    "addressCountry": "Indonesia"
  },
  "sameAs": [
    "https://github.com/Ganiramadhan",
    "https://www.linkedin.com/in/ganiramadhan35/",
    "https://www.instagram.com/ganiiraaa/"
  ],
  "knowsAbout": [
    "React.js",
    "Next.js", 
    "TypeScript",
    "Node.js",
    "Laravel",
    "PostgreSQL",
    "Docker",
    "Kubernetes"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}
