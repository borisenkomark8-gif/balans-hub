import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "BALANS Hub";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#081b2e",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#f7fbff",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, height: 88 }}>
          <div style={{ width: 16, height: 44, background: "#1174e6", borderRadius: 99, transform: "rotate(18deg)" }} />
          <div style={{ width: 16, height: 70, background: "#21b8d6", borderRadius: 99, transform: "rotate(18deg)" }} />
          <div style={{ width: 16, height: 88, background: "#2ac18f", borderRadius: 99, transform: "rotate(18deg)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: 8, lineHeight: 1 }}>BALANS</div>
          <div style={{ fontSize: 36, color: "#9eb1c1", letterSpacing: 1 }}>Hub</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
