import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'he'],
  defaultLocale: 'en',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(he|en)/:path*'],
};
