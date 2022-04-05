import { ContentContainer, QuestionContainer } from 'containers';
import { FC } from 'react';

export interface IQuestionProps {

}

export const Question:FC<IQuestionProps> = () => {
    return (
        <ContentContainer>
            <QuestionContainer />
        </ContentContainer>
    )
}