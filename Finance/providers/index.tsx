import { ClerkProvider } from "@clerk/nextjs";

import { QueryProvider } from "@/providers/queryProvider";
import { SheetsProvider } from "@/providers/sheetsProvider";

import { Header } from "@/components/header";
import { Toaster } from "@/ui/sonner";

type ProvidersProps = {
    children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <ClerkProvider>
            <QueryProvider>
                <Header />
                {children}

                <Toaster richColors />
                <SheetsProvider />
            </QueryProvider>
        </ClerkProvider>
    );
};
