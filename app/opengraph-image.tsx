import { ImageResponse } from "next/og";
import { SITE_URL } from "@/utils/site";

export const runtime = "edge";

export const alt =
  "Rizz & Slay - Culture First Content Studio & TikTok Marketing Agency in Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          opacity: 0.06,
          backgroundImage:
            "linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg, #f5f5f5 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Accent stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: "linear-gradient(90deg, #ccff00, #ff00ff, #ff6600)",
          display: "flex",
        }}
      />

      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${SITE_URL}/images/logo.png`}
        alt=""
        width={480}
        height={300}
        style={{ objectFit: "contain" }}
      />

      {/* Tagline */}
      <div
        style={{
          display: "flex",
          marginTop: 32,
          fontSize: 28,
          fontWeight: 700,
          color: "#ccff00",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Culture First Content Studio
      </div>

      {/* URL */}
      <div
        style={{
          display: "flex",
          marginTop: 16,
          fontSize: 20,
          color: "#f5f5f5",
          opacity: 0.6,
          letterSpacing: "0.05em",
        }}
      >
        rands.lk
      </div>

      {/* Bottom accent stripe */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: "linear-gradient(90deg, #ff6600, #ff00ff, #ccff00)",
          display: "flex",
        }}
      />
    </div>,
    { ...size },
  );
}
