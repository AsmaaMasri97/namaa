import React, { useState } from "react";
// props type
import PropTypes from "prop-types";
//locales
import { useLocales } from "../../../../locales";
// @ Mui
import {
  TableRow,
  TableCell,
  Typography,
  IconButton,
  MenuItem,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// components
import Iconify from "../../../../components/iconify";
import MenuPopover from "../../../../components/menu-popover";
import CustomConfirmDialog from "../../../../components/confirm-dialog2/ConfirmDialog";
//navigate
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { deleteMovie, setMovieID } from "../../../../redux/slices/movies";
import { toast } from "react-toastify";

//--------------------------------------------------------------------------------------------

// ------- Styles --------

const cancelBtnSx = {
  background: "#FFFFFF",
  color: "#535353",
  border: "0.75px solid #BCBCBC",
  fontSize: "12px",
  fontWeight: "500",
  "&:hover": {
    bgcolor: "text.primary",
    color: (theme) =>
      theme.palette.mode === "light" ? "common.white" : "grey.800",
  },
  boxShadow: " 0px 0.75px 1.5px rgba(16, 24, 40, 0.05)",
  borderRadius: "6px",
  width: "120px",
  height: "36px",
};

const confirmBtnSx = {
  fontSize: "12px",
  fontWeight: "500",
  bgcolor: "error.main",
  "&:hover": {
    bgcolor: "error.main",
    color: (theme) =>
      theme.palette.mode === "light" ? "common.white" : "grey.800",
  },
  boxShadow: " 0px 0.75px 1.5px rgba(16, 24, 40, 0.05)",
  borderRadius: "6px",
  width: "120px",
  height: "36px",
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
}));

MovieTableRow.propTypes = {
  row: PropTypes.object,
};

export default function MovieTableRow(props) {
  const { row,  } = props;

  const { translate } = useLocales();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [openPopover, setOpenPopover] = useState(null);

  const [openConfirm, setOpenConfirm] = useState(false);

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleOpenPopover = (event) => {
    event.stopPropagation();
    setOpenPopover(event.currentTarget);
  };

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    dispatch(deleteMovie(row.id))
    toast(translate("deleted_successfully"))
    setOpenConfirm(false); 
  };

  // -------- JSX Code -------
  return (
    <StyledTableRow hover>
      <TableCell align="center"> {row.id} </TableCell>

      <TableCell align="center">{row.title}</TableCell>
      <TableCell align="center">{row.year}</TableCell>
      <TableCell align="center">{row.actors.length}</TableCell>

      <TableCell align="center">
        <IconButton
          color={openPopover ? "inherit" : "default"}
          onClick={handleOpenPopover}
        >
          <Iconify icon="eva:more-horizontal-fill" />
        </IconButton>
      </TableCell>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="top-left"
        sx={{
          width: "130px",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          border: "1px solid rgba(103, 103, 103, 0.1)",
        }}
      >
        <MenuItem
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/dashboard/movies/edit`);
             dispatch(setMovieID(row?.id))
   
          }}
        >
          <Iconify icon="eva:edit-fill" color="secondary" />
          {translate(`edit`)}
        </MenuItem>

        <MenuItem
          onClick={(e) => {
            e.stopPropagation();
            handleOpenConfirm();
            handleClosePopover();
          
          }}
        >
         <Iconify icon="material-symbols:delete" color="secondary" />
          <Typography ml="12px" fontSize="14px" fontWeight={400} color="red">
            {translate(`delete`)}
          </Typography>
        </MenuItem>
      </MenuPopover>

      <CustomConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title={translate("delete_item")}
        content={<>{translate("are_you_sure_you_want_to_delete_this_item")}</>}
        action={
          <>
            <Button
              sx={cancelBtnSx}
              onClick={() => {
                handleCloseConfirm();
              }}
            >
              {translate("cancel")}
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={confirmBtnSx}
              onClick={() => {
                handleCloseConfirm();
               
              }}
            >
              {translate("delete")}
            </Button>
          </>
        }
      />
    </StyledTableRow>
  );
}
