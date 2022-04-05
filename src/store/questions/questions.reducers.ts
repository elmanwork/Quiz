import { AnyAction } from "redux";
import { IQuestionsState, QuestionsActionTypes } from "./questions.types";

const initialState: IQuestionsState = {
    isFetching: false,
    questions: [],
    error: null,
}

export const questionsReducer = (state = initialState, action: AnyAction): IQuestionsState => {
    switch (action.type) {
        case QuestionsActionTypes.FETCH_QUESTIONS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case QuestionsActionTypes.FETCH_QUESTIONS_SUCCESS:
            return {
                ...initialState,
                questions: action.payload,
            };
        case QuestionsActionTypes.FETCH_QUESTIONS_ERROR:
            return {
                ...initialState,
                error: action.payload,
            };
        default:
            return state;
    }
}