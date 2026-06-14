import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export function proxy(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/clientauth/login" ||
    path === "/clientauth/register";

  const isAdminPath = path.startsWith("/admin");

  const token = request.cookies.get("token")?.value;

  let role = null;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      role = decoded.role;
    } catch {
      role = null;
    }
  }

  // Not logged in and trying to access admin
  if (!token && isAdminPath) {
    return NextResponse.redirect(
      new URL("/clientauth/login", request.url)
    );
  }

  // Logged in user trying to access login/register
  if (token && isPublicPath) {
    if (role === "admin") {
      return NextResponse.redirect(
        new URL("/admin", request.url)
      );
    }

    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  // Normal user trying to access admin
  if (role === "user" && isAdminPath) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/",
    "/clientauth/login",
    "/clientauth/register",
    "/admin/:path*",
  ],
};
