import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectMapping = ({ label, content, onChange }) => {
  const handleChange = (event) => {
    const selectedIndex = event.target.value;
    const selectedValue = content[selectedIndex];
    onChange(selectedValue);
  };
  return (
    <FormControl sx={{ minWidth: { xs: 150 } }}>
      <InputLabel>{label}</InputLabel>
      <Select size="small" label={label} onChange={handleChange}>
        {content?.map((item, index) => (
          <MenuItem value={index} key={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMapping;
