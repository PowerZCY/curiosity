import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  // 处理尾部斜杠的重定向
  if (req.nextUrl.pathname.length > 1 && req.nextUrl.pathname.endsWith("/")) {
    const newUrl = new URL(req.nextUrl.pathname.slice(0, -1), req.url);
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals, static files, sitemap, robots, 以及所有.txt文件，除非在search params中，skip api 和 trpc
    '/((?!api|trpc|_next|[^?]*.(?:html?|txt|xml|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|pdf|mp3|mp4|docx?|xlsx?|zip|webmanifest|otf)).*)',
  ],
};
