import part1 from "@/data/corpai-cover/part1";
import part2 from "@/data/corpai-cover/part2";
import part3 from "@/data/corpai-cover/part3";
import part4 from "@/data/corpai-cover/part4";
import part5 from "@/data/corpai-cover/part5";
import part6 from "@/data/corpai-cover/part6";

const imageBase64 = part1 + part2 + part3 + part4 + part5 + part6;
const imageBytes = Buffer.from(imageBase64, "base64");

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  return new Response(imageBytes, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
