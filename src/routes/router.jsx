import { lazy } from "react";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("../pages/Home")),
    errorElement: <div>404</div>,
  },
]);
