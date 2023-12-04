// helmet
import { Helmet } from "react-helmet-async";
// locales
import { useLocales } from "../../../locales";
// mui
import { Container } from "@mui/material";
//settings
import { useSettingsContext } from "../../../components/settings";
//sections
import HeaderSection from "../../../sections/general/HeaderPageSection";
import ActorsList from "../../../sections/dashboard/actors/list";
// navigate
import { useNavigate } from "react-router-dom";


export default function MoviesPage() {
  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("add");
  };

  return (
    <>
      <Helmet>
        <title>{translate("actors")}</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "xl"}>


        {/* **** Tilte and add new Button **** */}

        <HeaderSection
          title="actors"
          labelBtn="add_new_actor"
          handleClick={handleClick}
        />

        {/***** Table *****/}

        <ActorsList />
      </Container>
    </>
  );
}
