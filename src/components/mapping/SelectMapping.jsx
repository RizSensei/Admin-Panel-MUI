import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const SelectMapping = ({ label, content, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const selectedIndex = event.target.value;
    if (selectedIndex !== undefined && selectedIndex >= 0 && selectedIndex < content.length) {
      const newSelectedValue = content[selectedIndex];
      setSelectedValue(newSelectedValue);
      onChange(newSelectedValue);
    }
  };

  return (
    <FormControl sx={{ minWidth: { xs: 150 } }}>
      <InputLabel>{label}</InputLabel>
      <Select size="small" label={label} value={selectedValue} onChange={handleChange}>
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
