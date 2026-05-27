import { type NextRequest, NextResponse } from "next/server";

import { defaultLocale, hasLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = pathname
    .split("/")
    .some((segment, index) => index === 1 && hasLocale(segment));

  if (pathnameHasLocale) {
    return;
  }

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
