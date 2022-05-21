import styled from 'styled-components';
import { circleFont, size } from '../../stylesheet/utils/stylesVars';

export default function NoInfo() {
  return (
    <StyledNoInfo>
      You haven`t any transactions. Click on the button below to add
      transactions
    </StyledNoInfo>
  );
}

const StyledNoInfo = styled.div`
  font: ${circleFont};
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;

  ${size.tablet} {
    font-size: 30px;
  }
`;
