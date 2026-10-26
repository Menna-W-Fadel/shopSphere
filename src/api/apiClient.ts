import axios from "axios";
import { BASE_URL } from "../config/env";

export const apiClient = axios.create({
    headers:{
        "Content-Type":"application/json",
        baseUrl: BASE_URL,
        timeout:2000,
    }
})