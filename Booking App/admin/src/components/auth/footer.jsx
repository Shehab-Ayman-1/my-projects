import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

export const AuthFooter = ({ button, label, navigate }) => {
   const { pathname } = useLocation();

   return (
      <Fragment>
         <Button variant="gradient" fullWidth>
            {button}
         </Button>
         <Typography variant="small" className="mt-6 flex justify-center">
            {label}
            <Link to={pathname === "/auth/sign-up" ? "/auth/sign-in" : "/auth/sign-up"}>
               <Typography as="span" variant="small" color="blue" className="ml-1 font-bold">
                  {navigate}
               </Typography>
            </Link>
         </Typography>
      </Fragment>
   );
};
