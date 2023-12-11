import React, { useCallback, useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import { Box, Button, Paper } from "@mui/material";
import SelectMapping from "../../components/mapping/SelectMapping";
import ClientsData from "./ClientsData";
import axios from "axios";
import IsLoading from "../../components/useQuery/IsLoading";
import Error from "../../components/useQuery/Error";
import { useQuery } from "react-query";
import Search from "../../components/search/Search";

const Clients = () => {
  const status = ["Prospective", "Lead"];
  const industry = ["Technology", "Finance", "Manufacturing", "Healthcare", "Research and Development", "Retail", "Energy", "Logistics"];

  const retrieveClients = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await axios.get("http://localhost:3000/clients");
    return response.data;
  };

  const { data: clients, error, isLoading, refetch } = useQuery("clientsData", retrieveClients, {
    onSuccess: (data) => {
      setItems(data);
    },
  });

  const [items, setItems] = useState(clients);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const filterClients = useCallback(() => {
    let filteredClients = clients;

    if (selectedStatus === "" && selectedIndustry === "") {
      setItems(clients);
    }

    if (selectedStatus !== "") {
      filteredClients = filteredClients.filter((client) => client.status === selectedStatus);
    }
    if (selectedIndustry !== "") {
      filteredClients = filteredClients.filter((client) => client.industry === selectedIndustry);
    }

    setItems(filteredClients);
  }, [clients, selectedStatus, selectedIndustry]);

  const handleStatusChange = useCallback((value) => {
    setSelectedStatus(value);
  }, []);

  const handleIndustryChange = useCallback((value) => {
    setSelectedIndustry(value);
  }, []);

  const ResetClients = useCallback(() => {
    setSelectedIndustry("");
    setSelectedStatus("");
    refetch();
  }, [refetch]);

  useEffect(() => {
    setItems(clients);
  }, [clients]);

  const handleSearch = useCallback((searchTerm) => {
    const searchedResults = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setItems(searchedResults);
  },[clients]);


  return (
    <Layout>
      <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-between", mb: 2, p: 2 }}
      >
        <Box sx={{ display: 'flex', columnGap: 2 }}>
          {/* <AddTeam/> */}
          <Search items={items} onSearch={handleSearch}/>
        </Box>

        <Box sx={{ display: "flex", columnGap: 2 }}>
          <SelectMapping label="Industry" content={industry} onChange={handleIndustryChange} />
          <SelectMapping label="Status" content={status} onChange={handleStatusChange} />
          <Button variant="contained" size="small" onClick={filterClients}>
            Filter
          </Button>
          <Button variant="contained" size="small" sx={{ backgroundColor: 'red' }} onClick={ResetClients}>
            Reset
          </Button>
        </Box>
      </Box>

      <ClientsData clients={items} isLoading={isLoading} error={error} />
    </Layout>
  );
};

export default Clients;
