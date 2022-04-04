import axios, { AxiosInstance } from "axios";
import { appConfig } from 'configs';

const authInstance: AxiosInstance = axios.create({
    baseURL: `${appConfig.REACT_APP_CSEC_URL}`,
    responseType: "json",
    timeout: appConfig.REACT_APP_CSEC_TIMEOUT,
    headers: {
        'Content-type': 'application/json',
    }
});

export default authInstance;