import { AnyAction } from "redux";
import { IQuizState, QuizActionTypes } from "./quiz.types";
import { IAnswer } from 'types';

const initialState: IQuizState = {
    currentId: null,
    pastTime: null,
    answers: [],
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
                ...state,
                pastTime: action.payload,
            };
        case QuizActionTypes.ADD_ANSWER:
            const { id } = action.payload as IAnswer;
            const copyAnswers = [...state.answers];
            const existedAnswer = copyAnswers.findIndex(answer => answer.id === id);
            if (existedAnswer >= 0) {
                copyAnswers[existedAnswer] = action.payload;
            } else {
                copyAnswers.push(action.payload);
            }
            return {
                ...state,
                answers: copyAnswers,
            };
        case QuizActionTypes.RESET_QUIZ:
            return {
                ...initialState,
            };
        default:
            return state;
    }
}