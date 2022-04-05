import { IQuestion } from "types/responseDto";

export enum QuestionsActionTypes {
    FETCH_QUESTIONS_LOADING = "@@questions/FETCH_QUESTIONS_LOADING",
    FETCH_QUESTIONS_SUCCESS = "@@questions/FETCH_QUESTIONS_SUCCESS",
    FETCH_QUESTIONS_ERROR = "@@questions/FETCH_QUESTIONS_ERROR",
    FETCH_QUESTIONS = "@@questions/FETCH_QUESTIONS",
}

export interface IQuestionsState {
    isFetching: boolean;
    questions?: IQuestion[];
    error: string | null;
}