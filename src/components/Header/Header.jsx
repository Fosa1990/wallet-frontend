import styled from 'styled-components';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import LogoutButton from '../LogoutButton';
import Avatar from '../Avatar';
import Logo from '../Logo';
import Icon from '../Icon';
import { openModalLogout } from '../../redux/globalSlice';
import { ROUTES } from '../../utils/constants';
import {
  textPlcholderCl,
  accentBgCl,
  circleFont,
  size,
} from '../../stylesheet/utils/stylesVars';

export default function Header({ children, onClick, ...props }) {
  const userName = useSelector(authSelectors.getUserName);
  const name = userName.split('')[0].toUpperCase() + userName.slice(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModalLogout());
  };

  return (
    <StyledHeader>
      <Logo to={`/${ROUTES.HOME}`} />
      <UserInfo>
        <Media query="(min-width: 768px)" render={() => <Avatar />} />
        <UserName>{name || 'User'} </UserName>
        <LogoutButton type="button" onClick={handleClick}>
          <ExitIcon>
            <Icon width="18px" height="18px" iconName="logout" />
          </ExitIcon>
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
  align-items: ${props => props.align || 'baseline'};
  font-family: ${circleFont};
  font-size: 18px;
  line-height: 1.47;
  color: ${props => props.color || textPlcholderCl};
  ${size.tablet} {
    align-items: ${props => props.align || 'center'};
  }
`;

const ExitIcon = styled.div`
  display: flex;
  align-items: center;
  ${size.tablet} {
    margin-right: ${props => props.mRight || '8px'};
  }
`;

const UserName = styled.p`
  color: ${textPlcholderCl};
  ${size.tablet} {
    padding-right: 12px;
    border-right: 1px solid ${textPlcholderCl};
  }
`;
