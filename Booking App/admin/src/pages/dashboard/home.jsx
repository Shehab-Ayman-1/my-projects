import { StatisticsCard, StatisticsChart } from "@/widgets";
import { statisticsCardsData, statisticsChartsData } from "@/data";
import { Table } from "@/components";
import { Overview } from "@/components/dashboard/home/overview";

export function Home() {
   return (
      <div className="mt-12">
         <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            {statisticsCardsData.map(({ Icon, title, footer, ...rest }) => (
               <StatisticsCard {...rest} key={title} title={title} icon={<Icon className="h-6 w-6 text-white" />} footer={footer} footerType="cards" />
            ))}
         </div>

         <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            {statisticsChartsData.map(({ title, footer, ...rest }) => (
               <StatisticsChart {...rest} key={title} footer={footer} footerType="charts" />
            ))}
         </div>

         <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
            <Table />
            <Overview />
         </div>
      </div>
   );
}
