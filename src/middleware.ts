import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'he'],
  defaultLocale: 'en',
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico|icon.ico|manifest.webmanifest).*)',
  ],
};
