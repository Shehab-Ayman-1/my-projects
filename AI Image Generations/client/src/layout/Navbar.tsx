import { Logo, NavbarLinks } from "@/components/navbar";

export const Navbar = () => {
   return (
      <nav className="flex-between bg-gradient fixed left-0 top-0 z-[1000] w-full px-3 py-3 print:relative xl:px-8">
         <Logo />
         <NavbarLinks />
      </nav>
   );
};
