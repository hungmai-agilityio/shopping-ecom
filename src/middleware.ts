import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Constants
import { END_POINT, KEY } from '@/constants';

export const middleware = (request: NextRequest) => {
  const userCookie = request.cookies.get(KEY.USER);

  if (userCookie && request.nextUrl.pathname === END_POINT.SIGN_IN) {
    return NextResponse.redirect(new URL(END_POINT.HOME, request.url));
  }

  if (
    !userCookie &&
    ![END_POINT.SIGN_IN, END_POINT.HOME].includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL(END_POINT.SIGN_IN, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/sign-in', '/wishlist', '/comment', '/profiles', '/cart', '/checkout']
};
