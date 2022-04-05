import { RootState } from "store";
import { IQuizState } from "./quiz.types";

export const getQuiz = (state: RootState): IQuizState => state.quiz;
