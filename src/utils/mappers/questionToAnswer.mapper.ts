import { IAnswer, IQuestionOption } from "types";
import { IQuestion } from "types/responseDto";

export function questionToAnswerMapper(question: IQuestion, selectedOption?: IQuestionOption | IQuestionOption[] | string): IAnswer {
    const { options, ...rest } = question;
    const answer: IAnswer = {
        ...rest,
        selectedOption,
    };

    return answer;
}