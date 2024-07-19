import { Context } from "hono";
import { Accounts } from "@/server/models";

export const getAccounts = async (c: Context) => {
    try {
        return c.json({
            dataType: typeof Accounts,
            isFnDefined: typeof Accounts.find,
        });
    } catch (error) {
        return c.json({ message: (error as any).message }, 400);
    }
};

export const getAccount = async (c: Context) => {
    return c.json({ message: "GET ONE" });
};

export const updateAccount = async (c: Context) => {
    return c.json({ message: "UPDATED" });
};

export const deleteAccount = async (c: Context) => {
    return c.json({ message: "DELETED" });
};
