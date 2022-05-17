import styled from 'styled-components';
import PropTypes from 'prop-types';
import { textPlcholderCl, size } from '../../stylesheet/utils/stylesVars';

export default function LogoutButton({ children, onClick, ...props }) {
  return <StyledLogoutBtn onClick={onClick}>{children}</StyledLogoutBtn>;
}

const StyledLogoutBtn = styled.button`
  cursor: pointer;
  display: flex;
  font-size: 18px;
  line-height: 1, 47;
  color: ${props => props.color || textPlcholderCl};
  background-color: transparent;
  border: none;
  padding-left: 12px;

  ${size.tablet} {
    border: none;
  }
`;

StyledLogoutBtn.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  props: PropTypes.any,
};
