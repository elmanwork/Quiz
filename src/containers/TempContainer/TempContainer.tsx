import {FC} from 'react';

export interface ITempContainerProps {
    name?: string;
}

export const TempContainer: FC<ITempContainerProps> = ({name}:ITempContainerProps) => {
    return <div>Temp Component: {name}</div>
}