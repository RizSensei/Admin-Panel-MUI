import React, { useCallback, useEffect, useMemo, useState } from "react";
import Layout from "../../layout/Layout";
import axios from "axios";
import { useQuery } from "react-query";
import { Box, Button, Paper } from "@mui/material";
import Search from "../../components/search/Search";
import SelectMapping from "../../components/mapping/SelectMapping";
import DisplayEmailData from "./DisplayEmailData";
import PageTitle from "../../components/pageTitle/PageTitle";
import ExportExcel from "../../export/ExportExcel";

const EmailPage = () => {
  const type = ["Primary", "Promotion", "Forum", "Socials", "Spam"];

  const [emailType, setEmailType] = useState("");
  const handleEmailTypeChange = useCallback((value) => {
    setEmailType(value);
  }, []);

  const retrieveEmails = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.get("http://localhost:3000/emails");
    return response.data;
  };

  const {
    data: emails,
    error,
    isLoading,
    refetch,
  } = useQuery("EmailsData", retrieveEmails);

  const [items, setItems] = useState(emails);

  useEffect(() => {
    setItems(emails);
  }, [emails]);

  const handleSearch = useCallback(
    (searchTerm) => {
      const searchedResults = emails.filter((email) =>
        email.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setItems(searchedResults);
    },
    [emails]
  );

  const filteredEmails = useMemo(() => {
    let filteredEmails = emails;

    if (emailType === "") {
      return emails;
    }

    if (emailType !== "") {
      filteredEmails = filteredEmails.filter(
        (email) => email.type.toLowerCase() === emailType.toLowerCase()
      );
    }

    return filteredEmails;
  }, [emails, emailType]);

  const filterEmails = () => {
    setItems(filteredEmails);
  };

  const ResetEmails = useCallback(() => {
    setEmailType("");
    setItems(emails);
    refetch();
  }, [refetch]);

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <PageTitle title="Email" />
        <ExportExcel excelData={items} filename={"Email_Report"} />
      </Box>
      <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "space-between", mb: 2, p: 2 }}
      >
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <Search items={items} onSearch={handleSearch} />
        </Box>

        <Box sx={{ display: "flex", columnGap: 2 }}>
          <SelectMapping
            label="Type"
            content={type}
            onChange={handleEmailTypeChange}
          />
          <Button variant="contained" size="small" onClick={filterEmails}>
            Filter
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "red" }}
            onClick={ResetEmails}
          >
            Reset
          </Button>
        </Box>
      </Box>
      <DisplayEmailData emails={items} isLoading={isLoading} error={error} />
    </Layout>
  );
};

export default EmailPage;
