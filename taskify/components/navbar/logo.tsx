import Link from "next/link";
import Image from "next/image";

import { cn } from "@/utils";
import LogoSrc from "@/public/images/logo.svg";

export const Logo = ({ className }: { className?: string }) => {
   return (
      <Link href="/" className={cn("flex-start hidden transition hover:opacity-75 sm:flex", className)}>
         <Image src={LogoSrc?.src} alt="logo" className="" width={50} height={50} />
         <h3 className="text-xl text-neutral-700">Taskify</h3>
      </Link>
   );
};
