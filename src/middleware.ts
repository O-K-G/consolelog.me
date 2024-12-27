import createIntlMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";

const intlMiddleware = createIntlMiddleware({
  locales: ["en", "he"],
  defaultLocale: "en",
});

// const ALLOWED_DOMAINS =
//   "*.vercel.live vercel.live *.vercel.com vercel.com *.pusher.com pusher.com wss://*.pusher.com wss://pusher.com";

export async function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request);

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const isDevEnv = process.env.NODE_ENV === "development";
  // const isPrevEnv = process.env?.VERCEL_ENV === "preview";

  const devEnv = isDevEnv ? "'unsafe-inline'" : `'nonce-${nonce}'`;

  // const prevEnv = isPrevEnv
  //   ? `${ALLOWED_DOMAINS} 'unsafe-inline'`
  //   : `'nonce-${nonce}'`;

  // const noNoncePrevEnv = isPrevEnv ? `${ALLOWED_DOMAINS} 'unsafe-inline'` : "";

  /** Backwards compatibility at script-src: 'unsafe inline' is ignored if there's a nonce or hash in CSP2+.
   * It's also ignored in CSP3 if there's 'strict-dynamic'.
   * http: and https: are also ignored in CSP3+ if there's 'strict-dynamic'. */

  const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'nonce-${nonce}' http: https: 'strict-dynamic';
  style-src 'self' ${devEnv};
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

  // require-trusted-types-for 'script' // TODO

  // const cspHeader = `
  // default-src 'self';
  // script-src 'self' 'unsafe-inline' http: https: 'nonce-${nonce}' ${
  // isPrevEnv ? '' : 'strict-dynamic'
  // } ${devEnv} ${noNoncePrevEnv};
  // style-src 'self' ${prevEnv};
  // img-src 'self' blob: data: ${noNoncePrevEnv};
  // font-src 'self';
  // connect-src 'self' ${prevEnv};
  // frame-src 'self' ${prevEnv};
  // object-src 'none';
  // base-uri 'self';
  // form-action 'self';
  // frame-ancestors 'none';
  // ${!isDevEnv ? 'upgrade-insecure-requests;' : ''}
  // `;

  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const response = intlResponse || NextResponse.next();
  response.headers.set("x-nonce", nonce);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "no-referrer");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  return response;
}

export const config = {
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|images|favicon.ico|icon.ico|apple-icon.png|manifest.webmanifest|manifest.json).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
