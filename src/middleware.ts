import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

function detectLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0].split("-")[0].toLowerCase());

  for (const candidate of preferred) {
    if (isLocale(candidate)) return candidate;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocale(request.headers.get("accept-language"));
  const suffix = pathname === "/" ? "" : pathname;
  const target = new URL(`/${locale}${suffix}${search}`, request.url);

  return NextResponse.redirect(target);
}

export const config = {
  matcher: ["/", "/((?!api|_next|images|.*\\..*).*)"],
};
