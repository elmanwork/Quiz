import { FC, ReactChild, ReactFragment, ReactPortal } from "react";
import { Layout } from 'antd';
import ContentContainerStyle from "./ContentContainer.style";

const { Content } = Layout;

export interface IContentContainerProps {
    children: boolean | ReactChild | ReactFragment | ReactPortal
}

export const ContentContainer: FC<IContentContainerProps> = ({
  children,
}: IContentContainerProps) => {
  return <Content style={ContentContainerStyle.content}>{children}</Content>
};
