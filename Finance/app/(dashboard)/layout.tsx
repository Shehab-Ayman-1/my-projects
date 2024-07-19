import { Header } from "@/components/header";

import { Fragment } from "react";

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
