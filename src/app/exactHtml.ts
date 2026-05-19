import { readFileSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-static";

export function exactHtmlResponse(fileName: string) {
  const html = readFileSync(join(process.cwd(), "src", "exact-html", fileName), "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}
