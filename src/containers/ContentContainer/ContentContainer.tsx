import { FC, ReactChild, ReactFragment, ReactPortal } from "react";

export interface IContentContainerProps {
    children: boolean | ReactChild | ReactFragment | ReactPortal
}

export const ContentContainer: FC<IContentContainerProps> = ({
  children,
}: IContentContainerProps) => {
  return <>{children}</>
};
