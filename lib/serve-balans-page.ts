import { readFileSync } from "node:fs";
import path from "node:path";

export function serveBalansPage(name: string) {
  const html = readFileSync(path.join(process.cwd(), "content", "balans", `${name}.html`), "utf8");

  return function GET() {
    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  };
}
