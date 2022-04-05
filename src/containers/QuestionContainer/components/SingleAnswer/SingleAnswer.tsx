import {FC} from 'react';
import { IQuestion } from 'types/responseDto';

interface ISingleAnswerProps {
    question: IQuestion
}

export const SingleAnswer: FC<ISingleAnswerProps> = ({question}: ISingleAnswerProps) => {
    return <div>Single</div>
}