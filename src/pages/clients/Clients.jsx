import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import Layout from "../../layout/Layout";
import { Box, Button, Paper } from "@mui/material";
import SelectMapping from "../../components/mapping/SelectMapping";
import ClientsData from "./ClientsData";
import axios from "axios";
import { useQuery } from "react-query";
import Search from "../../components/search/Search";
import PageTitle from "../../components/pageTitle/PageTitle";
import ExportExcel from "../../export/ExportExcel";

const Clients = () => {
  const status = ["Prospective", "Lead"];
  const industry = [
    "Technology",
    "Finance",
    "Manufacturing",
    "Healthcare",
    "Research and Development",
    "Retail",
    "Energy",
    "Logistics",
  ];

  const retrieveClients = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await axios.get("http://localhost:3000/clients");
    return response.data;
  };

  const {
    data: clients,
    error,
    isLoading,
    refetch,
  } = useQuery("clientsData", retrieveClients, {
    onSuccess: (data) => {
      setItems(data);
    },
  });

  const [items, setItems] = useState(clients);

  /** useReducer */
  const initialState = {
    selectedIndustry: "",
    selectedStatus: "",
  };

  const clientReducer = (state, action) => {
    switch (action.type) {
      case "RESET_CLIENT":
        return { ...state, selectedIndustry: "", selectedStatus: "" };

      case "SET_INDUSTRY":
        return { ...state, selectedIndustry: action.payload };

      case "SET_STATUS":
        return { ...state, selectedStatus: action.payload };
    }
  };

  const [state, dispatch] = useReducer(clientReducer, initialState);

  const filteredClients = useMemo(() => {
    let filteredClients = clients;

    if (state.selectedStatus === "" && state.selectedIndustry === "") {
      return clients;
    }

    if (state.selectedStatus !== "") {
      filteredClients = filteredClients.filter(
        (client) => client.status === state.selectedStatus
      );
    }
    if (state.selectedIndustry !== "") {
      filteredClients = filteredClients.filter(
        (client) => client.industry === state.selectedIndustry
      );
    }

    return filteredClients;
  }, [state]);

  const filterClients = () => {
    setItems(filteredClients);
  };

  const handleStatusChange = useCallback(
    (value) => {
      dispatch({ type: "SET_STATUS", payload: value });
    },
    [state.selectedStatus]
  );

  const handleIndustryChange = useCallback(
    (value) => {
      dispatch({ type: "SET_INDUSTRY", payload: value });
    },
    [state.selectedIndustry]
  );

  const ResetClients = useCallback(() => {
    dispatch({ type: "RESET_CLIENT" });
    refetch();
  }, []);

  useEffect(() => {
    setItems(clients);
  }, [clients]);

  const handleSearch = useCallback(
    (searchTerm) => {
      const searchedResults = clients.filter((client) =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setItems(searchedResults);
    },
    [clients]
  );

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <PageTitle title="Client" />
        <ExportExcel excelData={items} filename={"Client_Report"} />
      </Box>
      <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-between", mb: 2, p: 2 }}
      >
        <Box sx={{ display: "flex", columnGap: 2 }}>
          {/* <AddTeam/> */}
          <Search items={items} onSearch={handleSearch} />
        </Box>

        <Box sx={{ display: "flex", columnGap: 2 }}>
          <SelectMapping
            label="Industry"
            content={industry}
            // value={state.selectedIndustry}
            onChange={handleIndustryChange}
          />
          <SelectMapping
            label="Status"
            content={status}
            // value={state.selectedStatus}
            onChange={handleStatusChange}
          />
          <Button variant="contained" size="small" onClick={filterClients}>
            Filter
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "red" }}
            onClick={ResetClients}
          >
            Reset
          </Button>
        </Box>
      </Box>

      <ClientsData clients={items} isLoading={isLoading} error={error} />
    </Layout>
  );
};

export default Clients;
