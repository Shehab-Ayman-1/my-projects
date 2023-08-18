import { HomeIcon, TableCellsIcon } from "@heroicons/react/24/solid";
import { ArrowRightOnRectangleIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Home, Tables, SignIn, SignUp } from "@/pages";

const icon = { className: "w-5 h-5 text-inherit" };

export const routes = [
   {
      layout: "dashboard",
      pages: [
         { icon: <HomeIcon {...icon} />, name: "dashboard", path: "/home", element: <Home /> },
         { icon: <TableCellsIcon {...icon} />, name: "tables", path: "/tables", element: <Tables /> },
      ],
   },
   {
      title: "auth pages",
      layout: "auth",
      pages: [
         { icon: <ArrowRightOnRectangleIcon {...icon} />, name: "sign in", path: "/sign-in", element: <SignIn /> },
         { icon: <UserPlusIcon {...icon} />, name: "sign up", path: "/sign-up", element: <SignUp /> },
      ],
   },
];

export default routes;
