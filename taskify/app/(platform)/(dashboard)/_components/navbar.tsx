import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { ButtonsProps, Logo, NavbarButtons } from "@/components/navbar";
import { FormPopover } from "@/components/form/form-popover";

import MobileSidebar from "./mobileSidebar";

const BUTTONS: ButtonsProps = {
   btn1: {
      label: "Create",
      variant: "default",
      className: "hidden md:flex",
   },
   btn2: {
      label: <Plus className="h-4 w-4" />,
      variant: "default",
      className: "w-7 h-7 p-0 flex-center md:hidden",
   },
};

const Navbar = () => {
   return (
      <nav className="fixed-top-left flex-between z-[1000] h-14 w-full border-b bg-white p-4 shadow-md">
         <div className="flex-between mx-auto w-full max-w-7xl">
            <div className="flex-start">
               <MobileSidebar />
               <Logo />
               <FormPopover side="bottom" align="center" sideOffset={18}>
                  <NavbarButtons btn1={BUTTONS.btn1} btn2={BUTTONS.btn2} />
               </FormPopover>
            </div>

            <div className="flex-end">
               <OrganizationSwitcher
                  hidePersonal
                  afterSelectOrganizationUrl="/organizations/:id"
                  afterCreateOrganizationUrl="/organizations/:id"
                  afterLeaveOrganizationUrl="/select-org"
                  appearance={{
                     elements: {
                        rootBox: {
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                        },
                        avatarBox: {
                           width: 25,
                           height: 25,
                        },
                     },
                  }}
               />
               <UserButton
                  afterSignOutUrl="/"
                  appearance={{ elements: { avatarBox: { width: 30, height: 30 } } }}
               />
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
