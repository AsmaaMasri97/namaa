import { useState } from "react";
// helmet
import { Helmet } from "react-helmet-async";
// mui
import { Container } from "@mui/material";
//settings
import { useSettingsContext } from "../../../components/settings";
//sections
import HeaderSection from "../../../sections/general/HeaderPageSection";
import MoviesList from "../../../sections/dashboard/movies/list";
import { useNavigate } from "react-router-dom";

export default function MoviesPage() {
  const { themeStretch } = useSettingsContext();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("add");
  };

  return (
    <>
      <Helmet>
        <title>Movies</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "xl"}>
        {/* **** Tilte and add new Button **** */}

        <HeaderSection
          title="movies"
          labelBtn="add_new_movie"
          handleClick={handleClick}
        />

        {/***** Table *****/}

        <MoviesList />
      </Container>
    </>
  );
}
