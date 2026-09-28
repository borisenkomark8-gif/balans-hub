import { readFileSync } from "node:fs";
import path from "node:path";

const siteUrl = "https://balans-hub.vercel.app";

function withLaunchMeta(html: string, name: string) {
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "BALANS";
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const canonical = `${siteUrl}/balans/${name}`;
  const meta = [
    `<link rel="icon" href="/icon" type="image/png" />`,
    `<link rel="apple-touch-icon" href="/apple-icon" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:site_name" content="BALANS Hub" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="ru_RU" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${siteUrl}/opengraph-image" />`,
  ].join("\n    ");

  return html.replace("<head>", `<head>\n    ${meta}`);
}

export function serveBalansPage(name: string) {
  const html = withLaunchMeta(
    readFileSync(path.join(process.cwd(), "content", "balans", `${name}.html`), "utf8"),
    name,
  );

  return function GET() {
    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  };
}
