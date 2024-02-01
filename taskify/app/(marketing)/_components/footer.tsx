import { ButtonsProps, Logo, NavbarButtons } from "@/components/navbar";

const BUTTONS: ButtonsProps = {
   btn1: {
      label: "Privacy Policy",
      variant: "ghost",
   },
   btn2: {
      label: "Terms Of Service",
      variant: "ghost",
   },
};

export const Footer = () => {
   return (
      <nav className="fixed-bottom-left flex-between z-[1000] h-14 w-full border-t p-4 shadow-md">
         <Logo />
         <NavbarButtons btn1={BUTTONS.btn1} btn2={BUTTONS.btn2} />
      </nav>
   );
};
