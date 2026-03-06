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
  CONTACT_PHONE_DISPLAY,
  CONTACT_MAPS_LINK,
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
    languages: {
      "en-LK": "/",
      en: "/",
    },
  },
  title: {
    default:
      "Rizz & Slay (RANDS) | #1 Content Studio & TikTok Marketing Agency in Sri Lanka",
    template: "%s | Rizz & Slay",
  },
  description:
    "Rizz & Slay (RANDS) is Sri Lanka's leading culture-first content studio and TikTok marketing agency in Colombo. We specialize in short-form video production, viral social media campaigns, influencer marketing, and performance creative for brands, creators, and agencies.",
  keywords: [
    "Rizz and Slay",
    "RANDS",
    "rands.lk",
    "content studio Sri Lanka",
    "TikTok marketing agency Sri Lanka",
    "short-form video production Sri Lanka",
    "social media marketing agency Colombo",
    "influencer marketing Sri Lanka",
    "UGC content creation Sri Lanka",
    "viral marketing agency",
    "Gen Z marketing Sri Lanka",
    "video production Colombo",
    "creative agency Sri Lanka",
    "content marketing Sri Lanka",
    "digital marketing agency Colombo",
    "TikTok agency",
    "short form content",
    "social media agency Sri Lanka",
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
    title:
      "Rizz & Slay (RANDS) | #1 Content Studio & TikTok Marketing Agency in Sri Lanka",
    description:
      "Sri Lanka's leading culture-first content studio. Short-form video production, TikTok marketing, viral campaigns, and influencer marketing from Colombo to the world.",
    url: SITE_URL,
    siteName: "Rizz & Slay",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Rizz & Slay - Culture First Content Studio in Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rizz & Slay (RANDS) | #1 Content Studio & TikTok Marketing Agency in Sri Lanka",
    description:
      "Sri Lanka's leading culture-first content studio. Short-form video, TikTok marketing, viral campaigns & influencer marketing.",
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
  other: {
    "geo.region": "LK-1",
    "geo.placename": "Colombo",
    "geo.position": "6.9013;79.8625",
    ICBM: "6.9013, 79.8625",
  },
};

export const viewport: Viewport = {
  themeColor: "#CCFF00",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Rizz & Slay",
  alternateName: "RANDS",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  description:
    "Sri Lanka's leading culture-first content studio and TikTok marketing agency. Short-form video production, viral campaigns, influencer marketing, and performance creative from Colombo.",
  foundingDate: "2020",
  telephone: CONTACT_PHONE_E164,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_ADDRESS,
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    postalCode: "00800",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.9013,
    longitude: 79.8625,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE_E164,
      email: CONTACT_EMAIL,
      contactType: "customer service",
      availableLanguage: ["English", "Sinhala"],
      areaServed: ["LK", "Global"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/rands-lk/",
    "https://www.facebook.com/rands.lk/",
    "https://www.instagram.com/rands.lk/",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Codezela Technologies",
    url: "https://codezela.com",
  },
  areaServed: [
    { "@type": "Country", name: "Sri Lanka" },
    { "@type": "Place", name: "Global" },
  ],
  knowsAbout: [
    "Content Production",
    "TikTok Marketing",
    "Social Media Marketing",
    "Short-form Video Production",
    "Influencer Marketing",
    "UGC Content Creation",
    "Performance Creative",
    "Viral Marketing Campaigns",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Rizz & Slay",
  alternateName: "RANDS",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Rizz & Slay",
  alternateName: "RANDS",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  description:
    "Culture-first content studio and TikTok marketing agency in Colombo, Sri Lanka. Short-form video production, social media marketing, influencer campaigns, and performance creative.",
  telephone: CONTACT_PHONE_DISPLAY,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_ADDRESS,
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    postalCode: "00800",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.9013,
    longitude: 79.8625,
  },
  hasMap: CONTACT_MAPS_LINK,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  areaServed: [
    { "@type": "Country", name: "Sri Lanka" },
    { "@type": "Place", name: "Global" },
  ],
  serviceType: [
    "Content Studio",
    "TikTok Marketing Agency",
    "Short-form Video Production",
    "Social Media Marketing",
    "Influencer Marketing",
    "UGC Content Creation",
    "Performance Creative",
  ],
  sameAs: [
    "https://www.linkedin.com/company/rands-lk/",
    "https://www.facebook.com/rands.lk/",
    "https://www.instagram.com/rands.lk/",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
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
