import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divya Sachan - Figma & Frontend Designer Portfolio",
  description:
    "Explore Divya Sachan's portfolio—a creative Figma & Frontend Designer crafting clean, modern interfaces and polished UI prototypes. Also a passionate poems writer.",
  keywords: [
    "Divya Sachan",
    "Figma designer",
    "Frontend designer",
    "UI designer",
    "UX design",
    "portfolio",
    "interface design",
    "modern web design",
    "poems writer",
    "creative designer",
  ],
  authors: [{ name: "Divya Sachan" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://divya16sachan.netlify.app/",
  },
  openGraph: {
    type: "website",
    url: "https://divya16sachan.netlify.app/",
    title: "Divya Sachan - Figma & Frontend Designer Portfolio",
    description:
      "Explore Divya Sachan's portfolio—a creative Figma & Frontend Designer crafting clean, modern interfaces and polished UI prototypes. Also a passionate poems writer.",
    images: [
      {
        url: "https://divya16sachan.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Divya Sachan Portfolio",
      },
    ],
    siteName: "Divya Sachan Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divya Sachan - Figma & Frontend Designer Portfolio",
    description:
      "Explore Divya Sachan's portfolio—a creative Figma & Frontend Designer crafting clean, modern interfaces and polished UI prototypes. Also a passionate poems writer.",
    images: ["https://divya16sachan.netlify.app/og-image.png"],
    creator: "@IamDivyaSachan",
    site: "@IamDivyaSachan",
  },
  icons: {
    icon: [
      { url: "/divya-favicon-light.png", sizes: "32x32", type: "image/png" },
      { url: "/divya-favicon-light.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://divya16sachan.netlify.app/#person",
        "name": "Divya Sachan",
        "url": "https://divya16sachan.netlify.app/",
        "image": {
          "@type": "ImageObject",
          "url": "https://divya16sachan.netlify.app/avatar3.png",
        },
        "sameAs": ["https://x.com/IamDivyaSachan"],
        "jobTitle": "Figma & Frontend Designer",
        "description":
          "Figma & Frontend Designer who loves creating clean, modern interfaces and writing poems",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://divya16sachan.netlify.app/#website",
        "url": "https://divya16sachan.netlify.app/",
        "name": "Divya Sachan Portfolio",
        "description": "Portfolio of Divya Sachan - Figma & Frontend Designer",
        "publisher": {
          "@id": "https://divya16sachan.netlify.app/#person",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://divya16sachan.netlify.app/#webpage",
        "url": "https://divya16sachan.netlify.app/",
        "name": "Divya Sachan - Figma & Frontend Designer Portfolio",
        "isPartOf": {
          "@id": "https://divya16sachan.netlify.app/#website",
        },
        "about": {
          "@id": "https://divya16sachan.netlify.app/#person",
        },
        "description":
          "Explore Divya Sachan's portfolio—a creative Figma & Frontend Designer crafting clean, modern interfaces and polished UI prototypes. Also a passionate poems writer.",
        "inLanguage": "en-US",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
