import { Input } from "@material-tailwind/react";
import { UseFormRegister } from "react-hook-form";

type Styles = {
   input?: string;
   container?: string;
   label?: string;
};

type FieldProps = {
   type?: "text" | "email" | "password" | "number" | "date" | "month";
   label: string;
   name: string;
   register?: UseFormRegister<any>;
   onChange?: () => any;
   styles?: Styles;
};

const styleClasses = {
   input: "!text-md caret-teal placeholder:text-dimWhite disabled:bg-transparent dark:text-dimWhite",
   container: "mt-4",
   label: "text-md",
};

export const Field = ({
   type = "text",
   label,
   name,
   register,
   styles = { input: "", container: "", label: "" },
}: FieldProps) => {
   if (!register) return;
   return (
      <Input
         type={type}
         label={label}
         variant="standard"
         size="lg"
         color="teal"
         crossOrigin="anonymous"
         className={`${styleClasses.input} ${styles.input}`}
         containerProps={{ className: `${styleClasses.container} ${styles.container}` }}
         labelProps={{ className: `${styleClasses.label} ${styles.label}` }}
         {...register(name)}
      />
   );
};
