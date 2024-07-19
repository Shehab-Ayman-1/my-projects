"use client";
import { useMedia } from "react-use";
import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
import { Button } from "@/ui/button";

import { NavList } from "./navList";

type NavigationProps = {};

export const Navigation = ({}: NavigationProps) => {
    const isMobile = useMedia("(max-width: 768px)", false);

    if (!isMobile)
        return (
            <aside className="hidden items-center gap-2 overflow-auto md:flex">
                <NavList isMobile={isMobile} />
            </aside>
        );

    return (
        <Sheet modal={false}>
            <SheetTrigger>
                <Button size="icon" variant="ghost">
                    <MenuIcon className="" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="px-2">
                <NavList isMobile={isMobile} />
            </SheetContent>
        </Sheet>
    );
};
