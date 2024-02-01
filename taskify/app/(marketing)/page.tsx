import Link from "next/link";
import { MedalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
   return (
      <div className="flex-center min-h-[calc(100vh-136px)] flex-col">
         <div className="flex-center flex-col">
            <div className="flex-start mb-4 rounded-full border bg-amber-100 p-4 uppercase text-amber-700 shadow-sm">
               <MedalIcon className="mr-2 h-6 w-6" />
               No 1 Task Managment
            </div>

            <h1 className="mb-6 text-center text-3xl text-neutral-800 md:text-6xl">Taskify Helps Team Move</h1>

            <h1 className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 p-4 text-3xl text-white shadow-md md:text-6xl">
               Work Forward
            </h1>

            <p className="max-w-xl text-center text-sm text-neutral-400 sm:text-base md:max-w-2xl md:text-xl">
               Collaborate, Manage Projects, And Reach New Productivity Peaks, From high Rises To The Home Office,
               The Way Your Team Works Is Unique - Accomplish It All With Taskify.
            </p>
         </div>

         <Button className="mt-6" size="lg" asChild>
            <Link href="/sign-up">Sign Up For Free</Link>
         </Button>
      </div>
   );
}
