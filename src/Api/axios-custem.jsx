import axios from "axios";
import { baseUrl } from "./Api";
import Cookie from "cookie-universal";
const cookie = Cookie();
const Axios = axios.create({
    baseURL: baseUrl ,
    headers: {
        Authorization: 'Bearer ' + cookie.get('token')
    }
})
export {Axios}