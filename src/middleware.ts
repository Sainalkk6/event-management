import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isAuthenticatedAdmin = request.cookies.get("adminCode") !== undefined;
    const isAuthenticated = request.cookies.get("authenticatedUser") !== undefined;
    const isSuperAdmin = request.cookies.get("superAdmin") !== undefined;

    if(!isSuperAdmin && path === "/admin/auth/signup") return NextResponse.redirect(new URL("/admin/bookago/dashboard",request.url))

    if (!isAuthenticatedAdmin && path.startsWith("/admin") && path !== "/admin/auth/login") {
        return NextResponse.redirect(new URL("/admin/auth/login", request.url));
    }

    if (isAuthenticated && (path === "/bookago/login" || path === "/bookago/signup")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (!isAuthenticated && path === "/bookago/my-bookings") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/bookago/:path*", "/:path*"],
};
