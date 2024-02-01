import { OrganizationList } from "@clerk/nextjs";

const CreateOrganizations = () => {
   return (
      <OrganizationList
         hidePersonal
         afterSelectOrganizationUrl="/organizations/:id"
         afterCreateOrganizationUrl="/organizations/:id"
      />
   );
};

export default CreateOrganizations;
