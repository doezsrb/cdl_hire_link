import Pagination from '@mui/material/Pagination'
import React from 'react'
interface CustomPaginationProps {
  numPages: number
  setCurrentPage: Function
  currentPage: number
}
const CustomPagination = ({
  numPages,
  setCurrentPage,
  currentPage,
}: CustomPaginationProps) => {
  return (
    <Pagination
      count={numPages}
      onChange={(e: any, page: any) => setCurrentPage(page)}
      variant="outlined"
      shape="rounded"
    />
  )
}

export default CustomPagination
