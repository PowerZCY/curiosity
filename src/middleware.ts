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
    // Skip Next.js internals and all static files, unless found in search params, skip api and trpc
    "/((?!api|trpc|_next|[^?]*.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
