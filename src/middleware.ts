import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const loginCookie = req.cookies.get('login'); 

  // Check if the login status is false or undefined
  if (!loginCookie || loginCookie.value === 'false') {
    // Redirect to the login page if not logged in
    return NextResponse.redirect(new URL('/signIn', req.url));
  }

  // Allow the user to proceed if logged in
  return NextResponse.next();
}

// Apply middleware only to the /cart path
export const config = {
  matcher: ['/Cart','/BuyProductPage','/orderDetails'],
};
