import { Route, Routes as ReactRoutes } from "react-router-dom";
import { ProtectedRoute } from "router";
import { FC } from "react";
import { Question, Start } from "pages";

export const Routes: FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Start />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/Quiz" element={<Question />} />
      </Route>
    </ReactRoutes>
  );
};
