import { useState } from "react";
import { FieldEvent, FormSubmitEvent } from "@/types";

import { Field, Form, Selectbox } from "@/components/ui";
import { useAxios } from "@/hooks/useAxios";
import { Loading } from "@/layout/Loading";

const ROLES = ["Admin", "User"];
export const Register = () => {
   const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "", role: 0 });
   const { data, loading, error, isSubmitted, refetch } = useAxios();

   const handleSelectChange = (name: string, value?: string) => {
      setFormData((data) => ({ ...data, [name]: value }));
   };

   const handleFieldChange = (event: FieldEvent) => {
      setFormData((data) => ({ ...data, [event.target.name]: event.target.value }));
   };

   const handleSubmit = async (event: FormSubmitEvent) => {
      event.preventDefault();
      if (!Object.values(formData).every((p) => p)) return alert("ادخل جميع البيانات المطلوبة");
      await refetch("post", "/users/register", formData);
   };

   return (
      <Form
         onSubmit={handleSubmit}
         text={{ header: "Sign Up", button: "Register" }}
         loading={(isSubmitted && !error) || loading}
      >
         <Loading isSubmitted={isSubmitted} loading={loading} error={error} message={data} to="/" />
         <Field
            label="Name:"
            name="name"
            value={formData.name}
            styles={{ input: "normal-case" }}
            onChange={handleFieldChange}
         />

         <Field
            label="Email:"
            type="email"
            name="email"
            value={formData.email}
            styles={{ input: "normal-case" }}
            onChange={handleFieldChange}
         />

         <Field
            label="Password:"
            type="password"
            name="password"
            value={formData.password}
            styles={{ input: "normal-case" }}
            onChange={handleFieldChange}
         />

         <Selectbox
            label="Account Type:"
            options={ROLES}
            loading={!isSubmitted && loading}
            onChange={(value) => handleSelectChange("role", value)}
         />

         <Field label="Phone:" type="number" name="phone" value={formData.phone} onChange={handleFieldChange} />
      </Form>
   );
};
