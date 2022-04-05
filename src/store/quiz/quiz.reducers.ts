import { AnyAction } from "redux";
import { IQuizState, QuizActionTypes } from "./quiz.types";

const initialState: IQuizState = {
    currentId: null,
    pastTime: null,
}

export const quizReducer = (state = initialState, action: AnyAction): IQuizState => {
    switch (action.type) {
        case QuizActionTypes.SET_CURRENT_QUESTION_ID:
            return {
                ...state,
                currentId: action.payload,
            };
        case QuizActionTypes.SET_PASSED_TIME:
            return {
                ...initialState,
                pastTime: action.payload,
            };
        default:
            return state;
    }
}