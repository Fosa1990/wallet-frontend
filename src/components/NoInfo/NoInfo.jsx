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
  font-family: ${circleFont};
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  ${size.tablet} {
    padding: 5px;
    font-size: 30px;
    width: 704px;
  }
  ${size.desktop} {
    width: 715px;
  }
`;
