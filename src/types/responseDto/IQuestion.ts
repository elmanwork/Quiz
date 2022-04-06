import { QuestionType } from "types/enums";
import { IQuestionOption } from "types";

export interface IQuestion {
    id: string;
    question: string;
    type: QuestionType;
    options?: IQuestionOption[];
    correctOption: string[];
}