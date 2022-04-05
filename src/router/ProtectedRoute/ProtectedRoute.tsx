import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserRoles } from "types/enums";

export interface IProtectedRouteProps {
    requiredRoles?: UserRoles[];
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({requiredRoles = []}: IProtectedRouteProps) => {
  const isAuth = true;
  return isAuth ? (
    <Outlet/>
  ) : (
        <Navigate
          to="/"
          state={{
            message: "",
            requestedPath: "",
          }}
          replace
        />
  );
};
