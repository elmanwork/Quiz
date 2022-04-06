import { IQuestion } from 'types/responseDto';
import { IQuestionOption } from 'types';

export interface IAnswer extends Omit<IQuestion, "options">  {
    selectedOption?: IQuestionOption | IQuestionOption[] | string;
}