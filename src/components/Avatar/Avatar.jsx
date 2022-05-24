import { useSelector } from 'react-redux';
import styled from 'styled-components';
import authSelectors from '../../redux/auth/authSelectors';
import { size, accentBgCl } from '../../styles/stylesVars';

export default function Avatar() {
  const userName = useSelector(authSelectors.getUserName);
  const avatar = useSelector(authSelectors.getAvatarURL);
  const letter = userName.split('')[0].toUpperCase();
  const gravatar = avatar.split('.')[1];

  return (
    <>
      {avatar.includes(gravatar) ? (
        <UserAvatarDiv> {letter}</UserAvatarDiv>
      ) : (
        <AvatarImg src={avatar} alt="Avatar" />
      )}
    </>
  );
}

const UserAvatarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #ddd4d2;
  color: ${accentBgCl};
  border-radius: 50%;
  margin-right: 5px;
  ${size.tablet} {
    margin-right: 15px;
  }
`;
const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 5px;
  ${size.tablet} {
    margin-right: 15px;
  }
`;
