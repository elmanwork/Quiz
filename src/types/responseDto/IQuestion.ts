import { QuestionType } from "types/enums";

export interface IQuestion {
    id: string;
    question: string;
    type: QuestionType;
    options?: { text: string, letter: string}[];
    correctOption?: string[];
}