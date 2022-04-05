import { RootState } from "store";
import { IQuestionsState } from "./questions.types";

export const getQuestions = (state: RootState): IQuestionsState => state.questions;