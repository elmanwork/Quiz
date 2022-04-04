import { IAppConfig } from "types";

export const appConfig: IAppConfig = window.env || process.env || {};