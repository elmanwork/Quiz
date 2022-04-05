import { ContentContainer, ResultContainer } from 'containers';
import { FC } from 'react';

export interface IResultProps {

}

export const Result:FC<IResultProps> = () => {
    return (
        <ContentContainer>
            <ResultContainer />
        </ContentContainer>
    )
}