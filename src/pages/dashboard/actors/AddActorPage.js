// helmet
import { Helmet } from "react-helmet-async";
//locales
import { useLocales } from "../../../locales";
// form
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// mui
import { Container, Box, Grid, MenuItem, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
//settings
import { useSettingsContext } from "../../../components/settings";
// components
import FormProvider, {
  RHFTextField,
  RHFSelect,
} from "../../../components/hook-form";
import YearCustomDatePicker from "../../../components/custom-datepicker/YearCustomDatePicker";
//navigate
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { createActor } from "../../../redux/slices/actors";
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
      border: "1px solid #ECECEC",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #ECECEC",
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

// var

const roles = [
  { id: 1, name: "Background role" },
  { id: 2, name: "Cameo" },
  { id: 3, name: "Recurring character" },
  { id: 4, name: "Side character" },
  { id: 5, name: "Series regula" },
];

export default function AddActorPage() {
  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  const { actorsList } = useSelector((state) => state.actores);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const AddNewActor = Yup.object().shape({
    name: Yup.string().required(translate("name_is_required")),
    age: Yup.string().required(translate("age_is_required")),
    join_date: Yup.string().required(translate("date_of_join_is_required")),
    role: Yup.string().required(translate("role_is_required")),
  });

  const defaultValues = {
    name: "",
    age: "",
    join_date: "",
    role: "",
  };

  const methods = useForm({
    resolver: yupResolver(AddNewActor),
    defaultValues,
  });

  const { reset, setError, setValue, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      dispatch(createActor({ id: actorsList.length + 1, ...data }));
      toast(translate("actor_added_successfully"))
      navigate("/dashboard");
    } catch (error) {
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
        <title>{translate("add_new_actor")}</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "xl"}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Box sx={mainHolderSx}>
            <Typography variant="h4" mb="24px">
              {translate("add_new_actor")}
            </Typography>

            <Grid container columnSpacing={{ xs: "40px", lg: "48px" }}>
              {/********** Name****************** */}
              <Grid item xs={12} lg={6}>
                <RHFTextField
                  name="name"
                  label={translate("name")}
                  type="text"
                  sx={txtFieldBorderStyle}
                />
              </Grid>

              {/****************** Role****************** **/}

              <Grid item xs={12} lg={6}>
                <RHFSelect
                  name="role"
                  label={translate("role")}
                  sx={{
                    ...txtFieldBorderStyle,
                  }}
                  SelectProps={{
                    displayEmpty: true,
                    native: false,
                  }}
                  onChange={(e) => {
                    setValue("role", e.target.value, {
                      shouldValidate: true,
                    });
                  }}
                >
                  {roles?.map((role, index) => (
                    <MenuItem key={index} value={role.name}>
                      {role.name}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </Grid>

              {/****************** Age****************** */}

              <Grid item xs={12} lg={6}>
                <RHFTextField
                  name="age"
                  label={translate("age")}
                  type="number"
                  sx={txtFieldBorderStyle}
                />
              </Grid>

              {/*=======  Join Date   ======= */}

              <Grid item xs={12} lg={6}>
                <YearCustomDatePicker
                  name="join_date"
                  sx={{ ...txtFieldBorderStyle, width: "100%" }}
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

              <LoadingButton
                onClick={handleCancel}
                size="large"
                type="submit"
                variant="Contained"
                sx={cancelButtonStyle}
              >
                {translate("cancel")}
              </LoadingButton>
            </Box>
          </Box>
        </FormProvider>
      </Container>
    </>
  );
}
