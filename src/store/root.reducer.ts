import { combineReducers, AnyAction } from 'redux';
import { StoreEntities } from 'types/enums';
import { questionsReducer } from './questions/questions.reducers';

export const rootReducer = (state: any, action: AnyAction) => {
    return combineReducers({
        [StoreEntities.QUESTIONS]: questionsReducer,
    })(state, action);
}