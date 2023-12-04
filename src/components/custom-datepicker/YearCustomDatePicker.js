import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/system";
import { Controller, useFormContext } from "react-hook-form";
import { useLocales } from "../../locales";
import Calender from "../iconify/Calender";
import dayjs from 'dayjs';
// ---------------------------------------------

const defaulttxtFieldSx = {
  width: "100%",
  paddingBottom: "24px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ECECEC",
    },
    "&:hover fieldset": {
      borderColor: "#ECECEC",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ECECEC",
    },
    "& .MuiIconButton-root": {
      "&:hover": {
        background: "#fdcd855c",
      },
    },
  },
};

const defaultPopperSx = {
  "& .MuiPaper-root": {
    // border: "1px solid black",
  },
  "& .MuiCalendarPicker-root": {
    // backgroundColor: "rgba(45, 85, 255, 0.4)"
    "& .MuiPickersPopper-root": {
      inset: "25% auto auto 60%!important",
    },
  },
  "& .Mui-selected": {
    // background:
    //     "linear-gradient(178.18deg, #FFD00D -13.56%, #FF6E3A 158.3%) !important",
    background: (theme) => theme.palette.primary.light,
    borderRadius: "8px !important",
    color: "#fff !important",
  },
  "& .MuiPickersDay-root:not(.Mui-selected)": {
    borderColor: "transparent",
    "&:hover": {
      background: (theme) => theme.palette.primary.light,
    },
  },
  "& .MuiPickersDay-dayWithMargin": {
    "&:hover": {
      background: "#fdcd855c",
    },
    color: "#5C5C5C",
    fontSize: "12px",
    fontWeight: 700,
  },
  "& .MuiPickersDay-dayOutsideMonth": {
    color: "#B3B2B2",
  },
  "& .MuiDayPicker-weekDayLabel": {
    color: (theme) => theme.palette.primary.light,
    fontWeight: 700,
    // borderRadius:'10px'
    // backgroundColor: "rgba(50, 136, 153)"
  },

  "& .MuiButton-root": {
    background: (theme) => theme.palette.primary.main,
    margin: "auto",
    color: "#fff",
    borderRadius: "100px",
    marginBottom: "20px",
    // padding: '12px 35px'
  },
  "& .MuiIconButton-root": {
    "&:hover": {
      background: (theme) => theme.palette.primary.light,
    },
  },
  "& .MuiTabs-root": {
    backgroundColor: (theme) => theme.palette.primary.light,
  },
  ".MuiBox-root": {
    margin: "0px",
  },
};

export default function YearCustomDatePicker({
  hideInput = false,
  textLabel,
  inputFormat,
  name,
  onChange,
  ...other
}) {
  const { control } = useFormContext();
  const { translate } = useLocales();
  return (
    <Box
      sx={{
        padding: hideInput ? "20px" : "0px",
        width: "100%",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error, invalid } }) => (
            <DatePicker
              {...field}
              label={translate("date_of_join")}
              fullWidth
              value={
                typeof field.value !== "number" ? dayjs(field.value) : dayjs(field.value)
              }
              sx={defaulttxtFieldSx}
              openTo="day"
              dayOfWeekFormatter={(day) => day.toUpperCase()}
              inputFormat={
                inputFormat === "MM/YYYY" ? inputFormat : "YYYY/MM/DD"
              }
              views={
                inputFormat === "MM/YYYY"
                  ? ["month", "year"]
                  : ["day", "month", "year"]
              }
              showDaysOutsideCurrentMonth
              components={{
                OpenPickerIcon: Calender,
              }}
             
              PopperProps={{
                sx: defaultPopperSx,
              }}
              renderInput={
                hideInput
                  ? ({ inputRef, InputProps }) => (
                      <Box ref={inputRef}>{InputProps?.endAdornment}</Box>
                    )
                  : (params) => (
                      <>
                        <TextField
                          {...params}
                          sx={defaulttxtFieldSx}
                          {...other}
                          error={!!error}
                          helperText={error?.message}
                       
                        />
                      </>
                    )
              }
            />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
}
