import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  size,
  accentPositiveCl,
  accentBgCl,
  iconBgActiveCl,
  circleFont,
  accentBtnShadowLightCl,
  accentBtnShadowDarkCl,
} from '../../styles/stylesVars';

export default function Button(props) {
  return <StyledButton type="submit" {...props} />;
}

Button.propTypes = {
  props: PropTypes.any,
};

const StyledButton = styled.button`
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
      margin-bottom: ${props => props.marginBtm || '20px'};
      color: ${props => props.color || accentBgCl};
      background: ${props => props.background || accentPositiveCl};
      border: none;
      &:hover,
      &:focus {
        box-shadow: inset 0px 0px 45px ${accentBtnShadowLightCl};
      }
    `}
  ${props =>
    props.outlined &&
    css`
      color: ${props => props.color || iconBgActiveCl};
      background: transparent;
      border: 1px solid ${props => props.color || iconBgActiveCl};
      &:hover,
      &:focus {
        box-shadow: inset 0px 0px 45px ${accentBtnShadowDarkCl};
      }
    `}
  ${size.tablet} {
    width: ${props => props.width || '300px'};
  }
`;
