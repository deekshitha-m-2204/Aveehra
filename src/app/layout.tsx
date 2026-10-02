import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import { generateStructuredData } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AVEEHRA | Pioneering India's Circular Uniform Ecosystem",
  description:
    "Aveehra is an Indian uniform brand built on Respect, Sustainability, and Social Impact. Initiated in Mysuru, Karnataka, giving every uniform another journey through dignified reuse and responsible recycling.",
  keywords: [
    "sustainable school uniforms India",
    "circular uniform ecosystem",
    "school uniform recycling",
    "school uniform reuse",
    "affordable school uniforms dignity",
    "Mysuru uniform manufacturer",
    "Karnataka school uniform suppliers",
    "textile waste in schools",
    "ethical institutional uniforms",
  ],
  authors: [{ name: "AVEEHRA Circular Ecosystem" }],
  creator: "AVEEHRA",
  publisher: "AVEEHRA",
  metadataBase: new URL("https://aveehra.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AVEEHRA | Pioneering India's Circular Uniform Ecosystem",
    description:
      "A uniform is never merely a piece of cloth. Pioneering India's circular uniform movement from Mysuru, Karnataka.",
    url: "https://aveehra.com",
    siteName: "AVEEHRA",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-craft.jpg",
        width: 1200,
        height: 630,
        alt: "Aveehra Circular Uniform Craftsmanship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVEEHRA | Pioneering India's Circular Uniform Ecosystem",
    description:
      "A uniform is never merely a piece of cloth. Respect → Extend → Reuse → Recycle.",
    images: ["/images/hero-craft.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { organizationSchema, serviceSchema, faqSchema } = generateStructuredData();

  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
