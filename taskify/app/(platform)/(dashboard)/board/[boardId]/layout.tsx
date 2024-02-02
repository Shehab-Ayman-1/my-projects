import { notFound, redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { prisma } from "@/utils";
import { BoardNavbar } from "./_components/board/board-navbar";

type LayoutType = {
   params: { boardId: string };
   children: React.ReactNode;
};

export const metadata = {
   title: "Board",
};

const Layout = async ({ params, children }: LayoutType) => {
   const { orgId } = auth();
   if (!orgId) return redirect("/select-org");

   const board = await prisma.board.findUnique({ where: { id: params.boardId, orgId } });
   if (!board) return notFound();

   return (
      <div
         className="relative h-full w-full bg-cover bg-center bg-no-repeat"
         style={{
            backgroundImage: `linear-gradient(rgb(0 0 0 / 0.4), rgb(0 0 0 / 0.4)), url(${board.imageFullUrl})`,
         }}
      >
         <main className="pt-14">
            <BoardNavbar {...board} />
            <section className="mx-auto max-w-7xl">{children}</section>
         </main>
      </div>
   );
};

export default Layout;
