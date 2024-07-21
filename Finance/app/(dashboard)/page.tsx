"use client";
import { useGetAccounts } from "@/features/accounts/api/useGetAccounts";

type DashboardProps = {};

const Dashboard = ({}: DashboardProps) => {
    const { data: accounts, isLoading, error } = useGetAccounts();

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>{error.message}</h1>;

    return (
        <div className="text-2xl">
            {accounts?.map((account) => (
                <p className="mb-2 bg-slate-200 p-2" key={account._id.toString()}>
                    {account._id.toString()} - {account.name}
                </p>
            ))}
        </div>
    );
};

export default Dashboard;
