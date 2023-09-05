import { useEffect, useState } from "react";
import axios from "axios";

const router = axios.create({ baseURL: "http://localhost:5000/api", headers: { "Content-Type": "application/json", Authorization: "Bearer shehab" }, withCredentials: true });

export const useAxios = (method, url, body, configs) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [status, setStatus] = useState(0);

   const fetcher = async (method, url, body, configs) => {
      if (url === "/") return { data, loading, error };

      setData((d) => (d = []));
      setLoading((l) => (l = true));
      setError((e) => (e = false));
      setStatus((s) => (s = null));

      try {
         if (body) {
            const response = await router[method](url, body, configs);
            const data = response.data;
            setData((d) => (d = data));
            setStatus((s) => (s = response?.status || 0));
            return { data, loading: false, error: null };
         } else {
            const response = await router[method](url, configs);
            const data = response.data;
            setData((d) => (d = data));
            setStatus((s) => (s = response?.status || 0));
            return { data, loading: false, error: null };
         }
      } catch (error) {
         setError((e) => (e = error?.response?.data || "Network Error"));
         setStatus((s) => (s = error?.response?.status || 0));
         return { data: [], loading: false, error: error?.response?.data || "Network Error" };
      } finally {
         setLoading((l) => (l = false));
         setTimeout(() => setError((e) => (e = null)), 5000);
      }
   };

   useEffect(() => {
      fetcher(method, url, body, configs);
   }, []);

   const refetch = async (method, url, body, configs) => await fetcher(method, url, body, configs);

   return { data, loading, error, status, setError, refetch };
};
