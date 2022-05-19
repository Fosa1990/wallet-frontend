import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';
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
        <Div>
          <AvatarImg src={avatar} alt="Avatar" />
          {/* <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={avatarChange}
          />
          <Label htmlFor="icon-button-file">
            <Icon
              width="15px"
              height="15px"
              iconName="icon-close"
              stroke="currentColor"
            />
          </Label> */}
        </Div>
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

const Div = styled.div`
  position: relative;
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

// const Input = styled.input`
//   display: none;
// `;
// const Label = styled.label`
//   position: absolute;
//   top: 35px;
//   right: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid green;
//   border-radius: 50%;
// `;
