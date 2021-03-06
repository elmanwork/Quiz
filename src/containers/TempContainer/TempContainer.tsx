import {FC} from 'react';
import { Button } from 'antd';

export interface ITempContainerProps {
    name?: string;
}

export const TempContainer: FC<ITempContainerProps> = ({name}:ITempContainerProps) => {
   return <div>Temp Component: {name}
     <Button type="primary">Primary Button</Button></div>
}