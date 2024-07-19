import { Hono } from "hono";
import { handle } from "hono/vercel";

import { getAccount, getAccounts } from "./controllers";
import { updateAccount, deleteAccount } from "./controllers";

export const accounts = new Hono()
    .get("/", getAccounts)
    .get("/:id", getAccount)
    .put("/:id", updateAccount)
    .delete("/:id", deleteAccount);

export const GET = handle(accounts);
