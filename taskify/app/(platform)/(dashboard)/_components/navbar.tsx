import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { ButtonsProps, Logo, NavbarButtons } from "@/components/navbar";
import { FormPopover } from "@/components/form/form-popover";

import MobileSidebar from "./mobileSidebar";

const BUTTONS: ButtonsProps = {
   btn1: {
      label: "Create",
      variant: "default",
      className: "hidden sm:flex",
   },
   btn2: {
      label: <Plus />,
      variant: "default",
      className: "sm:hidden",
   },
};

const Navbar = () => {
   return (
      <nav className="fixed-top-left flex-between z-[1000] h-14 w-full border-b bg-white p-4 shadow-md">
         <div className="flex-start">
            <MobileSidebar />
            <Logo />
            <FormPopover side="bottom" align="start" sideOffset={18}>
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
                  elements: { rootBox: { display: "flex", justifyContent: "center", alignItems: "center" } },
               }}
            />
            <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: { width: 30, height: 30 } } }} />
         </div>
      </nav>
   );
};

export default Navbar;
