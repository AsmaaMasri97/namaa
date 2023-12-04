// mui
import { Stack, Typography, Button } from "@mui/material";
//locales
import { useLocales } from "../../locales";

//-------------------STYLE---------------------------
const buttonSx = {
  background: "#227284",
  borderRadius: "8px",
  color: "#FFFFFF",
};

//-------------------JSX-----------------------------

export default function HeaderPageSection({ title, labelBtn, handleClick }) {
  const { translate } = useLocales();

  return (
    <Stack direction="row" justifyContent="space-between" mb="36px">
      <Typography variant="h5">{translate(title)}</Typography>

      <Button sx={{ ...buttonSx }} onClick={handleClick}>
        {translate(labelBtn)}
      </Button>
    </Stack>
  );
}
