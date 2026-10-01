import chunk0 from "./chunk0";
import chunk1 from "./chunk1";
import chunk2 from "./chunk2";

export const runtime = "nodejs";
export const dynamic = "force-static";

export function GET() {
  const base64 = [chunk0.replace(/;$/, ""), chunk1, chunk2].join("");
  const image = Buffer.from(base64, "base64");

  return new Response(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
