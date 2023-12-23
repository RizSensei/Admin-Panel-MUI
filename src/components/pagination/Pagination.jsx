import { Box, Button, ButtonGroup } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Pagination = ({ list, setItems }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentProducts = list.slice(indexOfFirstRecord, indexOfLastRecord);
  
    const nPages = Math.ceil(list.length / recordsPerPage);
  
    useEffect(() => {
      setItems(currentProducts);
    }, [currentPage]);
  
    const pageNumbers = [...Array(nPages).keys()];
  
    const goToNextPage = () => {
      if (currentPage < nPages) setCurrentPage(currentPage + 1);
    };
  
    const goToPrevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    return (
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 5 }}>
        <ButtonGroup variant="text" size="small">
          <Button onClick={goToPrevPage} className="page-link" sx={{ color: 'gray' }}>
            Prev
          </Button>
          {pageNumbers.map((pageNum) => (
            <Button
              key={pageNum + 1}
              onClick={() => setCurrentPage(pageNum + 1)}
              sx={{
                bgcolor: currentPage === pageNum + 1 ? 'gray' : 'white',
                color: currentPage === pageNum + 1 ? 'white' : 'gray',
              }}
            >
              {pageNum + 1}
            </Button>
          ))}
          <Button onClick={goToNextPage} className="page-link" sx={{ color: 'gray' }}>
            Next
          </Button>
        </ButtonGroup>
      </Box>
    );
  };

export default Pagination