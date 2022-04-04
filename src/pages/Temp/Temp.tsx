import { ContentContainer, TempContainer } from 'containers';
import { FC } from 'react';

export interface ITempProps {

}

export const Temp:FC<ITempProps> = () => {
    return (
        <ContentContainer>
            <TempContainer />
        </ContentContainer>
    )
}