// import { NextRequest, NextResponse } from 'next/server';

// const PUBLIC_FILE = /\.(.*)$/;

// export async function middleware(req: NextRequest) {
//   if (
//     req.nextUrl.pathname.startsWith('/_next') ||
//     req.nextUrl.pathname.includes('/api/') ||
//     PUBLIC_FILE.test(req.nextUrl.pathname)
//   ) {
//     return;
//   }

//   if (req.nextUrl.locale === 'default') {
//     const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en';

//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`,
//         req.url,
//       ),
//     );
//   }
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
//   ],
// };

export default {};
