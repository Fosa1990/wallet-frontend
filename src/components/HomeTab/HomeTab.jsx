import styled from 'styled-components';
// import { size } from '../../stylesheet/utils/stylesVars';
// import { circleFont, accentBgCl } from '../../stylesheet/utils/stylesVars';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchFinances } from '../../redux/finances/financesOperations';
import getFinancesSelectors from '../../redux/finances/financesSelectors';
import CustomPagination from '../CustomPagination';
import { circleFont, size } from '../../stylesheet/utils/stylesVars';

import Media from 'react-media';
import Balance from '../Balance';
import HomeTabMobile from './HomeTabMobile';
import HomeTabTabletDesktop from './HomeTabTabletDesktop';

export default function HomeTab() {
  const finances = useSelector(getFinancesSelectors.getFinances);
  const totalDocuments = useSelector(getFinancesSelectors.getCountDocuments);
  const [page, setPage] = useSearchParams({ page: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFinances(page.get('page')));
    setIsLoading(true);
  }, [dispatch, page]);

  const onPageChange = pageNumber => {
    setPage({ page: pageNumber });
  };

  return (
    <Div>
      <Media query="(max-width: 767px)" render={() => <Balance />} />
      <Media query="(max-width: 768px)">
        {matches =>
          matches ? (
            <HomeTabMobile finances={finances} />
          ) : (
            <HomeTabTabletDesktop finances={finances} />
          )
        }
      </Media>
      { totalDocuments.totalDocuments && isLoading ? (
        <CustomPagination
          page={Number(page.get('page'))}
          itemsPerPage={totalDocuments.limitDocuments}
          totalResults={totalDocuments.totalDocuments}
          onPageChange={onPageChange}
        />
      ) : null }
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoInfo = styled.div`
  font: ${circleFont};
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;

  ${size.tablet} {
    font-size: 30px;
  }
`;

// &#8372;&nbsp; спецсимвол гривна+пробел
