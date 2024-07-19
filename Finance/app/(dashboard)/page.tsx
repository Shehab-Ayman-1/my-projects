import { Accounts } from "@/server/models";

type Account = {
    _id: string;
    name: string;
};

type DashboardProps = {};

const Dashboard = async ({}: DashboardProps) => {
    const accounts: Account[] = await Accounts.find();

    return (
        <div className="">
            <div className="">
                {accounts?.map((account) => (
                    <p key={account._id.toString()}>
                        {account._id.toString()} - {account.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
