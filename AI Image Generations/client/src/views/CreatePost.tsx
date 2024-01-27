import { useRef, useState } from "react";
import axios from "axios";

import { Button, Typography } from "@/components/ui";
import { CreateFields } from "@/components/CreatePost";
import { Heading } from "@/components/home";
import { useAxios } from "@/hooks/useAxios";
import { Loading } from "@/layout";

type PostProps = {
   name: string;
   prompt: string;
   photo: string;
};

type Response = {
   success?: string;
   error?: string;
   warn?: string;
};

export const CreatePost = () => {
   const { data, loading, error, isSubmitted, refetch } = useAxios<Response>();
   const formRef = useRef<PostProps | null>(null);
   const [cloudinaryError, setCloudinaryError] = useState("");

   const handleSubmit = async () => {
      if (!formRef.current) return;
      const cloudinaryName = import.meta.env.VITE_CLOUDINARY_NAME;

      const formData = new FormData();
      formData.append("file", formRef.current.photo);
      formData.append("upload_preset", "upload");

      try {
         const cloudinary = await axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryName}/upload`, formData);
         const photo = cloudinary.data.url;
         console.log(photo);
         await refetch("post", "/posts/create-post", { ...formRef.current, photo });
      } catch (error) {
         console.log(error);
         setCloudinaryError((error as any)?.message || "");
      }
   };

   return (
      <section>
         <Loading isSubmitted={isSubmitted} loading={loading} error={error} message={data} to="/" />

         <Heading
            title="Create"
            subTitle="Create Imaginative And Visually Stunning Images Through DALL_E AI And Share Them With The Community"
         />

         <CreateFields formRef={formRef} />

         <Typography color="gray" className="mt-5 text-base">
            Once You Have Created The Image You Want, You Can Share It With Others In The Community
         </Typography>

         <Button
            className="mt-5 w-full !text-sm md:w-fit"
            disabled={loading || (isSubmitted && !!error)}
            onClick={handleSubmit}
         >
            {loading ? "Sharing..." : "Share With The Community"}
         </Button>

         <Typography color="red" className="mt-5 text-base">
            {cloudinaryError}
         </Typography>
      </section>
   );
};
