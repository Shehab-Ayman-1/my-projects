import type { ListWithCards } from "@/types";
import { Card } from "@prisma/client";

import { cn } from "@/utils";
import { CardItem } from "./card-item";

type CardListProps = {
   list: ListWithCards;
};

export const CardList = ({ list }: CardListProps) => {
   return (
      <ol className={cn("mx-1 flex flex-col gap-2 px-1 py-0.5", list?.cards?.length && "mt-2")}>
         {list?.cards.map((card: Card, index: number) => (
            <CardItem key={card.id} index={index} card={card}></CardItem>
         ))}
      </ol>
   );
};
