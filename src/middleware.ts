import { NextRequest, NextResponse } from "next/server";
import { appConfig } from "@/lib/appConfig";
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: appConfig.i18n.locales,
  defaultLocale: appConfig.i18n.defaultLocale,
  localePrefix: "always",
  localeDetection: false
});

export function middleware(request: NextRequest) {
  // 处理根路径到默认语言的永久重定向
  if (request.nextUrl.pathname === '/') {
    const defaultLocale = appConfig.i18n.defaultLocale;
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 301);
  }

  // 处理尾部斜杠的重定向
  if (request.nextUrl.pathname.length > 1 && request.nextUrl.pathname.endsWith('/')) {
    const newUrl = new URL(request.nextUrl.pathname.slice(0, -1), request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Skip Next.js internals, static files, sitemap, robots, 以及所有.txt文件，除非在search params中，skip api 和 trpc
    '/((?!api|trpc|_next|[^?]*.(?:html?|txt|xml|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|pdf|mp3|mp4|docx?|xlsx?|zip|webmanifest|otf)).*)',
  ],
};
