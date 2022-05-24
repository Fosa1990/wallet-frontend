import { Rings } from 'react-loader-spinner';
import styled from 'styled-components';
import { accentPositiveCl, size } from '../../styles/stylesVars';

export default function Loader() {
  return (
    <StyledLoader>
      <Rings
        color={accentPositiveCl}
        width={150}
        height={150}
        ariaLabel="loading"
      />
    </StyledLoader>
  );
}

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  ${size.tablet} {
    width: 150px;
  }
`;
