import { Navigate, useRoutes } from "react-router-dom";
//layout
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
//pages
import {
  LoginPage,
  MoviesListPage,
  AddMoviePage,
  ActorsListPage,
  AddActorPage,
  EditActorPage,
  EditMoviePage,
} from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: "/",
      children: [
        {
          element: <Navigate to="auth/login" replace />,
          index: true,
        },
        { path: "auth/login", element: <LoginPage /> },
      ],
    },

    // =============  @@@@ ADMIN @@@@ =========
    // Dashboard
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/movies" replace />, index: true },
        {
          path: "movies",
          children: [
            { path: "", element: <MoviesListPage /> },
            { path: "add", element: <AddMoviePage /> },
            { path: "edit", element: <EditMoviePage /> },
          ],
        },
        {
          path: "actors",
          children: [
            { path: "", element: <ActorsListPage /> },
            { path: "add", element: <AddActorPage /> },
            { path: "edit", element: <EditActorPage /> },
          ],
        },
      ],
    },
    { path: "/500", element: <></> },
    { path: "/404", element: <></> },
  ]);
}
