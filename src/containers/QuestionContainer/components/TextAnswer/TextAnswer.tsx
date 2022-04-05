import {FC} from 'react';
import { IQuestion } from 'types/responseDto';

interface ITextAnswerProps {
    question: IQuestion
}

export const TextAnswer: FC<ITextAnswerProps> = ({question}: ITextAnswerProps) => {
    return <div>Text</div>
}