import part1 from "@/data/corpai-cover/part1";
import part2 from "@/data/corpai-cover/part2";
import part3 from "@/data/corpai-cover/part3";
import part4 from "@/data/corpai-cover/part4";
import part5 from "@/data/corpai-cover/part5";
import part6a from "@/data/corpai-cover/part6a";
import part6b from "@/data/corpai-cover/part6b";
import part6c from "@/data/corpai-cover/part6c";

export const runtime = "nodejs";

export async function GET() {
  const base64 = part1 + part2 + part3 + part4 + part5 + part6a + part6b + part6c;
  const image = Uint8Array.from(Buffer.from(base64, "base64"));

  return new Response(image, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
