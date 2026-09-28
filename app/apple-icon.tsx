import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#081b2e",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 14,
          padding: "46px 40px 42px",
        }}
      >
        <div style={{ width: 18, height: 52, background: "#1174e6", borderRadius: 99, transform: "rotate(18deg)" }} />
        <div style={{ width: 18, height: 84, background: "#21b8d6", borderRadius: 99, transform: "rotate(18deg)" }} />
        <div style={{ width: 18, height: 108, background: "#2ac18f", borderRadius: 99, transform: "rotate(18deg)" }} />
      </div>
    ),
    { ...size },
  );
}
