import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  size,
  accentPositiveCl,
  accentBgCl,
  iconBgActiveCl,
  circleFont,
} from '../../stylesheet/utils/stylesVars';

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
    width: 300px;
  }
`;

export default function Button(props) {
  return <StyledButton type="submit" {...props} />;
}

Button.propTypes = {
  type: PropTypes.string,
  props: PropTypes.any,
};
