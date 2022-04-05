import { IQuestionsState } from "store/questions/questions.types";
import { StoreEntities } from "types/enums";

export interface IStateStore {
    [StoreEntities.QUESTIONS]: IQuestionsState,
}