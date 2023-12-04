// routes
import { PATH_DASHBOARD } from "../../../routes/paths";

import SvgColor from "../../../components/svg-color";
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  movies: icon("movies"),
  actors: icon("actors"),
};

const navConfig = [
  // Admin
  // ----------------------------------------------------------------------
  {
    subheader: "dashboard/",
    items: [
      {
        title: "movies",
        icon: ICONS.movies,
        path: "/movies",
        subheader: "dashboard",
        index: "1",
      },
      {
        title: "actors",
        icon: ICONS.actors,
        path: "/actors",
        subheader: "dashboard",
        index: "2",
      },
    ],
  },
];

export default navConfig;
