import type { Board } from "@prisma/client";
import { BoardTitle } from "./board-title";
import { BoardOptions } from "./board-options";

export const BoardNavbar = async (board: Board) => {
   return (
      <nav className="flex-between z-40 w-full bg-black/50 p-4 text-white">
         <BoardTitle {...board} />
         <BoardOptions boardId={board.id} />
      </nav>
   );
};
