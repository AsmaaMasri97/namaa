import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { Box, Stack, Drawer, Divider, Button, Typography } from "@mui/material";
// hooks
import useResponsive from "../../../hooks/useResponsive";
// config
import { NAV } from "../../../config";
// components
import { NavSectionVertical } from "../../../components/nav-section";
//
import navConfig from "./config";
import { useLocales } from "../../../locales";
// ---------------------------------------------------------------------

const logoutSx = {
  border: "1px solid #549EB6",
  borderRadius: "2px",
  height: "38px",
  width: "80%",
  display: "flex",
  alignItems: "center",
  color: "#549EB6",
  margin: "auto",
  marginTop: "40px",
};

const dividerSx = {
  marginTop: "40px",
  paddingLeft: "5px",
  paddingRight: "5px",
};

const labelSx = { color: "#227284", fontSize: "14px", fontWeight: 400 };
// ----------------------------------------------------------------------

NavVertical.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function NavVertical({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  const { translate } = useLocales();

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const renderContent = (
    <>
      <Stack
        //  spacing={3}
        sx={{
          // pt: 9,
          // pb: 2,
          // px: 2.5,
          // paddingLeft: "33px",
          paddingTop: "4px",
          flexShrink: 0,
        }}
      ></Stack>

      <NavSectionVertical data={navConfig} />

   

      <Button sx={{ ...logoutSx }} onClick={handleLogout}>
        {translate("logout")}
      </Button>

      <Box sx={{ flexGrow: 1 }} />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD, paddingTop: "66px" },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
              ...(isDesktop && {}),
              border: "1px solid none",
              filter: "drop-shadow(4px 4px 4px rgba(226, 226, 226, 0.25))",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
