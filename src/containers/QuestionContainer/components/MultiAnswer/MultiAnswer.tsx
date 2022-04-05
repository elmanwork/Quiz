import {FC} from 'react';
import { IQuestion } from 'types/responseDto';

interface IMultiAnswerProps {
    question: IQuestion
}

export const MultiAnswer: FC<IMultiAnswerProps> = ({question}: IMultiAnswerProps) => {
    return <div>Multi</div>
}