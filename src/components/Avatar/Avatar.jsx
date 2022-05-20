import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import styled from 'styled-components';
import { size, accentBgCl } from '../../stylesheet/utils/stylesVars';

export default function Avatar() {
  const userName = useSelector(authSelectors.getUserName);
  const avatar = useSelector(authSelectors.getAvatarURL);
  console.log(avatar);
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
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`;

const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 5px;
  ${size.tablet} {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`;
