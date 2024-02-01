import { OrganizationProfile } from "@clerk/nextjs";

const Settings = () => {
   return (
      <div className="w-full overflow-x-auto">
         <OrganizationProfile
            appearance={{
               elements: {
                  rootBox: {
                     width: "100%",
                     minWidth: "100%",
                  },
                  card: {
                     width: "100%",
                     border: "1px solid #e5e5e5",
                     boxShadow: "none",
                  },
               },
            }}
         />
      </div>
   );
};

export default Settings;
