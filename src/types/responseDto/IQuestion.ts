import { QuestionType } from "types/enums";

export interface IQuestion {
    question: string;
    type: QuestionType;
    options?: { text: string, letter: string}[];
    correctOption?: string[];
}