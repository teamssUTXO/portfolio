import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";
export const alt = `${profile.alias} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "assets/logo.png"), "base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#000",
          color: "#f4f4f4",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo}`} width={96} height={96} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 160, letterSpacing: -6, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ fontSize: 48, color: "#858585", marginTop: 8 }}>{`aka ${profile.alias}`}</div>
          <div style={{ fontSize: 36, color: "#a3a3a3", marginTop: 24 }}>
            {`${profile.role} · ${profile.location}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
