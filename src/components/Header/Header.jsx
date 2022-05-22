import styled from 'styled-components';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import LogoutButton from '../LogoutButton';
import Avatar from '../Avatar';
import Logo from '../Logo';
import { openModalLogout } from '../../redux/globalSlice';
import { ROUTES } from '../../helpers/constants';
import {
  textPlcholderCl,
  accentBgCl,
  circleFont,
  size,
} from '../../stylesheet/utils/stylesVars';
import exit from '../../images/svg/exit.svg';

export default function Header({ children, onClick, ...props }) {
  const userName = useSelector(authSelectors.getUserName);
  const name = userName.split('')[0].toUpperCase() + userName.slice(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('click  for logout');
    dispatch(openModalLogout());
  };

  return (
    <StyledHeader>
      <Logo to={`/${ROUTES.HOME}`} />
      <UserInfo>
        <Avatar />
        <UserName>{name || 'User'} </UserName>
        <LogoutButton type="button" onClick={handleClick}>
          <ExitIcon src={exit} />
          <Media
            query="(min-width: 768px)"
            render={() => <span>Logout</span>}
          />
        </LogoutButton>
      </UserInfo>
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

const UserInfo = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  font-family: ${circleFont};
  font-size: 18px;
  line-height: 1, 47;
  color: ${props => props.color || textPlcholderCl};
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
