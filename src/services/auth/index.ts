import axios, { AxiosInstance } from "axios";

const authInstance: AxiosInstance = axios.create({
    responseType: "json",
    headers: {
        'Content-type': 'application/json',
    }
});

export default authInstance;