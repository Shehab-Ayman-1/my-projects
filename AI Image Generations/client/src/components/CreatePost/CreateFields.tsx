import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { preview } from "@/assets";
import { getRandomPrompt } from "@/utils";
import { Button, Field } from "@/components/ui";
import { useAxios } from "@/hooks/useAxios";
import { Loading } from "@/layout";
import { Ref, useImperativeHandle } from "react";

const schema = z.object({
   name: z.string().min(10, { message: "Name Must By Atleast 10 Characters" }),
   prompt: z.string().min(15, { message: "Prompt Must By Atleast 15 Characters" }),
   photo: z.string(),
});

const defaultValues = { name: "", prompt: "", photo: "" };
export const CreateFields = ({ formRef }: { formRef: Ref<typeof defaultValues> }) => {
   const { data, loading, error, isSubmitted, refetch } = useAxios<string>();
   const { register, handleSubmit, watch, setValue, setError, formState } = useForm({
      defaultValues,
      resolver: zodResolver(schema),
   });
   const { errors } = formState;
   const name = watch("name");
   const prompt = watch("prompt");
   const photo = watch("photo");

   const handleSurprise = () => {
      const randomPrompt = getRandomPrompt(prompt);
      setValue("prompt", randomPrompt);
   };

   const onSubmit = async () => {
      if (!prompt) return setError("prompt", { message: "Prompt Is A Required Field." });
      const { data, isSubmitted, error } = await refetch("post", "/posts/generate", { prompt });

      if (isSubmitted && error) setError("photo", { message: error });
      const photo = `data:image/jpeg;base64,${data}`;
      setValue("photo", photo);
   };

   useImperativeHandle(formRef, () => ({ name, prompt, photo }));

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="mt-14 rounded-md p-4">
            <Field label="Your Name" register={register} name="name" />

            <div className="flex-between">
               <Field label="Your Prompt" register={register} name="prompt" />
               <Button className="p-1 !text-sm !leading-5" size="sm" onClick={handleSurprise}>
                  Surprise Me
               </Button>
            </div>

            <Field label="Your Photo" register={register} name="photo" />

            <div className="text-red-500">
               <p>{errors.name?.message}</p>
               <p>{errors.prompt?.message}</p>
               <p>{errors.photo?.message}</p>
            </div>
         </div>

         <div className="flex-center relative mx-auto my-5 h-64 w-64 p-3 text-sm md:mx-0">
            {photo && <img src={photo} alt="prompt" className="h-full w-full object-contain" />}
            {!photo && <img src={preview} alt="preview" className="h-9/12 w-9/12 object-contain dark:invert" />}

            <div className={`flex-center absolute inset-0 z-0 rounded-lg ${loading ? "bg-black/50" : ""}`}>
               <Loading
                  isSubmitted={isSubmitted}
                  loading={loading}
                  error={error}
                  message={data}
                  hideSubLoadingText
                  subLoading
               />
            </div>
         </div>

         <Button type="submit" color="green" className="w-full !text-sm md:w-fit">
            {loading ? "Loading..." : "Generate"}
         </Button>
      </form>
   );
};
