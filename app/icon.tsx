import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://github.com/arshnoorkirmani.png?size=64"
          width={32}
          height={32}
          alt=""
          style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Amber dot */}
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#f97316",
            border: "2px solid white",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
