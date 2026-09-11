import { ImageResponse } from "next/og";

export const alt = "Get Your First AI Employee Working. It drafts. You hit send.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3F1EC",
          color: "#171614",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#5C5752",
          }}
        >
          The AI Founder&apos;s Vault
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            Get Your First AI Employee Working
          </div>
          <div style={{ fontSize: 32, color: "#5C5752" }}>
            It drafts. You hit send.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
