"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { useMobileSidebarStore } from "@/hooks/useMobileSidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

const MobileSidebar = () => {
   const [isMounted, setIsMounted] = useState(false);
   const pathname = usePathname();

   const isOpen = useMobileSidebarStore((state) => state.isOpen);
   const onOpen = useMobileSidebarStore((state) => state.onOpen);
   const onClose = useMobileSidebarStore((state) => state.onClose);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   useEffect(() => {
      onClose();
   }, [pathname, onClose]);

   if (!isMounted) return null;

   return (
      <div className="block md:hidden">
         <Button size="sm" variant="ghost" onClick={onOpen}>
            <MenuIcon />
         </Button>

         <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent side="left" className="z-[1001] p-2 pt-10">
               <Sidebar storageKey="t-sidebar-mobile-state" />
            </SheetContent>
         </Sheet>
      </div>
   );
};

export default MobileSidebar;
