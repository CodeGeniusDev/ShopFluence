// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// // Define protected routes that require authentication
// const isProtectedRoute = createRouteMatcher([
//   '/dashboard(.*)',
//   '/profile(.*)',
//   '/checkout(.*)',
// ]);

// // Public routes that don't require authentication
// const publicRoutes = [
//   '/',
//   '/sign-in(.*)',
//   '/sign-up(.*)',
//   '/api/webhook(.*)',
// ];

// export default clerkMiddleware(async (auth, req) => {
//   const { userId } = await auth();
//   const { pathname } = req.nextUrl;

//   // Skip middleware for public routes
//   if (publicRoutes.some(route => 
//     pathname === route || 
//     (route.endsWith('(.*)') && new RegExp(`^${route.replace('(.*)', '.*')}$`).test(pathname))
//   )) {
//     return NextResponse.next();
//   }

//   // Handle protected routes
//   if (isProtectedRoute(req)) {
//     if (!userId) {
//       // User is not signed in, redirect to sign-in
//       const signInUrl = new URL('/sign-in', req.url);
//       signInUrl.searchParams.set('redirect_url', req.url);
//       return NextResponse.redirect(signInUrl);
//     }
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     // Match all request paths except for the ones starting with:
//     // - _next/ (Next.js internals)
//     // - api/ (API routes)
//     // - _vercel (Vercel internals)
//     // - static (static files)
//     // - public folder
//     '/((?!_next|_vercel|api|static|public|_next/static|_next/image|favicon.ico|.*\..*).*)',
//     // Include API routes
//     '/(api|trpc)(.*)',
//   ],
// };