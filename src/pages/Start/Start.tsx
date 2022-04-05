import { ContentContainer, StartContainer } from 'containers';
import { FC } from 'react';

export interface IStartProps {

}

export const Start:FC<IStartProps> = () => {
    return (
        <ContentContainer>
            <StartContainer />
        </ContentContainer>
    )
}