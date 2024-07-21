"use client";
import type { FormValues } from "./schema";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";

import { Sheet, SheetHeader, SheetContent, SheetTitle, SheetDescription } from "@/ui/sheet";
import { useNewAccount } from "../hooks/useNewAccount";
import { useCreateAccount } from "../api/useCreateAccount";
import { AccountForm } from "./acountForm";

export const NewAccountSheet = () => {
    const { userId } = useAuth();
    const { isOpen, onClose } = useNewAccount();
    const { mutate } = useCreateAccount();

    const onSubmit = ({ name }: FormValues) => {
        if (!userId) return toast.error("Unauthorized");
        mutate({ name, userId }, { onSuccess: onClose });
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>New Account</SheetTitle>
                    <SheetDescription>Create A New Account To Track Your Transactions.</SheetDescription>
                </SheetHeader>

                <AccountForm onSubmit={onSubmit} defaultValues={{ name: "" }} />
            </SheetContent>
        </Sheet>
    );
};
