import { Fragment } from "react";
import { OrgControl } from "./_components/org-control";

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <Fragment>
         <OrgControl />
         {children}
      </Fragment>
   );
};

export default Layout;
