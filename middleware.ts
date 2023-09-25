import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('..mw1..');
  return NextResponse.redirect(new URL('/home', request.url));
}

export const config = {
  matcher: '/(dashboard)/notice',
};
