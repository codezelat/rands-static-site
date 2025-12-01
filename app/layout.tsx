import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";

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
  title: "Rizz & Slay | Culture First Content Studio",
  description:
    "Rizz and Slayy is the culture first content and marketing studio that makes brands look like they belong on the For You page.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Rizz & Slay Logo",
      },
    ],
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
      >
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
