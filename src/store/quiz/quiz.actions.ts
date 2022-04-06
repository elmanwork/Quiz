import { QuizActionTypes } from "./quiz.types";
import { Action, action } from "typesafe-actions";
import { IAnswer, ReduxAction } from "types";

export const setCurrentQuestionId = (data: string): ReduxAction<string> => action(QuizActionTypes.SET_CURRENT_QUESTION_ID, data);
export const setPassedTime = (data: Date): ReduxAction<Date> => action(QuizActionTypes.SET_PASSED_TIME, data);
export const addAnswer = (data: IAnswer): ReduxAction<IAnswer> => action(QuizActionTypes.ADD_ANSWER, data);
export const resetQuiz = (): Action => action(QuizActionTypes.RESET_QUIZ);