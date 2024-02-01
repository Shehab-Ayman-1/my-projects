import { Fragment } from "react";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

type LayoutProps = {
   children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
   return (
      <Fragment>
         <Navbar />
         <main className="mx-auto w-full max-w-7xl pt-20">{children}</main>
         <Footer />
      </Fragment>
   );
};

export default Layout;
