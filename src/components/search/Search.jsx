import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";

const Search = ({ onSearch }) => {
  const [searchedItem, setSearchedItem] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    const searchTerm = event.target.value;
    setSearchedItem(searchTerm);
    onSearch(searchTerm);
  };

  const clearSearch = useCallback(() => {
    setSearchedItem("");
    // console.log("button clicked");
  },[searchedItem]);


  return (
    <FormControl>
      <TextField
        size="small"
        variant="outlined"
        value={searchedItem}
        placeholder="Search..."
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
              <ClearIcon onClick={clearSearch} sx={{cursor:'pointer'}}/>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default Search;
