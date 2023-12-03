import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const SearchAutoComplete = () => {
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    );
  };

  return (
    <div style={{ width: 200 }}>
      <ReactSearchAutocomplete formatResult={formatResult} placeholder="Search here"/>
    </div>
  );
};

export default SearchAutoComplete;
