import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const uid = req.cookies.get('uid');

  if(!uid) {
    if(pathname === '/login' || pathname === '/join') return NextResponse.next();
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (pathname === '/login' || pathname === '/join') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\\..*|favicon\\.ico).*)']
};
