import { BanknotesIcon, UserPlusIcon, UserIcon, ChartBarIcon } from "@heroicons/react/24/solid";

export const statisticsCardsData = [
   {
      color: "blue",
      Icon: BanknotesIcon,
      title: "Today's Money",
      value: "$53k",
      footer: { color: "text-green-500", value: "+55%", label: "than last week" },
   },
   {
      color: "pink",
      Icon: UserIcon,
      title: "Today's Users",
      value: "2,300",
      footer: { color: "text-green-500", value: "+3%", label: "than last month" },
   },
   {
      color: "green",
      Icon: UserPlusIcon,
      title: "New Clients",
      value: "3,462",
      footer: { color: "text-red-500", value: "-2%", label: "than yesterday" },
   },
   {
      color: "orange",
      Icon: ChartBarIcon,
      title: "Sales",
      value: "$103,430",
      footer: { color: "text-green-500", value: "+5%", label: "than yesterday" },
   },
];
