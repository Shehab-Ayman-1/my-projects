"use client";
import { CheckIcon, Loader2Icon, RotateCwIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import type { UseFormSetValue } from "react-hook-form";

import { useUnsplash } from "@/hooks/useUnsplash";
import { unsplashImages } from "@/public/images/unsplash";
import { cn } from "@/utils";
import Link from "next/link";

type FormPickerProps = {
   setValue: UseFormSetValue<{ title: string; image: string }>;
};

const unsplashOptions = { collectionIds: ["317099"], count: 9 };
export const FormPicker = ({ setValue }: FormPickerProps) => {
   const { data, loading, refetch } = useUnsplash("getRandom", unsplashOptions);
   const [selectedId, setSelectedId] = useState<string | undefined>();

   const handleSelect = (img: Record<string, any>) => {
      if (loading) return;
      setSelectedId(img.id);
      setValue("image", `${img.id}|${img.urls.thumb}|${img.urls.full}|${img.links.html}|${img.user.name}`);
   };

   if (loading)
      return (
         <div className="flex-center -y-6 px-2">
            <Loader2Icon className="h-6 w-6 animate-spin text-sky-700" />;
         </div>
      );

   return (
      <div className="relative">
         <div className="mb-2 grid grid-cols-3 gap-2">
            {(data || unsplashImages)?.map((img) => (
               <div
                  key={img.id}
                  onClick={() => handleSelect(img)}
                  className={cn(
                     "group relative aspect-video cursor-pointer overflow-hidden rounded-md bg-muted transition",
                     loading && "cursor-auto opacity-50 hover:opacity-50",
                     selectedId === img.id && "opacity-1 ring-2 ring-sky-700",
                  )}
               >
                  <Image src={img.urls.thumb} alt="unsplash-img" className="object-cover" fill />
                  {selectedId === img.id && (
                     <CheckIcon className="absolute-center h-5 w-5 rounded-full bg-black/30 text-white" />
                  )}
                  <Link
                     href={img.links.html}
                     target="_blank"
                     className="absolute bottom-0 left-0 w-full truncate bg-black/50 p-1 text-[8px] text-white opacity-0 hover:underline group-hover:opacity-100"
                  >
                     {img.user?.name}
                  </Link>
               </div>
            ))}
         </div>

         <div className="flex-center my-2 w-full">
            <RotateCwIcon
               className={cn("cursor-pointer text-sky-700 hover:text-sky-400", loading && "hidden")}
               onClick={() => refetch("getRandom", unsplashOptions)}
            />
         </div>
      </div>
   );
};
