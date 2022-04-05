import { combineReducers, AnyAction } from 'redux';
import { StoreEntities } from 'types/enums';
import { questionsReducer } from './questions/questions.reducers';
import { quizReducer } from './quiz/quiz.reducers';

export const rootReducer = (state: any, action: AnyAction) => {
    return combineReducers({
        [StoreEntities.QUESTIONS]: questionsReducer,
        [StoreEntities.QUIZ]: quizReducer,
    })(state, action);
}