// react
import { useState, useEffect, useRef } from "react";
// @mui
import {
  Table,
  Tooltip,
  TableBody,
  IconButton,
  TableContainer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// components
import Iconify from "../../../../components/iconify";
import Scrollbar from "../../../../components/scrollbar";
import {
  useTable,
  emptyRows,
  getComparator,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from "../../../../components/table";
// Print And Export
import { useReactToPrint } from "react-to-print";
// actions
import TableActions from "../../../../sections/general/TableActions";
// redux
import { useSelector } from "react-redux";
// table row
import MovieTableRow from "./MovieTableRow";

// --------- Style ------------
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  overflow: "unset",
  borderColor: theme.palette.primary.main,
  border: "1.99262px 1.99262px 9.9631px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  background: "#FFFFFF",
}));

const tableHolderSx = {
  minWidth: 800,
  borderCollapse: "separate",
  borderSpacing: "0px 16px",
  paddingRight: "19px",
  paddingLeft: "19px",
};

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "id", label: "id", align: "center" },
  { id: "title", label: "title", align: "center" },
  { id: "year", label: "year", align: "center" },
  { id: "number_of_actor", label: "number_of_actor", align: "center" },
  { id: "action", label: "action", align: "left" },
];

// ----------------------------------------------------------------------

export default function MoviesList() {
  const { moviesList } = useSelector((state) => state.movies);
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    //
    selected,
    onSelectAllRows,
    //
    onSort,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({
    defaultRowsPerPage: 5,
  });

  const MovieesRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => MovieesRef.current,
  });

  const [tableData, setTableData] = useState(moviesList);

  useEffect(() => {
    setTableData(moviesList);
  }, [moviesList]);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(order, orderBy),
  });

  const denseHeight = dense ? 34 : 54;

  return (
    <>
      {/* ---- Action Buttons ---- */}

      <TableActions
        total={moviesList.length}
        handlePrint={handlePrint}
        filename="MoviesTable"
        fileSheet="Movies"
        currentTableRef={MovieesRef.current}
      />
      <StyledTableContainer>
        <TableSelectedAction
          dense={dense}
          numSelected={selected.length}
          rowCount={tableData.length}
          onSelectAllRows={(checked) =>
            onSelectAllRows(
              checked,
              tableData.map((row) => row.name)
            )
          }
          action={
            <Tooltip title="Delete">
              <IconButton color="primary">
                <Iconify icon="eva:trash-2-outline" />
              </IconButton>
            </Tooltip>
          }
        />

        <Scrollbar>
          <Table
            size={dense ? "small" : "medium"}
            sx={{ ...tableHolderSx }}
            ref={MovieesRef}
          >
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={tableData.length}
              numSelected={selected.length}
              onSort={onSort}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  tableData.map((row) => row.name)
                )
              }
            />

            <TableBody>
              {dataFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <MovieTableRow key={index} row={row} />
                ))}

              <TableEmptyRows
                height={denseHeight}
                emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
              />
            </TableBody>
          </Table>
        </Scrollbar>

        <TablePaginationCustom
          count={tableData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
      </StyledTableContainer>
    </>
  );
}
// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator }) {
  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);

    if (order !== 0) return order;

    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  return inputData;
}
