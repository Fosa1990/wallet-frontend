import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import authSelectors from '../../redux/auth/authSelectors';
import { closeModalWindow } from '../../redux/globalSlice';
import { useLogoutUserMutation } from '../../redux/auth/authReduce';
import Modal from '../Modal';
import Button from '../Button';
import {
  size,
  accentBgCl,
  accentPositiveCl,
  accentTextCl,
  borderBtnCl,
  poppinsFont,
  modalBgCl,
} from '../../styles/stylesVars';

export default function ModalLogout() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const name = userName.split('')[0].toUpperCase() + userName.slice(1);
  const [logout] = useLogoutUserMutation();
  const onLogout = () => {
    logout();
    toast.success('You logged out');
    onCancelLogout();
  };

  const onCancelLogout = e => {
    dispatch(closeModalWindow());
  };

  return (
    <Modal
      height="100vh"
      heightContent="auto"
      width="320px"
      padding="20px 10px"
      paddingTab="40px 73px"
      color={modalBgCl}
    >
      <Wrapper>
        <Text>{name ?? 'User'}, are you sure you want to log out?</Text>
        <ButtonWrap>
          <Button
            primary
            color={accentBgCl}
            background={accentPositiveCl}
            width="100px"
            marginBtm="0px"
            onClick={onLogout}
          >
            Yes
          </Button>
          <Button
            outlined
            color={borderBtnCl}
            width="100px"
            onClick={onCancelLogout}
          >
            No
          </Button>
        </ButtonWrap>
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 280px;
  ${size.tablet} {
    width: 350px;
  }
`;
const Text = styled.h3`
  font-family: ${poppinsFont};
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: ${accentTextCl};
  padding: 0 20px;
  margin-bottom: 20px;
  ${size.tablet} {
    padding: 0;
    margin-bottom: 40px;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
