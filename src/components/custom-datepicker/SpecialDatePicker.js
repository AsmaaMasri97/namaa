import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Calender from "../iconify/Calender";
import { useState } from "react";
import { Box } from "@mui/system";
import { Controller, useFormContext } from "react-hook-form";
import { Dialog, Modal } from "@mui/material";
import { useLocales } from "../../locales";
import moment from "moment/moment";
import dayjs from "dayjs";
import CustomCalender from "../iconify/CustomCalender";

// ---------------------------------------------

const defaulttxtFieldSx = {
    width: "100%",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "rgba(255, 204, 99, 0.3)",
        },
        "&:hover fieldset": {
            borderColor: "rgba(255, 204, 99, 0.3)",
        },
        "&.Mui-focused fieldset": {
            borderColor: "rgba(255, 204, 99, 0.3)",
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
            inset: "20% auto auto 60%!important",
        },
    },
    "& .Mui-selected": {
        background:
            "linear-gradient(178.18deg, #FFD00D -13.56%, #FF6E3A 158.3%) !important",
        color: "#fff !important",
    },
    "& .PrivatePickersSlideTransition-root": {},
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
        color: "rgb(255, 166, 0)",
        fontWeight: 700,
        // backgroundColor: "rgba(50, 136, 153)"
    },
    "& .MuiPickersDay-root:not(.Mui-selected)": {
        borderColor: "transparent",
    },
    "& .MuiButton-root": {
        background:
            "linear-gradient(178.18deg, #FFD00D -13.56%, #FF6E3A 158.3%) !important",
        margin: "auto",
        color: "#fff",
        borderRadius: "100px",
        marginBottom: "20px",
        padding: "12px 35px",
    },
    "& .MuiIconButton-root": {
        "&:hover": {
            background: "#fdcd855c",
        },
    },
    "& .MuiTabs-root": { backgroundColor: "rgba(120, 120, 120, 0.4)" },
    ".MuiBox-root": {
        margin: "0px",
    },
};

export default function SpecialDatePicker({
    hideInput = false,
    textLabel,
    inputFormat,
    onChange,
    open,
    ...other
}) {
    const today = new Date();
    const [value, setValue] = useState("");
    const { translate } = useLocales();
    return (
        <Box
            sx={{
                padding: hideInput ? "20px" : "0px",
                width: "100%",
            }}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DatePicker
                    fullWidth
                    sx={defaulttxtFieldSx}
                    openTo="day"
                    open={open}
                    // onClose={}
                    // formatDate={(date) => moment(date).format()}
                    dayOfWeekFormatter={(day) => day.toUpperCase()}
                    // label={translate(`${textLabel}`)}
                    // InputProps={{
                    //     classes: { root: classes.root }
                    // }}
                    inputFormat={
                        inputFormat === "MM/YYYY" ? inputFormat : "DD/MM/YYYY"
                    }
                    // value={value['$d']}
                    // onChange={(e) => {
                    //     console.log(e)
                    //     onChange(moment(value).format())
                    // }}
                    // onChange={() => setValue(dayjs(field.value).format())}
                    views={
                        inputFormat === "MM/YYYY"
                            ? ["month", "year"]
                            : ["day", "month", "year"]
                    }
                    showDaysOutsideCurrentMonth
                    components={{ OpenPickerIcon: CustomCalender, }}
                    componentsProps={{
                        actionBar: { actions: ["accept"] },
                    }}
                    PopperProps={{
                        sx: defaultPopperSx,
                    }}
                    // InputProps={{ sx: { "& .MuiSvgIcon-root": { color: "red" } } }}
                    renderInput={
                        (params) => (
                            <TextField
                                sx={defaulttxtFieldSx}
                                id="dateOfBirth"
                                {...other}
                                {...params}
                            />
                        )
                    }
                />

            </LocalizationProvider>
        </Box>
    );
}
