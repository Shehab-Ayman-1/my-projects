import { XCircleIcon } from "lucide-react";

type Error = {
   message?: string;
};

type FormErrorsProps = {
   errors: Record<string, Error | undefined>;
};

export const FormErrors = ({ errors }: FormErrorsProps) => {
   if (!errors) return;

   const keys = Object.keys(errors);

   return (
      <div className="absolute left-0 top-[100%] flex max-w-[300px] flex-col space-y-2">
         {keys.map((key) => (
            <p key={key} className="mt-2 flex gap-2 rounded-sm bg-rose-100 px-4 py-2 text-xs text-rose-600 shadow">
               <XCircleIcon className="h-6 w-6" />
               {errors[key]?.message}
            </p>
         ))}
      </div>
   );
};
