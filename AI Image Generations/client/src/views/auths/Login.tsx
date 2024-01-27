import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormSubmitEvent } from "@/types";
import { Field, Form } from "@/components/ui";
import { useAxios } from "@/hooks/useAxios";
import { Loading } from "@/layout/Loading";
import { login } from "@/redux/users";
import { z } from "zod";

type Response = {
   user: {
      name: string;
      email: string;
      password: string;
      role: number;
   };
};

const schema = z.object({
   email: z.string().email(),
   password: z.string().min(3),
});

const defaultValues = { email: "", password: "" };
export const Login = () => {
   const { register, handleSubmit } = useForm({ defaultValues, resolver: zodResolver(schema) });
   const { data, loading, error, isSubmitted, refetch } = useAxios<Response>();

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onSubmit = async (data: typeof defaultValues) => {
      /* EXPERMENTAL */
      const user = { ...data, name: "Shehab Ayman", role: 5051 };
      dispatch(login(user));
      navigate("/");
      sessionStorage.setItem("user", JSON.stringify(user));
      return;

      // const { data, isSubmitted, error } = await refetch("post", "/users/login", formData);
      // if (isSubmitted && error) return;

      // dispatch(login(data?.user));
      // sessionStorage.setItem("user", JSON.stringify(data?.user));

      // navigate("/");
   };

   return (
      <Form
         onSubmit={handleSubmit(onSubmit)}
         text={{ header: "Login", button: "Sign In" }}
         loading={(isSubmitted && !error) || loading}
      >
         <Loading isSubmitted={isSubmitted} loading={loading} error={error} message={data} to="/" />

         <Field label="Email:" name="email" register={register} styles={{ input: "normal-case" }} />

         <Field
            type="password"
            label="Password:"
            name="password"
            register={register}
            styles={{ input: "normal-case" }}
         />
      </Form>
   );
};
