import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          gap: 3,
          padding: "7px 6px 6px",
          borderRadius: 8,
        }}
      >
        <div style={{ width: 4, height: 10, background: "#1174e6", borderRadius: 99, transform: "rotate(18deg)" }} />
        <div style={{ width: 4, height: 16, background: "#21b8d6", borderRadius: 99, transform: "rotate(18deg)" }} />
        <div style={{ width: 4, height: 20, background: "#2ac18f", borderRadius: 99, transform: "rotate(18deg)" }} />
      </div>
    ),
    { ...size },
  );
}
