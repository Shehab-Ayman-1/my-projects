"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { useMobileSidebarStore } from "@/hooks/useMobileSidebar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Sidebar } from "./sidebar";

const MobileSidebar = () => {
   const { isOpen, onOpen, onClose } = useMobileSidebarStore((state) => state);
   const [isMounted, setIsMounted] = useState(false);
   const pathname = usePathname();

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
