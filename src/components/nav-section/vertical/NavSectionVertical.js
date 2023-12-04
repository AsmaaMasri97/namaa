import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// @mui
import {
  ListItemText,
  Stack,
  useTheme,
  MenuItem,
  Divider,
} from "@mui/material";
// locales
import { useLocales } from "../../../locales";
//
import { StyledItem, StyledIcon } from "./styles";

import { useState } from "react";

// ----------------------------------------------------------------------

NavSectionVertical.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.array,
};

export default function NavSectionVertical({ data, sx, ...other }) {
  const { translate } = useLocales();
  const navigate = useNavigate();
  const theme = useTheme();
  const selectedTab = Number(localStorage.getItem("selectedTabIndex"));

  const [selectedIndex, setSelectedIndex] = useState(selectedTab);

  console.log(data);

  return (
    <Stack>
      <img
        src="/assets/images/logo/logo.jpg"
        alt="logo"
        style={{
          height: "80px",
          width: "80px",
          margin: "auto",
          marginBottom:"24px"
        }}
      />
      {data[0].items?.map((item, index) => {
        console.log(item);
        return (
          <StyledItem
            key={index}
            sx={
              `${item.path}` === `/${window.location.pathname.split("/")[2]}`
                ? {
                    backgroundColor: theme.palette.secondary.main,
                    color: "#FFFFFF",
                  }
                : {}
            }
            onClick={() => {
              setSelectedIndex(index);
              localStorage.setItem("selectedTabIndex", index);
              navigate(`/${item.subheader}${item.path}`);
            }}
          >
            <StyledIcon
              sx={
                `${item.path}` === `/${window.location.pathname.split("/")[2]}`
                  ? {
                      color: "#FFFFFF",
                    }
                  : { color: "#BCBCBC" }
              }
            >
              {item.icon}
            </StyledIcon>
            <ListItemText
              primary={translate(item.title)}
              primaryTypographyProps={{
                color:
                  `${item.path}` ===
                  `/${window.location.pathname.split("/")[2]}`
                    ? "#FFFFFF"
                    : "#BCBCBC",
                padding: "0px",
                component: "span",
                fontWeight: 500,
                fontSize: "12px",
              }}
            />
          </StyledItem>
        );
      })}
    </Stack>
  );
}
