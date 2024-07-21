import { Fragment } from "react";

import { Header } from "@/components/header";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
};

export default Layout;
