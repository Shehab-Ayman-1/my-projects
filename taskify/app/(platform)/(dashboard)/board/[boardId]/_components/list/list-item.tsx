import type { ListWithCards } from "@/types";

import { ListWrapper } from "./list-wrapper";
import { ListHeader } from "./list-header";
import { CardForm } from "../card/card-form";
import { CardList } from "../card/card-list";

type ListItemProps = {
   list: ListWithCards;
   index: number;
};

export const ListItem = ({ list, index }: ListItemProps) => {
   return (
      <ListWrapper>
         <div className="w-full rounded-md bg-white/70 shadow-md">
            <ListHeader list={list} />

            <CardList list={list} />

            <CardForm boardId={list.boardId} listId={list.id} />
         </div>
      </ListWrapper>
   );
};
