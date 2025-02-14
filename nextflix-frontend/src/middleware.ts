import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./lib/i18n/i18n-config";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    if (pathnameIsMissingLocale) {
        console.log("pathname ", pathname);

        return NextResponse.redirect(
            new URL(
                `/${i18n.defaultLocale}${pathname.startsWith("/") ? "" : "/"}${pathname == '/' ? '/home' : pathname}`,
                request.url,
            ),
        );
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico|vector).*)"],
};