"use client";

import { Fragment, useEffect, useState } from "react";
import { CardModal } from "@/app/(platform)/(dashboard)/board/[boardId]/_components/card/card-modal";
import { PremiumModal } from "../premium-modal";

type LayoutProps = {};

export const ModalProvider = ({}: LayoutProps) => {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return;

   return (
      <Fragment>
         <CardModal />
         <PremiumModal />
      </Fragment>
   );
};
