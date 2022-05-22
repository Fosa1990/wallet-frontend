import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  accentTextCl,
  poppinsFont,
  size,
} from '../../stylesheet/utils/stylesVars';
import logo from '../../assets/images/svg/logo.svg';

export default function Logo() {
  return (
    <LogoLink to="/">
      <LogoIcon src={logo} />
      <Title>Wallet</Title>
    </LogoLink>
  );
}

const LogoLink = styled(NavLink)`
  display: flex;
  cursor: pointer;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
`;

const Title = styled.div`
  font-family: ${poppinsFont};
  font-size: 25px;
  font-weight: 700;
  color: ${props => props.color || accentTextCl};
  ${size.tablet} {
    font-size: 30px;
    line-height: 1, 5;
  }
`;
const LogoIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  ${size.tablet} {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;
