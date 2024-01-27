import { logo } from "@/assets";
import { Link } from "react-router-dom";

export const Logo = () => {
   return (
      <Link to="/">
         <img src={logo} alt="logo" className="w-28 object-contain dark:invert" />
      </Link>
   );
};
