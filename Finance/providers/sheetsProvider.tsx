import { Fragment } from "react";

import { CreateAccountSheet } from "@/features/accounts/components/createSheet";
import { EditAccountSheet } from "@/features/accounts/components/editSheet";
import { CreateCategorySheet } from "@/features/categories/components/createSheet";
import { EditCategorySheet } from "@/features/categories/components/editSheet";

export const SheetsProvider = () => {
    return (
        <Fragment>
            <CreateAccountSheet />
            <EditAccountSheet />
            <CreateCategorySheet />
            <EditCategorySheet />
        </Fragment>
    );
};
