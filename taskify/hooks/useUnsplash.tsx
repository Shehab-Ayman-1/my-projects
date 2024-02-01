"use client";
import { unsplash } from "@/utils/utils/unsplash";
import { useState, useEffect } from "react";

type Method = "get" | "getRandom" | "getStats" | "list" | "trackDownload";
type Options = Record<string, any>;
type DataResponse = Array<Record<string, any>>;

export const useUnsplash = (method?: Method, options?: Options) => {
   const [data, setData] = useState<DataResponse>();
   const [loading, setLoading] = useState(false);

   const fetcher = async (method?: Method, options?: Options) => {
      if (!method) return;
      setLoading(true);

      try {
         const result = await unsplash.photos[method](options as any);
         setData(() => result?.response as DataResponse);
         return { data: result.response };
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetcher(method, options);
   }, [method]);

   const refetch = async (method: Method, options: Options) => fetcher(method, options);
   return { data, loading, refetch };
};
