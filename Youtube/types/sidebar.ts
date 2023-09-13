import type { Dispatch, SetStateAction } from "react";

export type SelectedCatagory = {
	selected: string;
	setSelected: Dispatch<SetStateAction<string>>;
};

export type OpenCloseSidebar = {
	open?: boolean;
	setOpen?: Dispatch<SetStateAction<boolean>>;
	noSidebar?: any;
};
