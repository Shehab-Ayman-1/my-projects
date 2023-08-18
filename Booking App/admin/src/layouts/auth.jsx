import { Routes, Route } from "react-router-dom";
import { ChartPieIcon, UserPlusIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { Navbar } from "@/widgets";
import routes from "@/routes";

export function Auth() {
   const navbarRoutes = [
      { name: "dashboard", path: "/dashboard/home", Icon: ChartPieIcon },
      { name: "sign up", path: "/auth/sign-up", Icon: UserPlusIcon },
      { name: "sign in", path: "/auth/sign-in", Icon: ArrowRightOnRectangleIcon },
   ];

   return (
      <div className="relative min-h-screen w-full">
         <div className="container relative z-40 mx-auto p-4">
            <Navbar routes={navbarRoutes} />
         </div>
         <Routes>{routes.map(({ layout, pages }) => layout === "auth" && pages.map(({ path, element }) => <Route exact path={path} element={element} />))}</Routes>
      </div>
   );
}
