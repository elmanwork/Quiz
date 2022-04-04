import { combineReducers, Reducer, AnyAction } from 'redux';
import { IStateStore } from 'types';

export const rootReducer = (): Reducer<IStateStore> => (state, action: AnyAction) => {

    return combineReducers({})
}