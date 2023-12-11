import { FormControl, InputAdornment, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const Search = ({ onSearch }) => {
  const [searchedItem, setSearchedItem] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    const searchTerm = event.target.value;
    setSearchedItem(searchTerm);
    onSearch(searchTerm);
  };


  return (
    <FormControl>
      <TextField
        size="small"
        variant="outlined"
        value={searchedItem}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ display: showClearIcon }}
            //   onClick={clearSearch}
            >
              <ClearIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default Search;
