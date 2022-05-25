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

LogoutButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  props: PropTypes.any,
};

const StyledLogoutBtn = styled.button`
  height: 28px;
  padding-left: 8px;
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 1.47;
  color: ${props => props.color || textPlcholderCl};
  background-color: transparent;
  border: none;
  transition: transform 0.25s ${timingFunc};
  cursor: pointer;
  ${size.tablet} {
    max-width: 100%;
    height: 24px;
    padding-left: 12px;
    border: none;
  }
  &:hover,
  &:focus {
    color: ${borderBtnCl};
    stroke: ${borderBtnCl};
    transform: scale(1.1);
  }
`;
