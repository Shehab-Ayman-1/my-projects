import { NextResponse } from "next/server";

import { DBConnection } from "@/server/configs";
import { Accounts } from "@/server/models";

export const GET = async () => {
    try {
        await DBConnection();
        return NextResponse.json(await Accounts.find());
    } catch (error) {
        console.log((error as any).message);
    }
};
