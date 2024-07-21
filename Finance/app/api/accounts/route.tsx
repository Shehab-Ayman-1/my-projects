import { NextRequest, NextResponse } from "next/server";

import { DBConnection } from "@/server/configs";
import { Accounts } from "@/server/models";
import { getAuth } from "@clerk/nextjs/server";
import { schema } from "./schema";

const json = (data: any, status: number = 200) => NextResponse.json(data, { status });

export const GET = async (req: NextRequest) => {
    await DBConnection();

    try {
        const { userId } = getAuth(req);
        if (!userId) return json("Unauthorized", 401);

        const accounts = await Accounts.find();
        return json(accounts);
    } catch (error: any) {
        return json(error.message, 400);
    }
};

export const POST = async (req: NextRequest) => {
    await DBConnection();

    try {
        const { userId } = getAuth(req);
        if (!userId) return json("Unauthorized", 401);

        const body = await req.json();
        const data = schema.parse(body);

        const account = await Accounts.create({ ...data, userId, name: data.name });
        return json(account);
    } catch (error: any) {
        return json(error.message, 400);
    }
};
