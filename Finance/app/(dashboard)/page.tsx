"use client";
import { useGetAccounts } from "@/features/accounts/api/useGetAccounts";
import { useNewAccount } from "@/features/accounts/hooks/useNewAccount";
import { Button } from "@/ui/button";

type DashboardProps = {};

const Dashboard = ({}: DashboardProps) => {
    const { data: accounts } = useGetAccounts();
    const { onOpen } = useNewAccount();

    return (
        <div className="text-2xl">
            <Button size="lg" onClick={onOpen}>
                View
            </Button>

            <div className="">
                {accounts?.map((account) => (
                    <p key={account.userId} className="mt-2 bg-blue-100 p-2">
                        {account.userId} - {account.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
