import { Link } from "react-router-dom";

export const NavbarLinks = () => {
   return (
      <Link
         to="/create-post"
         className="rounded-md bg-teal-500 px-4 py-2 pb-3 font-medium text-white hover:bg-teal-800"
      >
         Create
      </Link>
   );
};
