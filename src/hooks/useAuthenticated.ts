import { appConfig } from "configs";
import { useCookies } from 'react-cookie';

export const useSsoToken = () => {
    const [{ "SSO-TOKEN": token }] = useCookies([appConfig.REACT_APP_SSO_TOKEN]);

    return [token];
};