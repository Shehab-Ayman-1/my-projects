"use client";
import Image from "next/image";
import NotFoundImg from "@/public/images/not-found.png";
import React from "react";

const NotFound = () => {
   return (
      <Image
         src={NotFoundImg.src}
         width={NotFoundImg.width}
         height={NotFoundImg.height}
         alt="not-found"
         className="fixed-center max-h-[80vh] max-w-[80vh] object-contain"
      />
   );
};

export default NotFound;
