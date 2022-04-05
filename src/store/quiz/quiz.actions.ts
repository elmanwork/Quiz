import { QuizActionTypes } from "./quiz.types";
import { action } from "typesafe-actions";
import { ReduxAction } from "types";

export const setCurrentQuestionId = (data: string): ReduxAction<string> => action(QuizActionTypes.SET_CURRENT_QUESTION_ID, data);
export const setPassedTime = (data: Date): ReduxAction<Date> => action(QuizActionTypes.SET_PASSED_TIME, data);