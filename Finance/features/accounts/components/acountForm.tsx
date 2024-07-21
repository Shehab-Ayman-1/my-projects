import { z } from "zod";
import { useForm } from "react-hook-form";
import { Trash2Icon, TrashIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

import { schema, FormValues } from "./schema";
import { Label } from "@/ui/label";

type AccountFormProps = {
    _id?: string;
    disabled?: boolean;
    defaultValues?: FormValues;
    onSubmit: (value: FormValues) => void;
    onDelete?: () => void;
};

export const AccountForm = ({ _id, defaultValues, disabled, onSubmit, onDelete }: AccountFormProps) => {
    const { register, setValue, formState, handleSubmit } = useForm<FormValues>({
        defaultValues,
        resolver: zodResolver(schema),
    });

    const options = {
        name: {
            onChange: (event: any) => setValue("name", event.target.value),
        },
    };

    return (
        <form className="space-y-4 pt-4" onSubmit={handleSubmit(onSubmit)}>
            {/* <Input {...register("name")} /> */}
            <div className="">
                <Label htmlFor="name" className="font-bold">
                    Name
                </Label>
                <Input {...register("name", options.name)} id="name" placeholder="E.G. Cash, Bank, Credit Card" />
            </div>
            <div className="buttons">
                <Button type="submit" size="lg" className="w-full" disabled={disabled}>
                    {_id ? "Save Changes" : "Create Account"}
                </Button>

                {!!_id && (
                    <Button type="button" size="lg" variant="outline" className="mt-2 w-full hover:bg-red-50">
                        <Trash2Icon className="mr-2 size-4" />
                        Delete Account
                    </Button>
                )}
            </div>
        </form>
    );
};
