import { Board } from "@prisma/client";
import Link from "next/link";

export const BoardCard = ({ id, title, imageThumbUrl }: Board) => {
   return (
      <Link
         href={`/board/${id}`}
         style={{ backgroundImage: `url(${imageThumbUrl})` }}
         className="group relative aspect-video h-full w-full overflow-hidden rounded-md bg-sky-700 bg-cover bg-center bg-no-repeat p-2"
      >
         <div className="absolute-top-left h-full w-full bg-black/20 transition group-hover:bg-black/40" />
         <p className="relative text-xs font-semibold text-white">{title}</p>
      </Link>
   );
};
