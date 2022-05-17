// import styled from 'styled-components';
// import { size } from '../../stylesheet/utils/stylesVars';
// import { circleFont, accentBgCl } from '../../stylesheet/utils/stylesVars';
import React, { /* useState,*/ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFinances } from '../../redux/finances/financesOperations';
import getFinances from '../../redux/finances/financesSelectors';

import Media from 'react-media';
import HomeTabMobile from './HomeTabMobile';
import HomeTabTabletDesktop from './HomeTabTabletDesktop';

export default function HomeTab() {
  const finances = useSelector(getFinances);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFinances());
  }, [dispatch]);

  console.log(finances);

  return (
    <Media query="(max-width: 768px)">
      {matches => (matches ? <HomeTabMobile /> : <HomeTabTabletDesktop />)}
    </Media>
  );
}

// &#8372;&nbsp; спецсимвол гривна+пробел
