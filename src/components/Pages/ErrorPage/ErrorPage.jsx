import styled from 'styled-components';
import { accentTextCl, circleFont, size } from '../../../styles/stylesVars';

export default function ErrorPage() {
  return (
    <ErrorWrap>
      <ErrorText>404 Page not found</ErrorText>
    </ErrorWrap>
  );
}

const ErrorWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;
const ErrorText = styled.div`
  font-family: ${circleFont};
  font-size: 14px;
  color: ${accentTextCl};
  ${size.tablet} {
    font-size: 30px;
  }
`;
