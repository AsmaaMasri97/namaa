// @mui
import { alpha, styled } from "@mui/material/styles";
import { ListItemIcon, ListSubheader, ListItem } from "@mui/material";
// config
import { ICON, NAV } from "../../../config";

// ----------------------------------------------------------------------

export const StyledItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "caption",
})(({ theme }) => {
  return {
    position: "relative",
    textTransform: "capitalize",
    color: "#BCBCBC",
    height: NAV.H_DASHBOARD_ITEM,
    paddingLeft: "33px",
    paddingTop:"6px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#FFFFFF",
      cursor: "pointer",
    },
    "&:active": {
      backgroundColor: theme.palette.secondary.main,
     
    },
  };
});

// ----------------------------------------------------------------------

export const StyledIcon = styled(ListItemIcon)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: ICON.NAV_ITEM,
  height: ICON.NAV_ITEM,
  marginRight: "16px",
  color: "#FFFFFF",
});

// ----------------------------------------------------------------------
