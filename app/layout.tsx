import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rands.agency"), // Replace with actual domain
  title: {
    default: "Rizz & Slay | Culture First Content Studio",
    template: "%s | Rizz & Slay",
  },
  description:
    "Rizz and Slayy is the culture first content and marketing studio that makes brands look like they belong on the For You page. We specialize in short-form content, TikTok marketing, and viral campaigns.",
  keywords: [
    "Content Studio",
    "TikTok Agency",
    "Short Form Content",
    "Viral Marketing",
    "Social Media Marketing",
    "Gen Z Marketing",
    "Video Production",
    "Creative Agency",
  ],
  authors: [{ name: "Rizz & Slay" }],
  creator: "Rizz & Slay",
  publisher: "Rizz & Slay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Rizz & Slay | Culture First Content Studio",
    description:
      "Rizz and Slayy is the culture first content and marketing studio that makes brands look like they belong on the For You page.",
    url: "https://rands.agency",
    siteName: "Rizz & Slay",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Rizz & Slay Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizz & Slay | Culture First Content Studio",
    description:
      "Rizz and Slayy is the culture first content and marketing studio that makes brands look like they belong on the For You page.",
    images: ["/images/logo.png"],
    creator: "@rizzandslay", // Placeholder
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground font-sans selection:bg-accent-1 selection:text-black`}
        suppressHydrationWarning={true}
      >
        <GoogleAnalytics />
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
