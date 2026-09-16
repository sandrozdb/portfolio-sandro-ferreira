import chunk0 from "./chunk0";
import chunk1 from "./chunk1";
import chunk2 from "./chunk2";
import chunk3 from "./chunk3";
import chunk4 from "./chunk4";
import chunk5 from "./chunk5";
import chunk6 from "./chunk6";
import chunk7 from "./chunk7";
import chunk8 from "./chunk8";

export const runtime = "nodejs";
export const dynamic = "force-static";

export function GET() {
  const base64 = [chunk0, chunk1, chunk2, chunk3, chunk4, chunk5, chunk6, chunk7, chunk8].join("");
  const image = Buffer.from(base64, "base64");

  return new Response(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
