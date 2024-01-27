import { Outlet, useLocation } from "react-router-dom";
import { Card } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { Fragment } from "react";

import { dynamicRoute, getPathsOf } from "@/constants/navbar";
import { Configrator, Navbar, PageNotFound } from "@/layout";
import { ADMIN, USER } from "@/constants";
import { Login } from "@/views/auths";

export const Wrapper = () => {
   const { user } = useSelector(({ users }) => users);
   const { pathname } = useLocation();

   const isAllowed = (allowed: string[]) => allowed.some((path) => path.includes(dynamicRoute(pathname)));

   const views = {
      admin: () => {
         const allowed = getPathsOf("admin").concat(getPathsOf("user"));
         return user?.role === ADMIN && isAllowed(allowed) && Outlet;
      },
      user: () => {
         const allowed = getPathsOf("user");
         return user?.role === USER && isAllowed(allowed) ? Outlet : PageNotFound;
      },
   };

   const CurrentPage = !user?.role ? Login : views.admin() || views.user();

   return (
      <Fragment>
         {/* Configrator */}
         <Configrator />

         {/* Navbar */}
         <Navbar />

         {/* Pages Card */}
         <Card placeholder="card" className="mx-auto mt-10 max-w-[1320px] bg-transparent p-10 shadow-none">
            <CurrentPage />
         </Card>
      </Fragment>
   );
};
