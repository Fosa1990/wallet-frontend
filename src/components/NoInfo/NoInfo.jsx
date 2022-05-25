import styled from 'styled-components';
import { circleFont, size } from '../../styles/stylesVars';

export default function NoInfo() {
  return (
    <StyledNoInfo>
      You haven`t any transactions. Click on the button below to add
      transactions
    </StyledNoInfo>
  );
}

const StyledNoInfo = styled.div`
  margin-top: 30px;
  font-family: ${circleFont};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  ${size.tablet} {
    width: 704px;
    padding: 5px;
    font-size: 30px;
  }
  ${size.desktop} {
    width: 715px;
  }
`;
