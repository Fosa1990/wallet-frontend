import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Media from 'react-media';
import PropTypes from 'prop-types';
import authSelectors from '../../redux/auth/authSelectors';
import { openModalLogout } from '../../redux/globalSlice';
import LogoutButton from '../LogoutButton';
import Avatar from '../Avatar';
import Logo from '../Logo';
import Icon from '../Icon';
import { ROUTES } from '../../utils/constants';
import {
  textPlcholderCl,
  accentBgCl,
  circleFont,
  size,
} from '../../styles/stylesVars';

export default function Header({ children, onClick, ...props }) {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const name = userName.split('')[0].toUpperCase() + userName.slice(1);

  const handleClick = () => {
    dispatch(openModalLogout());
  };

  return (
    <Wrap>
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
    </Wrap>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  props: PropTypes.any,
};

const Wrap = styled.div`
  width: 100%;
  background: ${accentBgCl};
  display: flex;
  justify-content: center;
  height: 60px;
  padding: 15px 20px;
  ${size.tablet} {
    height: 80px;
    padding: 20px 32px;
  }
  ${size.desktop} {
    padding: 20px 16px;
  }
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  ${size.tablet} {
    width: 768px;
  }
  ${size.desktop} {
    width: 1280px;
  }
  /* width: 100%; */

  /* background: ${accentBgCl};
  ${size.tablet} {
      width: 768px;
    height: 80px;
    padding: 20px 32px;
  }
  ${size.desktop} {
    width: 1280x;
    padding: 20px 16px;
  } */
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
