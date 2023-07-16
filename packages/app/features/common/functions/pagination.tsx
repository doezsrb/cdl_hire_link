import CustomPaginationMobile from '../components/CustomPaginationMobile/CustomPaginationMobile'

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
    <CustomPaginationMobile
      numPages={numPages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    />
  )
}

export default CustomPagination
