import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import styled from 'styled-components';
import Icon from '../Icon';
import axios from 'axios';

// export const getAvatarURL = state => state.auth.user.avatarURL;  у authSelectors
export default function Avatar() {
  const userName = useSelector(authSelectors.getUserName);
  const avatar = useSelector(authSelectors.getAvatarURL);
  const letter = userName.split('')[0].toLocaleUpperCase();

  const avatarChange = e => {
    const file = e.target.files[0];
    console.log(e.target.files);
    const formData = new FormData();
    formData.append('image', file, file.name);

    axios.post('адресу скаже бекенд', formData).then().catch();
  };

  return (
    <>
      {avatar ? (
        <>
          <AvatarImg src={avatar} alt="Avatar" />
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={avatarChange}
          />
          <label htmlFor="icon-button-file">
            <Icon width="25px" height="25px" iconName="icon-add" />
          </label>
        </>
      ) : (
        <UserAvatarDiv> {letter}</UserAvatarDiv>
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
  color: white;
  border-radius: 50%;
  margin-right: 10px;
`;

const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Input = styled.input`
  display: none;
`;
