import { IQuestionsState } from "store/questions/questions.types";
import { IQuizState } from "store/quiz/quiz.types";
import { StoreEntities } from "types/enums";

export interface IStateStore {
    [StoreEntities.QUESTIONS]: IQuestionsState,
    [StoreEntities.QUIZ]: IQuizState,
}