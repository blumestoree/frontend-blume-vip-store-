import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/checkout',
};

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('blume_user_id')?.value;
  const loginURL = new URL('/login', request.url);

  if (!token) {
    return NextResponse.redirect(loginURL);
  }
}
