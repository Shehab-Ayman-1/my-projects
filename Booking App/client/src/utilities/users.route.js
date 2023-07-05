import axios from "axios";
import { routes } from "@/constants";

const router = axios.create({ baseURL: routes.locale });

export const GET_USERS = async () => await router.get("/");
