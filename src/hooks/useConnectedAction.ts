import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

export function useConnectedAction<T extends (...args: any[]) => AnyAction>(action: T): T {
    const dispatch = useDispatch();
    return useCallback( ((...args) => dispatch(action(...args))) as T  , [dispatch, action]);
}