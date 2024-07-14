import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// If No User Authonticated -> Redirect To Signin page
const routes = ["/"];
const isProtectedRoute = createRouteMatcher(routes);

export default clerkMiddleware((auth, req) => {
	if (isProtectedRoute(req)) auth().protect();

	return NextResponse.next();
});

export const config = { matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"] };
