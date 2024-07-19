import { ClerkProvider } from "@clerk/nextjs";
import { DBConnection } from "@/server/configs";
import "@/app/sass/index.scss";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = async ({ children }: LayoutProps) => {
    await DBConnection();

    return (
        <html>
            <body>
                <ClerkProvider>{children}</ClerkProvider>
            </body>
        </html>
    );
};

export default Layout;
