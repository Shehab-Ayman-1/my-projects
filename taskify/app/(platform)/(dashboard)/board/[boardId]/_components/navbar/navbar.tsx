import type { Board } from "@prisma/client";
import { NavbarTitle } from "./navbar-title";
import { NavbarOptions } from "./navbar-options";

export const BoardNavbar = async (board: Board) => {
   return (
      <nav className="flex-between z-40 w-full bg-black/50 p-4 text-white">
         <NavbarTitle {...board} />
         <NavbarOptions boardId={board.id} />
      </nav>
   );
};
