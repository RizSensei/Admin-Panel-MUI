import React from "react";
import { Button, Tooltip } from "@mui/material";
import * as XLSX from "xlsx";

const ExportExcel = ({ excelData, filename }) => {
  const exportToExcel = async () => {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(excelData);
    XLSX.utils.book_append_sheet(wb, ws, filename);

    XLSX.writeFile(wb, filename + ".xlsx");
  };
  return (
    <div>
      <Tooltip title="Excel Export">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#28a745" }}
          onClick={(e) => exportToExcel(filename)}
        >
          Export
        </Button>
      </Tooltip>
    </div>
  );
};

export default ExportExcel;
