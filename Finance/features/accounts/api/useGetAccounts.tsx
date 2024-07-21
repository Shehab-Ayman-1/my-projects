import { AccountsType } from "@/server/models";

import { useQuery } from "@tanstack/react-query";

const getAccounts = async () => {
    try {
        const response = await fetch("/api/accounts");
        const data: AccountsType[] = await response.json();

        if (!response.ok) throw new Error("Failed To Fetch Accounts");
        return data;
    } catch (error) {
        const reason = error as any;
        throw new Error(reason.message);
    }
};

export const useGetAccounts = () => {
    const query = useQuery({ queryKey: ["accounts"], queryFn: getAccounts });
    return query;
};
