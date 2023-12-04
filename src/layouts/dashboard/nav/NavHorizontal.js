import PropTypes from "prop-types";
import { memo, useEffect } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Toolbar } from "@mui/material";
// config
import { HEADER } from "../../../config";
// utils
import { bgBlur } from "../../../utils/cssStyles";
// components
import { NavSectionHorizontal } from "../../../components/nav-section";
//
import navConfig from "./config";

// ----------------------------------------------------------------------

function NavHorizontal() {
  const theme = useTheme();
  useEffect(() => {
    console.log(navConfig);
  });
  return (
    <AppBar
      component="nav"
      color="transparent"
      sx={{
        boxShadow: 0,
        top: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
      }}
    >
      <Toolbar
        sx={{
          ...bgBlur({
            color: theme.palette.background.default,
          }),
        }}
      >
        <NavSectionHorizontal data={navConfig} />
      </Toolbar>
    </AppBar>
  );
}

export default memo(NavHorizontal);

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        width: 1,
        m: "auto",
        borderRadius: "50%",
        position: "absolute",
        ...sx,
      }}
      {...other}
    />
  );
}
