import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
  userId?: string;
  isLoggedIn?: boolean;
  twoFA?: boolean;
  twoFAVerified?: boolean;
  role?: string;
}

export const defaultSession: SessionData = {
  userId: undefined,
  isLoggedIn: false,
  twoFA: false,
  twoFAVerified: false,
  role: "user",
};

if (!process.env.SESSION_SECRET) {
  throw new Error("Missing SESSION_SECRET environment variable");
}

if (process.env.SESSION_SECRET.length < 32) {
  throw new Error("SESSION_SECRET must be at least 32 characters long");
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "auth-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax", // CSRF koruması için önemli
    maxAge: 60 * 60 * 24 * 7, // 7 gün (saniye cinsinden)
    path: "/",
  },
  ttl: 60 * 60 * 24 * 7, // 7 gün (sunucu tarafında)
};

export async function getSession() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions,
  );

  if (!session.userId && !session.isLoggedIn) {
    session.userId = defaultSession.userId;
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.twoFA = defaultSession.twoFA;
    session.twoFAVerified = defaultSession.twoFAVerified;
    session.role = defaultSession.role;
  }

  return session;
}
