import { exactHtmlResponse } from "../exactHtml";

export const dynamic = "force-static";

export function GET() {
  return exactHtmlResponse("site-nash-edge.html");
}
