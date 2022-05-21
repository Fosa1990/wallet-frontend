import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  textPlcholderCl,
  size,
  iconBgCl,
} from '../../stylesheet/utils/stylesVars';

export default function LogoutButton({ children, onClick, ...props }) {
  return <StyledLogoutBtn onClick={onClick}>{children}</StyledLogoutBtn>;
}

const StyledLogoutBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 28px;
  font-size: 18px;
  line-height: 1, 47;
  color: ${props => props.color || textPlcholderCl};
  background-color: transparent;
  border: none;
  padding-left: 12px;

  ${size.tablet} {
    border: none;
    max-width: 100%;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    height: 30px;
  }
  &:hover {
    border-radius: 6px;
    box-shadow: inset 0px 0px 18px ${iconBgCl};
  }
`;

StyledLogoutBtn.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  props: PropTypes.any,
};
