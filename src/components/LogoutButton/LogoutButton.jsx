import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  textPlcholderCl,
  size,
  borderBtnCl,
  timingFunc,
} from '../../styles/stylesVars';

export default function LogoutButton({ children, onClick, ...props }) {
  return <StyledLogoutBtn onClick={onClick}>{children}</StyledLogoutBtn>;
}

const StyledLogoutBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 28px;
  font-size: 18px;
  line-height: 1.47;
  color: ${props => props.color || textPlcholderCl};
  background-color: transparent;
  border: none;
  padding-left: 8px;
  transition: transform 0.25s ${timingFunc};
  ${size.tablet} {
    border: none;
    max-width: 100%;
    padding-left: 12px;
    height: 24px;
  }
  &:hover,
  &:focus {
    color: ${borderBtnCl};
    stroke: ${borderBtnCl};
    transform: scale(1.1);
  }
`;

StyledLogoutBtn.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  props: PropTypes.any,
};
