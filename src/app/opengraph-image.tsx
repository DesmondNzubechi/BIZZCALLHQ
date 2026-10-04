import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt =
  "Bizcallhq. Amazon FBA, co-packing, warehousing, fulfillment, and logistics.";
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
          background: "#1b4a46",
          color: "#f4f3ef",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.04em" }}>
          Amazon FBA · Co-packing · Fulfillment · Logistics
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 600, lineHeight: 1 }}>
            {site.name}
          </div>
          <div
            style={{
              width: 72,
              height: 4,
              background: "#f4f3ef",
            }}
          />
          <div style={{ fontSize: 32, lineHeight: 1.4, maxWidth: 820 }}>
            Amazon FBA, co-packing, warehousing, fulfillment, and logistics.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
