import { Fragment } from "react";

import { NewAccountSheet } from "@/features/accounts/components/newAccountSheet";

export const SheetsProvider = () => {
    return (
        <Fragment>
            <NewAccountSheet />
        </Fragment>
    );
};
