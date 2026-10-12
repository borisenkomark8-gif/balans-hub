import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, localeCookie, locales, type Locale } from "./lib/i18n/config";

const PUBLIC_FILE = /\.[^/]+$/;

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(localeCookie)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language") ?? "";
  const preferred = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .find((tag) => tag === "en" || tag?.startsWith("en-") || tag === "ru" || tag?.startsWith("ru-"));

  if (preferred?.startsWith("en")) return "en";
  if (preferred?.startsWith("ru")) return "ru";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/balans/") && pathname.includes(".") ||
    pathname === "/icon" ||
    pathname === "/apple-icon" ||
    pathname === "/opengraph-image" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1] ?? "";
  if (isLocale(segment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-balans-locale", segment);
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.cookies.set(localeCookie, segment, { path: "/", sameSite: "lax", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set(localeCookie, locale, { path: "/", sameSite: "lax", maxAge: 60 * 60 * 24 * 365 });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
