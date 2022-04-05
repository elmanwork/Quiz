import { IQuestion } from "types/responseDto";

export enum QuizActionTypes {
    SET_CURRENT_QUESTION_ID = "@@quiz/SET_CURRENT_QUESTION_ID",
    SET_PASSED_TIME = "@@questions/SET_PASSED_TIME",
}

export interface IQuizState {
    currentId: string | null;
    pastTime: Date | null;
}