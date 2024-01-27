import { download } from "@/assets";
import { Typography } from "../ui";
import { downloadImage } from "@/utils";

export type CardProps = {
   _id: string;
   name: string;
   prompt: string;
   photo: string;
};

type CardListProps = {
   data: CardProps[] | undefined;
   title: string;
};

export const Card = ({ _id, name, prompt, photo }: CardProps) => {
   return (
      <div className="group relative rounded-xl shadow-sp hover:shadow-sp-hover">
         <img src={photo} alt="photo" className="h-full w-full rounded-xl object-cover" />

         <div className="absolute bottom-0 right-0 hidden max-h-[95%] flex-col gap-2 overflow-y-auto rounded-md bg-black p-2 text-white group-hover:flex">
            <p className="text-xs leading-6">{prompt}</p>
            <div className="flex-between px-2">
               <div className="flex-start">
                  <p className="flex-center h-6 w-6 rounded-full bg-teal text-xs text-white">{name.charAt(0)}</p>
                  <p className="text-xs">{name.split(" ")[0]}</p>
               </div>
               <img
                  src={download}
                  alt="download"
                  className="block h-6 w-6 cursor-pointer invert hover:opacity-80"
                  onClick={() => downloadImage(_id, photo)}
               />
            </div>
         </div>
      </div>
   );
};

export const CardList = ({ data, title }: CardListProps) => {
   if (data?.length) return data.map((post) => <Card key={post._id} {...post} />);

   return <Typography className="mt-5 font-extrabold uppercase">{title}</Typography>;
};
