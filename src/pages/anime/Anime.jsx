import React, { useContext, useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { Box, Button, Paper } from "@mui/material";
import PageTitle from "../../components/pageTitle/PageTitle";
import ExportExcel from "../../export/ExportExcel";
import { DarkModeContext } from "../../context/DarkModeProvider";
import axios from "axios";
import { useQuery } from "react-query";
import SelectMapping from "../../components/mapping/SelectMapping";
import Search from "../../components/search/Search";
import DisplayAnime from "./DisplayAnime";
import AddAnime from "../../components/modal/AddAnime";

const Anime = () => {
  const status = ["watching", "completed", "planned", "paused"];
  const score = ["1", "2", "3", "4", "5"];

  const { dashtheme, toggleTheme } = useContext(DarkModeContext);

  const retrieveAnimes = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await axios.get("http://localhost:3000/animes");
    return response.data;
  };

  const {
    data: animes,
    error,
    isLoading,
    refetch,
  } = useQuery("animesData", retrieveAnimes, {
    onSuccess: (data) => {
      setItems(data);
    },
  });

  const [items, setItems] = useState(animes);
  useEffect(() => {
    setItems(animes);
  }, [animes]);

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <PageTitle title="Anime" />
        <Box sx={{ display: "flex", columnGap: 1 }}>
          <AddAnime />
          <ExportExcel
            //   excelData={items}
            filename={"Anime_Report"}
          />
        </Box>
      </Box>

      <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-between", mb: 1, p: 2 }}
        className={`App ${dashtheme}`}
      >
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <Search
            items={items}
            //   onSearch={handleSearch}
          />
        </Box>

        <Box sx={{ display: "flex", columnGap: 2 }}>
          <SelectMapping
            label="Status"
            content={status}
            // onChange={handleRolesChange}
          />
          <SelectMapping
            label="Score"
            content={score}
            // onChange={handleDepartmentChange}
          />
          <Button
            variant="contained"
            size="small"
            //   onClick={filterTeams}
          >
            Filter
          </Button>
        </Box>
      </Box>

      <DisplayAnime
        animes={items}
        isLoading={isLoading}
        error={error}
        setItems={setItems}
      />
    </Layout>
  );
};

export default Anime;
