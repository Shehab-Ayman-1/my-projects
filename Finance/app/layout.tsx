import { ClerkProvider } from "@clerk/nextjs";

import { QueryProvider } from "@/providers/queryProvider";
import { SheetsProvider } from "@/providers/sheetsProvider";
import { Toaster } from "@/ui/sonner";
import "./sass/index.scss";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <ClerkProvider>
            <QueryProvider>
                <html>
                    <body className="">
                        <SheetsProvider />
                        <Toaster />
                        {children}
                    </body>
                </html>
            </QueryProvider>
        </ClerkProvider>
    );
};

export default Layout;
