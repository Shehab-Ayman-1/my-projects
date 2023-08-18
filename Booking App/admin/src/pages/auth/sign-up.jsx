import { Fragment } from "react";
import { Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Typography } from "@material-tailwind/react";
import { signinBG } from "@/assets";
import { AuthFooter } from "@/components";

export function SignUp() {
   return (
      <Fragment>
         <img src={signinBG} className="absolute inset-0 z-0 h-full w-full object-cover" />

         <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />

         <div className="container mx-auto p-4">
            <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
               <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                  <Typography variant="h3" color="white">
                     Sign Up
                  </Typography>
               </CardHeader>
               <CardBody className="flex flex-col gap-4">
                  <Input label="Name" size="lg" />
                  <Input type="email" label="Email" size="lg" />
                  <Input type="password" label="Password" size="lg" />
                  <div className="-ml-2.5">
                     <Checkbox label="I agree the Terms and Conditions" />
                  </div>
               </CardBody>
               <CardFooter className="pt-0">
                  <AuthFooter label="Already Have An Account?" button="Sign Up" navigate="Sign In" />
               </CardFooter>
            </Card>
         </div>
      </Fragment>
   );
}
