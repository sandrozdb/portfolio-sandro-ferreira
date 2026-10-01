import part0 from "./part0";
import part1 from "./part1";
import part2 from "./part2";
import part3 from "./part3";
import part4 from "./part4";
import part5 from "./part5";

export const runtime = "nodejs";
export const dynamic = "force-static";

export function GET() {
  const base64 = [part0, part1, part2, part3, part4, part5].join("");
  const image = Buffer.from(base64, "base64");

  return new Response(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
