import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ContactModalProvider } from "@/components/contact/ContactModalProvider";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
  SITE_URL,
} from "@/utils/site";

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
  metadataBase: new URL(SITE_URL),
  applicationName: "Rizz & Slay",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
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
    url: SITE_URL,
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

export const viewport: Viewport = {
  themeColor: "#CCFF00",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rizz & Slay",
  url: SITE_URL,
  telephone: CONTACT_PHONE_E164,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_ADDRESS,
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE_E164,
      email: CONTACT_EMAIL,
      contactType: "customer service",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <GoogleAnalytics />
        <ReactLenis root>
          <ContactModalProvider>{children}</ContactModalProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
