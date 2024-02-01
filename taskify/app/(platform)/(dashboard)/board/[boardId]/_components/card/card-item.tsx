import type { ListWithCards } from "@/types";

type CardItemProps = {
   index: number;
   card: ListWithCards;
};

export const CardItem = ({ card, index }: CardItemProps) => {
   return (
      <li
         role="button"
         className="truncate rounded-md border-2 border-transparent bg-white px-3 py-2 text-sm shadow-sm hover:border-black"
      >
         {card.title}
      </li>
   );
};
