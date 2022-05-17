import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';
import { circleFont, accentBgCl } from '../../stylesheet/utils/stylesVars';

import Media from 'react-media';
import HomeTabMobile from './HomeTabMobile';
import HomeTabTabletDesktop from './HomeTabTabletDesktop';

export default function HomeTab() {
  return (
    <Media query="(max-width: 768px)">
      {matches => (matches ? <HomeTabMobile /> : <HomeTabTabletDesktop />)}
    </Media>
  );
}

// &#8372;&nbsp; спецсимвол гривна+пробел
