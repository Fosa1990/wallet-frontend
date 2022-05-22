import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
// import Button from '../../Button';

import {
  accentTextCl,
  circleFont,
  size,
  accentPositiveCl,
  accentBgCl,
  iconBgActiveCl,
} from '../../../stylesheet/utils/stylesVars';
import { ROUTES } from '../../../utils/constants';

const { LOGIN } = ROUTES;

export default function ErrorPage() {
  let location = useLocation();
  console.log('location', location);
  return (
    <ErrorWrap>
      <ErrorText>404 Page not found</ErrorText>
      <Button primary to={LOGIN}>
        Home
      </Button>
      <Button outlined to="/">
        Back
      </Button>
    </ErrorWrap>
  );
}

const ErrorWrap = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  backdrop-filter: blur(5px);
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.div`
  color: ${accentTextCl};
  font-family: ${circleFont};
  font-size: 14px;
  ${size.tablet} {
    font-size: 30px;
  }
`;
const Button = styled(Link)`
  width: ${props => props.width || '280px'};
  height: ${props => props.height || '50px'};
  border-radius: 20px;
  padding: 13px;
  font-family: ${circleFont};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.47;
  text-transform: uppercase;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      color: ${props => props.color || accentBgCl};
      background: ${props => props.background || accentPositiveCl};
      border: none;
      margin-bottom: ${props => props.marginBtm || '20px'};
      &:hover,
      &:focus {
        box-shadow: inset 0px 0px 45px rgba(255, 255, 255, 0.7);
      }
    `}
  ${props =>
    props.outlined &&
    css`
      color: ${props => props.color || iconBgActiveCl};
      border: 1px solid ${props => props.color || iconBgActiveCl};
      background: transparent;
      &:hover,
      &:focus {
        box-shadow: inset 0px 0px 45px rgba(36, 204, 167, 0.711);
      }
    `}

  ${size.tablet} {
    width: ${props => props.width || '300px'};
  }
`;
