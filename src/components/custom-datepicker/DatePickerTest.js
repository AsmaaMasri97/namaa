
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Calender from '../iconify/Calender';
import { useState } from 'react';
import { Box } from '@mui/system';
import { Controller, useFormContext } from 'react-hook-form';
import { useLocales } from '../../locales';
import moment from 'moment/moment';
import dayjs from 'dayjs';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
// ---------------------------------------------

const defaulttxtFieldSx = {
    width: '100%',
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
        '& .MuiIconButton-root': {
            '&:hover': {
                background: '#fdcd855c'
            }
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

            inset: '20% auto auto 60%!important'
        },
    },
    "& .Mui-selected": {
        background: 'linear-gradient(178.18deg, #FFD00D -13.56%, #FF6E3A 158.3%) !important',
        color: '#fff !important'
    },
    "& .PrivatePickersSlideTransition-root": {},
    "& .MuiPickersDay-dayWithMargin": {
        '&:hover': {
            background: '#fdcd855c'
        },
        color: '#5C5C5C',
        fontSize: '12px',
        fontWeight: 700
    },
    "& .MuiPickersDay-dayOutsideMonth": {
        color: '#B3B2B2',
    },
    "& .MuiDayPicker-weekDayLabel": {
        color: "rgb(255, 166, 0)",
        fontWeight: 700
        // backgroundColor: "rgba(50, 136, 153)"
    },
    '& .MuiPickersDay-root:not(.Mui-selected)': {
        borderColor: 'transparent',
    },
    "& .MuiButton-root": {
        background: 'linear-gradient(178.18deg, #FFD00D -13.56%, #FF6E3A 158.3%) !important',
        margin: 'auto',
        color: '#fff',
        borderRadius: "100px",
        marginBottom: '20px',
        padding: '12px 35px'
    },
    '& .MuiIconButton-root': {
        '&:hover': {
            background: '#fdcd855c'
        }
    },
    "& .MuiTabs-root": { backgroundColor: "rgba(120, 120, 120, 0.4)" },
    ".MuiBox-root": {
        margin: '0px'
    }
};


export default function DatePickerTest({ hideInput = false, textLabel, inputFormat, name, onChange = null, ...other }) {

    // const today = new Date();
    // const [value, setValue] = useState('');
    const { control } = useFormContext();
    const { translate } = useLocales()
    return (
        <Box sx={{
            padding: hideInput ? '20px' : '0px',
        }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <Controller
                    name={name}
                    control={control}
                    defaultValue={null}
                    // render={({ field, fieldState: { error, invalid } }) => (
                    //     // console.log(dayjs(field.value).format()),
                    //     // setValue(field.value['$d']),
                    //     // console.log(dayjs(field.value)),
                    //     <DatePicker
                    //         {...field}
                    //         fullWidth
                    //         value={
                    //             typeof field.value !== 'number' ? field.value : field.value
                    //         }
                    //         // value={
                    //         //     typeof field.value !== 'number' && moment(field.value).format() 
                    //         // }

                    //         // value={
                    //         //     typeof field.value !== 'number' && moment(field.value).format() 
                    //         // }
                    //         error={!!error}
                    //         helperText={error?.message}
                    //         sx={defaulttxtFieldSx}
                    //         openTo="day"
                    //         // formatDate={(date) => moment(date).format()}
                    //         dayOfWeekFormatter={(day) => day.toUpperCase()}
                    //         label={translate(`${textLabel}`)}
                    //         inputFormat={inputFormat === "MM/YYYY" ? inputFormat : "DD/MM/YYYY"}
                    //         // value={value['$d']}
                    //         // onChange={(e) => {
                    //         //     console.log(e)
                    //         //     onChange(moment(value).format())
                    //         // }}
                    //         // onChange={() => setValue(dayjs(field.value).format())}
                    //         views={inputFormat === "MM/YYYY" ? ["month", "year"] : ['day', "month", "year"]}
                    //         showDaysOutsideCurrentMonth
                    //         components={{
                    //             OpenPickerIcon: Calender,
                    //             // LeftArrowIcon: ArrowLeftIcon,
                    //             // RightArrowIcon: ArrowRightIcon
                    //         }}
                    //         componentsProps={{
                    //             actionBar: { actions: ["accept"] },
                    //         }}
                    //         PopperProps={{
                    //             sx: defaultPopperSx
                    //         }}
                    //         // InputProps={{ sx: { "& .MuiSvgIcon-root": { color: "red" } } }}
                    //         renderInput={hideInput ?
                    //             ({ inputRef, InputProps }) => (
                    //                 <Box ref={inputRef}>
                    //                     {InputProps?.endAdornment}
                    //                 </Box>
                    //             ) :
                    //             (params =>
                    //                 <TextField
                    //                     sx={defaulttxtFieldSx}
                    //                     error={!!error}
                    //                     // error={!!error && invalid}
                    //                     id="dateOfBirth"
                    //                     helperText={error?.message}
                    //                     {...other}
                    //                     {...params}

                    //                 />
                    //             )}
                    //     />
                    // )}


                    render={({
                        field: { onChange, value },
                        fieldState: { error, invalid }
                    }) => (
                        <DatePicker
                            label="Date of birth"
                            disableFuture
                            value={value}
                            onChange={(value) =>
                                onChange(moment(value).format())
                            }
                            renderInput={(params) => (
                                console.log(invalid),
                                (
                                    <TextField
                                        error={invalid}
                                        helperText={invalid ? error.message : null}
                                        id="dateOfBirth"
                                        variant="standard"
                                        margin="dense"
                                        fullWidth
                                        color="primary"
                                        autoComplete="bday"
                                        {...params}
                                    />
                                )
                            )}
                        />
                    )}
                />
            </LocalizationProvider>
        </Box>
    );
}



function convertDate(value) {
    const result = moment(value).format()
    return result
}






