import {FC} from 'react';
import { Button } from 'antd';

export interface IResultContainerProps {
    name?: string;
}

export const ResultContainer: FC<IResultContainerProps> = ({name}:IResultContainerProps) => {
   return <div>Temp Component: {name}
     <Button type="primary">Primary Button</Button></div>
}