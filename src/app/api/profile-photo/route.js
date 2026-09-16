import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const source = path.join(process.cwd(), "public", "profile", "sandro-ferreira-elo-small.webp.b64");
  const base64 = fs.readFileSync(source, "utf8").trim();
  const image = Buffer.from(base64, "base64");

  return new Response(image, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
