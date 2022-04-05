import { Route, Routes as ReactRoutes } from "react-router-dom";
import { ProtectedRoute } from "router";
import { Question } from "pages";
import { FC } from "react";

export const Routes: FC = () => {
  return (
    <ReactRoutes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Question />} />
      </Route>
    </ReactRoutes>
  );
};
