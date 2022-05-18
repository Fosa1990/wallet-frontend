// import PropTypes from 'prop-types';
import { Pagination } from 'react-pagination-bar';
import { createGlobalStyle } from 'styled-components';

const StylePagination = createGlobalStyle`
.custom-root {
  margin-right: auto;
  margin-left: auto;
  width: 280px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.custom-root ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}


.custom-item {
  width: 35px;
  height: 35px;
  font-size: 12px;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.custom-item:hover,
.custom-item:focus-visible {
  color: #ffffff;
  background-color: #24cca7;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  outline: none;
  cursor: pointer;
}

.custom-item--active {
  color: #ffffff;
  background-color: #24cca7;
}

.custom-item--disable {
  opacity: 0.4;
}

.custom-progress-bar {
  max-width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #24cca7;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
} 
`;

const CustomPagination = ({
  page = 1,
  totalResults = 300,
  // onPageСhange
}) => {
  return (
    <>
      <StylePagination />
      <Pagination
        initialPage={page}
        itemsPerPage={20}
        totalItems={totalResults}
        pageNeighbours={1}
        startLabel={'<<'}
        endLabel={'>>'}
        nextLabel={'>'}
        prevLabel={'<'}
        withProgressBar={true}
        onPageСhange={() => {
          console.log('onPageСhange');
        }}
        customClassNames={{
          rpbRootClassName: 'custom-root',
          rpbItemClassName: 'custom-item',
          rpbItemClassNameDisable: 'custom-item--disable',
          rpbItemClassNameActive: 'custom-item--active',
          rpbProgressClassName: 'custom-progress-bar',
        }}
      />
    </>
  );
};

// CustomPagination.propTypes = {
//   page: PropTypes.number.isRequired,
//   totalResults: PropTypes.number.isRequired,
//   onPageСhange: PropTypes.func.isRequired,
// };

export default CustomPagination;
