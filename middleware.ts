import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./utils/auth-session";

const publickRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/",
  "/new-passpword",
  "/otp",
];

const loginUserForbiddenUser = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/new-passpword",
];

export default async function middleware(req: NextRequest) {
  const session = await getSession();
  const { pathname } = req.nextUrl;

  if (session.isLoggedIn && loginUserForbiddenUser.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url).toString());
  }

  if (!session.isLoggedIn && publickRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (!session.isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url).toString());
  }

  if (session.twoFA && !session.twoFAVerified && pathname !== "/otp") {
    return NextResponse.redirect(new URL("/otp", req.url).toString());
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
