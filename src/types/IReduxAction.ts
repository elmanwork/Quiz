import { Action } from "redux";

export interface ReduxAction<T = null> extends Action {
    payload: T;
}