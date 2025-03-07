import axios from axios
import { ACCESS_TOEKN } from "./constants"


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL 
});
  



