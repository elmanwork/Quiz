import { Action } from "redux";

export interface IReduxAction<T = null> extends Action {
    payload: T;
}