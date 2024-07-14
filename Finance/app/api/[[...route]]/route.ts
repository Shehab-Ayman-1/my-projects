import { Hono } from "hono";
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", clerkMiddleware(), (c) => {
	const auth = getAuth(c);
	if (!auth?.userId) return c.json("You Are UnAuthorized", 400);

	return c.json({ auth });
});

export const GET = handle(app);
export const POST = handle(app);
