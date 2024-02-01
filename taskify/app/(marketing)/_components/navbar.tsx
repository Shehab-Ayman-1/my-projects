import { Logo, NavbarButtons } from "@/components/navbar";
import { ButtonsProps } from "@/components/navbar";

const BUTTONS: ButtonsProps = {
   btn1: {
      label: "Login",
      variant: "outline",
      href: "/sign-in",
   },
   btn2: {
      label: "Go To Taskify For Free",
      variant: "default",
      href: "/sign-up",
   },
};

export const Navbar = () => {
   return (
      <nav className="fixed-top-left flex-between z-[1000] h-14 w-full border-b bg-white p-4 shadow-md">
         <Logo className="bg-white" />
         <NavbarButtons btn1={BUTTONS.btn1} btn2={BUTTONS.btn2} />
      </nav>
   );
};
