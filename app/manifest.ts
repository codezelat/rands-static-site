import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rizz & Slay",
    short_name: "RANDS",
    description:
      "Culture-first content studio for short-form campaigns, social growth, and performance creative.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F5F5",
    theme_color: "#CCFF00",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    scope: "/",
    id: SITE_URL,
  };
}
