import { Button } from "@/components/ui/button";

type AddCardFormProps = {};

export const AddCardForm = ({}: AddCardFormProps) => {
   return (
      <Button variant="ghost" className="flex-start h-auto w-full justify-start rounded-none text-sm">
         Add A Card...
      </Button>
   );
};
