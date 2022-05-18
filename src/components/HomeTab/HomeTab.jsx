// import styled from 'styled-components';
// import { size } from '../../stylesheet/utils/stylesVars';
// import { circleFont, accentBgCl } from '../../stylesheet/utils/stylesVars';
import React, { /* useState,*/ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFinances } from '../../redux/finances/financesOperations';
import  getFinancesSelectors  from '../../redux/finances/financesSelectors';

import Media from 'react-media';
import HomeTabMobile from './HomeTabMobile';
import HomeTabTabletDesktop from './HomeTabTabletDesktop';

export default function HomeTab() {
  const finances = useSelector(getFinancesSelectors.getFinances);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFinances());
  }, [dispatch]);

  return (
    <Media query="(max-width: 768px)">
      {matches => (matches ? <HomeTabMobile finances={finances}/> : <HomeTabTabletDesktop finances={finances}/>)}
    </Media>
  );
}

// &#8372;&nbsp; спецсимвол гривна+пробел
