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
import ActorTableRow from "./ActorTableRow";

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
  { id: "name", label: "name", align: "center" },
  { id: "age", label: "age", align: "center" },
  { id: "date_of_join", label: "date_of_join", align: "center" },
  { id: "role", label: "role", align: "center" },
  { id: "action", label: "action", align: "left" },
];

// ----------------------------------------------------------------------

export default function ActorsList() {
  const { actorsList } = useSelector((state) => state.actores);
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

  const ActorsRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => ActorsRef.current,
  });

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(actorsList);
  }, [actorsList]);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(order, orderBy),
  });

  const denseHeight = dense ? 34 : 54;

  return (
    <>
      {/* ---- Action Buttons ---- */}

      <TableActions
        total={actorsList.length}
        handlePrint={handlePrint}
        filename="ActorsTable"
        fileSheet="Actors"
        currentTableRef={ActorsRef.current}
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
            ref={ActorsRef}
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
                  <ActorTableRow key={index} row={row} />
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
