import styled from 'styled-components';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  accentTextCl,
  textPlcholderCl,
  accentBgCl,
  poppinsFont,
  circleFont,
  size,
} from '../../stylesheet/utils/stylesVars';
import authSelectors from '../../redux/auth/authSelectors';
// import Icon from '../Icon';
import logo from '../../images/svg/logo.svg';
import exit from '../../images/svg/exit.svg';
/// підключити компонент модалки на логаут

export default function Header() {
  // const isModalLogoutOpen =  useSelector(modalSelectors.getLogoutOpen)
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const handleClick = () => {
    //     dispatch(
    //        action  which  sets isModalLogoutOpen =  true
    //    )
  };

  return (
    <StyledHeader>
      <Logo to="/dashboard">
        <LogoIcon src={logo} />
        <Title>Wallet</Title>
      </Logo>
      <UserInfo>
        <UserName>{userName || 'User'} </UserName>
        <LogoutBtn type="button" onClick={handleClick}>
          {/* <LogoutIcon /> */}
          <ExitIcon src={exit} />
          <Media
            query="(min-width: 768px)"
            render={() => <span>Logout</span>}
          />
        </LogoutBtn>
      </UserInfo>
      {/* {isModalLogoutOpen && <ModalLogout/>} */}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 15px 20px;
  background: ${accentBgCl};
  ${size.tablet} {
    height: 80px;
    padding: 20px 32px;
  }
  ${size.desktop} {
    padding: 20px 16px;
  }
`;

const Logo = styled(NavLink)`
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

const UserInfo = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  font-family: ${circleFont};
  font-size: 18px;
  line-height: 1, 47;
  color: ${props => props.color || textPlcholderCl};
`;
const LogoutBtn = styled.button`
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
const ExitIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: ${props => props.mRight || '8px'};
`;

const UserName = styled.p`
  color: ${textPlcholderCl};
  ${size.tablet} {
    padding: 6px 12px 6px 0;
    border-right: 1px solid ${textPlcholderCl};
  }
`;
