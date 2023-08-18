import { Fragment } from "react";
import { Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Typography } from "@material-tailwind/react";
import { signinBG } from "@/assets";
import { AuthFooter } from "@/components";

export function SignIn() {
   return (
      <Fragment>
         <img src={signinBG} className="absolute inset-0 z-0 h-full w-full object-cover" />

         <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />

         <div className="container mx-auto p-4">
            <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
               <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                  <Typography variant="h3" color="white">
                     Sign In
                  </Typography>
               </CardHeader>

               <CardBody className="flex flex-col gap-4">
                  <Input type="email" label="Email" size="lg" />
                  <Input type="password" label="Password" size="lg" />
                  <div className="-ml-2.5">
                     <Checkbox label="Remember Me" />
                  </div>
               </CardBody>

               <CardFooter className="pt-0">
                  <AuthFooter label="Don't Have An Account?" button="Sign In" navigate="Sign Up" />
               </CardFooter>
            </Card>
         </div>
      </Fragment>
   );
}
