import PropTypes from 'prop-types';
import { Pagination } from 'react-pagination-bar';
import { createGlobalStyle } from 'styled-components';
import {
  accentBgCl,
  duration,
  timingFunc,
  accentPositiveCl,
} from '../../stylesheet/utils/stylesVars';

export default function CustomPagination({
  page,
  itemsPerPage,
  totalResults,
  onPageСhange,
}) {
  return (
    <>
      <StylePagination />
      <Pagination
        initialPage={page}
        itemsPerPage={itemsPerPage}
        totalItems={totalResults}
        pageNeighbours={1}
        startLabel={'<<'}
        endLabel={'>>'}
        nextLabel={'>'}
        prevLabel={'<'}
        withProgressBar={true}
        onPageСhange={onPageСhange}
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
}

const StylePagination = createGlobalStyle`
.custom-root {
  margin-right: auto;
  margin-left: auto;
  width: 280px;
  padding-top: 20px;
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
  background-color:${accentBgCl};
  transition: all ${duration} ${timingFunc}; 
}

.custom-item:hover,
.custom-item:focus-visible {
  color: ${accentBgCl};
  background-color: ${accentPositiveCl};
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  outline: none;
  cursor: pointer;
}

.custom-item--active {
  color: ${accentBgCl};
  background-color: ${accentPositiveCl};
}

.custom-item--disable {
  opacity: 0.4;
}

.custom-progress-bar {
  max-width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: ${accentPositiveCl};
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  transition: width ${duration} ${timingFunc};
}
`;

CustomPagination.propTypes = {
  page: PropTypes.number,
  itemsPerPage: PropTypes.number,
  totalResults: PropTypes.number,
  onPageСhange: PropTypes.func,
};
