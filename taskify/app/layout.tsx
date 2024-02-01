import LocalForn from "next/font/local";
import { Metadata } from "next";

import { siteConfig } from "@/configs";
import "/public/sass/index.scss";
import { cn } from "@/utils";

const headingForn = LocalForn({
   src: "../public/fonts/font.woff2",
});

export const metadata: Metadata = {
   title: {
      default: siteConfig.title,
      template: `${siteConfig.title} | %s`,
   },
   description: siteConfig.description,
   icons: [{ url: "/images/logo.svg", href: "/images/logo.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" className="h-full min-h-screen w-full">
         <body className={cn("h-full", headingForn.className)}>{children}</body>
      </html>
   );
}
