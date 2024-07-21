import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AccountsType } from "@/server/models";

import { toast } from "sonner";

type ResponseType = AccountsType;
type RequestType = {
    json: ResponseType;
};

const createAccount = async (body: AccountsType) => {
    try {
        const options = { method: "POST", body: JSON.stringify(body) };
        const response = await fetch("/api/accounts", options);

        if (!response?.ok) throw new Error("Failed To Create Account.");
        const data = await response.json();

        return data;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

export const useCreateAccount = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<ResponseType, Error, RequestType["json"]>({
        mutationFn: createAccount,
        onSuccess: () => {
            toast.success("Account Created");
            queryClient.invalidateQueries({ queryKey: ["accounts"] });
        },
        onError: () => {
            toast.error("Failed To Create Account");
        },
    });

    return mutation;
};
