import React, { useEffect, useState } from "react";
//helemt
import { Helmet } from "react-helmet-async";
// locale
import { useLocales } from "../../locales";
// form
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Grid,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import FormProvider, { RHFTextField } from "../../components/hook-form";
import Iconify from "../../components/iconify";
// Section Components
import ImageSection from "../../sections/login/ImageSection";
//navigate
import { useNavigate } from "react-router-dom";

// -----------------------------------------------------------------------------

//* ------- Styles --------
const txtFieldBorderStyle = {
  width: "100%",
  paddingBottom: "24px",
  "& .MuiFormLabel-root": {
    color: "#BCBCBC",
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-root": {
    height: "48px",
    fontSize: "14px",
    color: "#535353",
    "& fieldset": {
      borderRadius: "4px",
      borderColor: "#ECECEC",
    },
    "&:hover fieldset": {
      border: "1px solid #ECECEC",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid",
      borderColor: "primary.main",
    },
  },
  "& .MuiFormHelperText-root ": {
    fontSize: "12px",
  },
  "& .MuiSelect-select ": {
    display: "flex",
  },
};

const labelSx = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "12px",
  color: "#535353",
  width: "100%",
  textAlign: "left",
};

const holder = {
  position: "relative",
  p: {
    xs: "0px 0px",
    sm: "00px 0px",
    md: "00px 50px",
    lg: "0px 100px 0px 100px ",
  },
};

const inputsHolderSx = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
};

const imageSectionSx = {
  display: {
    xs: "none",
    md: "block",
  },
};
const loadingButtonStyle = {
  bgcolor: "#327975",
  height: "48px",
  color: "#FFFFFF",
  "&:hover": {
    bgcolor: "#327979",
  },
  fontSize: "16px",
  fontWeight: 600,
  paddingLeft: "103px",
  paddingRight: "103px",
};

export default function LoginPage() {
  const { translate } = useLocales();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const SignInSchema = Yup.object().shape({
    email: Yup.string().required(translate("email_is_required")),
    password: Yup.string().required(translate("password_is_required")),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(SignInSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
  } = methods;

  const onSubmit = async (data) => {
 
    try {
      navigate("/dashboard");
    } catch (error) {
      reset();
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);
  // ------------- JSX Code ----------
  return (
    <>
      <Helmet>
        <title>{translate("login")}</title>
      </Helmet>

      <Grid container height="100%">
        {/* ********************* Login Form Section ******************/}

        <Grid item xs={10} sm={8} md={6} mx="auto">
          {/* __________________ Login Form page ____________ */}
          <Stack sx={{ ...holder, justifyContent: "center", height: "100%" }}>
            {/*----------------- Form of login page -------------- */}
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ ...inputsHolderSx }}>
                <Typography sx={{ ...labelSx, mb: "8px" }}>
                  {translate("email")}
                </Typography>
                <RHFTextField
                  name="email"
                  sx={{
                    ...txtFieldBorderStyle,
                    width: "100%",
                  }}
                />

                <Typography sx={{ ...labelSx, mb: "8px" }}>
                  {translate("password")}
                </Typography>
                {/*------ password input -------- */}
                <RHFTextField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  sx={txtFieldBorderStyle}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          <Iconify
                            icon={
                              showPassword
                                ? "eva:eye-outline"
                                : "eva:eye-off-outline"
                            }
                            color={showPassword ? "#FFCC63" : "#BCBCBC"}
                            width="25px"
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* -------- Submit Button and sign ip link --------- */}
              <Stack sx={{ marginX: "auto" }}>
                {/* --- Next Button --- */}
                <LoadingButton
                  fullWidth
                  disableRipple
                  size="large"
                  type="submit"
                  variant="Contained"
                  sx={{
                    ...loadingButtonStyle,
                  }}
          
                >
                  {translate("sign_in")}
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Stack>
        </Grid>

        {/* ************ image Section ************/}
        <Grid item sm={6} sx={{ ...imageSectionSx }}>
          <ImageSection height={657} />
        </Grid>
      </Grid>
    </>
  );
}
