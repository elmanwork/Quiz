import { QuestionsActionTypes } from "./questions.types";
import { IQuestion } from "types/responseDto";
import { action } from "typesafe-actions";
import { ReduxAction } from "types";
import { Action } from "redux";

export const fetchQuestions = (): Action => action(QuestionsActionTypes.FETCH_QUESTIONS);
export const fetchQuestionsLoading = (): Action => action(QuestionsActionTypes.FETCH_QUESTIONS_LOADING);
export const fetchQuestionsSuccess = (data: IQuestion[]): ReduxAction<IQuestion[]> => action(QuestionsActionTypes.FETCH_QUESTIONS_SUCCESS, data);
export const fetchQuestionsError = (error: string): ReduxAction<string> => action(QuestionsActionTypes.FETCH_QUESTIONS_SUCCESS, error);
