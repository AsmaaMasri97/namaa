// react
import { useState } from "react";
// helmet
import { Helmet } from "react-helmet-async";
//locales
import { useLocales } from "../../../locales";
// form
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// mui
import {
  Container,
  Box,
  Grid,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
//settings
import { useSettingsContext } from "../../../components/settings";
// components
import FormProvider, {
  RHFTextField,
  RHFSelect,
} from "../../../components/hook-form";
// navigate
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { createMovie } from "../../../redux/slices/movies";
//toast
import { toast } from "react-toastify";

// -----------------------------------------------------------------------------

//* ------- Styles --------

const txtFieldBorderStyle = {
  width: "100%",
  borderRadius: "4px",
  marginBottom: "24px",
  "& .MuiFormLabel-root": {
    color: "#BCBCBC",
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // borderColor: "rgba(255, 204, 99, 0.3)",
    },
    "&:hover fieldset": {
      border: "1px solid #327975",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #327975",
    },
  },
};

const mainHolderSx = {
  p: { xs: "40px 25px", md: "40px", lg: "32px" },
  background: "#FFFFFF",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
};

const loadingButtonStyle = {
  bgcolor: "#327975",
  height: "48px",
  color: "#FFFFFF",
  "&:hover": {
    bgcolor: "text.primary",
    color: (theme) =>
      theme.palette.mode === "light" ? "common.white" : "grey.800",
  },
  fontSize: "16px",
  fontWeight: 600,
  paddingLeft: "103px",
  paddingRight: "103px",
  marginBottom: { xs: "12px", md: "0px" },
};

const cancelButtonStyle = {
  border: "1px solid #327975",
  height: "48px",
  color: "red",
  "&:hover": {
    bgcolor: "text.primary",
    color: (theme) =>
      theme.palette.mode === "light" ? "common.white" : "grey.800",
  },
  fontSize: "16px",
  fontWeight: 600,
  paddingLeft: "103px",
  paddingRight: "103px",
  marginLeft: { xs: "0px", md: "12px" },
};

const boxButtonSx = {
  marginTop: "66px",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: { lg: "flex-end", xs: "center" },
};

export default function AddMoviePage() {

  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  const { actorsList } = useSelector((state) => state.actores);

  const { moviesList } = useSelector((state) => state.movies);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [selectedNames, setSelectedNames] = useState([]);

  const AddNewMovie = Yup.object().shape({
    title: Yup.string().required(translate("title_is_required")),
    year: Yup.string().required(translate("year_is_required")),
  });

  const defaultValues = {
    title: "",
    year: "",
    description: "",
    actors: [],
  };

  const methods = useForm({
    resolver: yupResolver(AddNewMovie),
    defaultValues,
  });

  const {
    reset,
    setError,
    setValue,
    handleSubmit,
  } = methods;

  const onSubmit = async (data) => {
    try {
      dispatch(createMovie({ id: moviesList.length + 1, ...data }));
      toast(translate("movie_added_successfully"))
      navigate("/dashboard/movies");
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  const handleCancel = () => {
    window.location.href = "/dashboard";
  };

  return (
    <>
      <Helmet>
        <title>{translate("add_new_movie")}</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "xl"}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Box sx={mainHolderSx}>
            <Typography variant="h4" mb="24px">
              {translate("add_new_movie")}
            </Typography>

            <Grid container columnSpacing={{ xs: "40px", lg: "48px" }}>
              {/********** Title****************** */}
              <Grid item xs={12} lg={6}>
                <RHFTextField
                  name="title"
                  label={translate("title")}
                  type="text"
                  sx={txtFieldBorderStyle}
                />
              </Grid>

              {/********** Year ****************** */}
              <Grid item xs={12} lg={6}>
                <RHFTextField
                  name="year"
                  label={translate("year")}
                  type="text"
                  sx={txtFieldBorderStyle}
                />
              </Grid>

              {/****************** Actors****************** */}

              <Grid item xs={12} lg={6}>
                <RHFSelect
                  multiple
                  name="actors"
                  label={translate("actors")}
                  sx={{
                    ...txtFieldBorderStyle,
                  }}
                  onChange={(e) => {
                    setValue("actors", e.target.value, {
                      shouldValidate: true,
                    });
                    setSelectedNames(e.target.value);
                  }}
                  SelectProps={{
                    multiple: true,
                    native: false,
                    value: selectedNames,
                  }}
                >
                  {actorsList?.map((actor, index) => (
                    <MenuItem key={index} value={actor.id}>
                      {actor.name}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </Grid>

              {/****************** Description ****************** */}

              <Grid item xs={12} lg={6}>
                <RHFTextField
                  multiline
                  rows={4}
                  name="description"
                  label={translate("description")}
                  type="text"
                  sx={{ ...txtFieldBorderStyle }}
                />
              </Grid>
            </Grid>

            {/****************** Buttons****************** **/}

            <Box sx={boxButtonSx}>
              <LoadingButton
                onClick={handleSubmit(onSubmit)}
                size="large"
                type="submit"
                variant="Contained"
                sx={loadingButtonStyle}
              >
                {translate("submit")}
              </LoadingButton>

              <Button
                onClick={handleCancel}
                size="large"
                type="submit"
                variant="Contained"
                sx={cancelButtonStyle}
              >
                {translate("cancel")}
              </Button>
            </Box>
          </Box>
        </FormProvider>
      </Container>
    </>
  );
}
