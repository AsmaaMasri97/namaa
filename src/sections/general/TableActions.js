// @mui
import { Button, Typography, Box, Stack } from "@mui/material";
// Print And Export
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useLocales } from "../../locales";
import Iconify from "../../components/iconify/Iconify";

const actionHolderSx = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function TableActions({
  total,
  handlePrint,
  filename,
  fileSheet,
  fileRef,
}) {
  const { translate } = useLocales();
  return (
    <Stack sx={{ ...actionHolderSx, mb: "24px" }}>
      <Box display="flex" alignItems="center">
        <Typography fontSize="16px" fontWeight="600" color="#BCBCBC">
          {translate("total")} :{total}
        </Typography>
      </Box>

      {/* ---- Action Buttons ---- */}
      <Box>
        {/* ---- Print---- */}
        <Button
          onClick={handlePrint}
          disableRipple
          sx={{
            borderColor: "secondary.light",
            borderRadius: "5px",
            mr: "12px",
          }}
        >
          <Iconify icon="fluent:print-20-regular" />
          <Typography fontSize="12px" fontWeight="400" color="#BCBCBC" ml="6px">
            {translate(`print`)}
          </Typography>
        </Button>

        {/* ---- Export---- */}

        <DownloadTableExcel
          filename={filename}
          sheet={fileSheet}
          currentTableRef={fileRef}
        >
          <Button
            disableRipple
            sx={{
              borderColor: "secondary.light",
              borderRadius: "5px",
            }}
          >
            <Iconify icon="ph:export-fill" />

            <Typography
              fontSize="12px"
              fontWeight="400"
              color="#BCBCBC"
              ml="6px"
            >
              {translate(`export`)}
            </Typography>
          </Button>
        </DownloadTableExcel>
      </Box>
    </Stack>
  );
}
