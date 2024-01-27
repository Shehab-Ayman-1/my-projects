import { Typography } from "@/components/ui";
import { Input } from "@material-tailwind/react";

type SearchBoxProps = {
   searchText: string;
   setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBox = ({ searchText, setSearchText }: SearchBoxProps) => {
   return (
      <section className="my-5 w-full">
         <Input
            placeholder="search"
            label="Search..."
            variant="outlined"
            className="dark:text-white"
            crossOrigin="anonymous"
            onChange={(event) => setSearchText(event.target.value)}
         />

         <div className="mt-4 w-full">
            {searchText && (
               <Typography variant="h6" color="gray" className="font-extrabold">
                  Show Results For <span className="text-darkGray dark:text-white">{searchText}</span>
               </Typography>
            )}
         </div>
      </section>
   );
};
