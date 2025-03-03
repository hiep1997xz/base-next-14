import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { cookieName, fallbackLng, languages } from '@/utils/i18n/settting';
import acceptLanguage from 'accept-language';
// import { cookies } from 'next/headers';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let lng;
  if (request.cookies.has(cookieName)) {
    lng = request?.cookies.get(cookieName)?.value;
  }
  if (!lng) lng = acceptLanguage.get(request.headers.get('Accept-Language'));

  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !request.nextUrl.pathname.startsWith('/_next') &&
    !request.nextUrl.pathname.startsWith('/imgs') &&
    !request.nextUrl.pathname?.includes('/robots.txt') &&
    !request.nextUrl.pathname?.includes('/sitemap.xml')
  ) {
    const query = request.nextUrl.search;
    return NextResponse.redirect(
      new URL(`/${lng}${request.nextUrl.pathname}${query}`, request.url)
    );
  }
  const res = NextResponse.next();
  if (request.headers.has('referer')) {
    const refererUrl = new URL(request.headers.get('referer') as string);
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }
  // const cookieStore = cookies();
  // const access_token = cookieStore.get('token');
  // if (!access_token && request.nextUrl.pathname !== `/${lng}/login`) {
  //   return NextResponse.redirect(new URL(`/${lng}/login`, request.url));
  // }

  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/public|_next/image|favicon.ico).*)'
  ]
};
