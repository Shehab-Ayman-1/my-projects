import { Button, Variants } from "@/components/ui/button";
import Link from "next/link";

type ButtonProps = {
   label: string | JSX.Element;
   variant: Variants;
   className?: string;
   href?: string;
};

export type ButtonsProps = {
   btn1: ButtonProps;
   btn2: ButtonProps;
};

export const NavbarButtons = ({ btn1, btn2 }: ButtonsProps) => {
   return (
      <div className="flex-between z-10 w-full sm:justify-end">
         <Button size="sm" className={btn1.className} variant={btn1.variant}>
            {btn1?.href ? <Link href={btn1.href}>{btn1.label}</Link> : btn1.label}
         </Button>
         <Button size="sm" className={btn2.className} variant={btn2.variant}>
            {btn2?.href ? <Link href={btn2.href}>{btn2.label}</Link> : btn2.label}
         </Button>
      </div>
   );
};
