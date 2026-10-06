import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The link preview shown when the site is shared on LinkedIn, Slack, iMessage, and so on. */
export default function OpengraphImage() {
  const ink = "#1a1a2e";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px 90px",
          background: "#f2f7ff",
          backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent 37px, rgba(106,165,255,0.25) 37px, rgba(106,165,255,0.25) 39px)",
          color: ink,
          border: `14px solid ${ink}`,
        }}
      >
        <div style={{ display: "flex", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              background: "#ffd447",
              border: `4px solid ${ink}`,
              borderRadius: 999,
              padding: "8px 22px",
              boxShadow: `4px 4px 0 ${ink}`,
            }}
          >
            {site.role.toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              background: "#ddf7ec",
              border: `4px solid ${ink}`,
              borderRadius: 999,
              padding: "8px 22px",
              boxShadow: `4px 4px 0 ${ink}`,
            }}
          >
            DALLAS, TX
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 104, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 44, fontWeight: 600, lineHeight: 1.2, maxWidth: 980 }}>
          I build AI products that actually ship: RAG systems, agents, and mobile apps.
        </div>
        <div style={{ display: "flex", marginTop: "auto", fontSize: 28, fontWeight: 600, color: "#4a4a68" }}>
          musabsaraswat.com
        </div>
      </div>
    ),
    size
  );
}
