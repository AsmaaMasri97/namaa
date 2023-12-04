import { Suspense, lazy } from "react";
// components
import LoadingScreen from "../components/loading-screen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
(
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// ----------------------------------------------------------------------

// export const HomePage = Loadable(lazy(() => import("../pages/home/Home")));

// =============  @@@@ ADMIN PAGES @@@@ ============
export const LoginPage = Loadable(
  lazy(() => import("../pages/login/LoginPage"))
);

export const MoviesListPage = Loadable(
  lazy(() => import("../pages/dashboard/movies/MoviesPage"))
);

export const AddMoviePage = Loadable(
  lazy(() => import("../pages/dashboard/movies/AddMoviePage"))
);

export const ActorsListPage = Loadable(
  lazy(() => import("../pages/dashboard/actors/ActorsPage"))
);

export const AddActorPage = Loadable(
  lazy(() => import("../pages/dashboard/actors/AddActorPage"))
);
export const EditActorPage = Loadable(
  lazy(() => import("../pages/dashboard/actors/EditActorPage"))
);

export const EditMoviePage = Loadable(
  lazy(() => import("../pages/dashboard/movies/EditMoviePage"))
);

