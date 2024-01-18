import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/checkout',
};

export default function middleware(request: NextRequest) {
  const userDataCookie = request.cookies.get('blume_user_data');
  const loginURL = new URL('/login', request.url);

  if (!userDataCookie) {
    return NextResponse.redirect(loginURL);
  }

  const userData = JSON.parse(userDataCookie.value);
  const token = userData.token;

  if (!token) {
    return NextResponse.redirect(loginURL);
  }
}
