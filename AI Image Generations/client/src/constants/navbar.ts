// Directs
import { Home, CreatePost } from "@/views";

// Auths
import { Login, Register } from "@/views/auths";

/* Guide:
   - If [title] Is Defined      -> Create In Navbar Tabs
   - If [title] Is Not Defined  -> Just Create Route
   - If [paths.name] Is Defined -> Create In Navbar Tab Menu
   - If [role] Is Defined       -> Just Allow Admin Users
*/

type Path = {
   name?: string;
   link: string;
   role: "admin" | "editor" | "user";
   icon?: string;
   disabled?: boolean;
   Component: () => JSX.Element;
};

export type LinksProps = {
   title?: string;
   path: string;
   paths: Path[];
};

export const links: LinksProps[] = [
   // Public Not In Navbar
   {
      path: "",
      paths: [
         {
            link: "",
            role: "user",
            Component: Home,
         },
         {
            link: "/create-post",
            role: "user",
            Component: CreatePost,
         },
      ],
   },

   // Auths Not In Navbar
   {
      path: "auths",
      paths: [
         {
            link: "login",
            role: "user",
            Component: Login,
         },
         {
            link: "register",
            role: "admin",
            Component: Register,
         },
      ],
   },
];

// Check If The User Role Is Allowed
export const dynamicRoute = (path: string) => {
   const routes = ["/profile", "/bills/update-bill", "/bills/show-bill"];
   const word = routes.find((word) => path.startsWith(word));
   return word || path;
};

export const getPathsOf = (role: string | number) => {
   const allowed = links.map(({ path, paths }) => ({ path, paths: paths.filter((item) => item.role === role) }));
   return allowed.reduce((prev: string[], cur) => {
      const paths = cur.paths.map((path) => `${cur.path ? `/${cur.path}` : ""}/${dynamicRoute(path.link)}`);
      return prev.concat(paths);
   }, []);
};
