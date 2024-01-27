import { Typography } from "../ui";

type HeadingProps = {
   title: string;
   subTitle: string;
};

export const Heading = ({ title, subTitle }: HeadingProps) => {
   return (
      <div className="">
         <Typography variant="h3" className="font-extrabold text-black dark:text-white">
            {title}
         </Typography>
         <Typography variant="paragraph" color="gray" className="mt-3 max-w-[500px] text-sm dark:text-white">
            {subTitle}
         </Typography>
      </div>
   );
};
