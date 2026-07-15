import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type OgImageOptions = {
  title: string;
  subtitle?: string;
};

export function createOgImage({ title, subtitle }: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          backgroundColor: "#FBF9F5",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#C4A88A",
          }}
        />
        <p
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#5A544C",
            margin: 0,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {SITE_NAME} · Saint-Just-Saint-Rambert
        </p>
        <p
          style={{
            fontSize: 64,
            lineHeight: 1.05,
            color: "#1C1A17",
            margin: "24px 0 0",
            maxWidth: 900,
          }}
        >
          {title}
        </p>
        {subtitle && (
          <p
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "#5A544C",
              margin: "20px 0 0",
              maxWidth: 800,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    ),
    { ...size },
  );
}
