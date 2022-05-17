import Modal from '../Modal';
import Button from '../Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  size,
  accentBgCl,
  accentPositiveCl,
  accentTextCl,
  borderBtnCl,
  poppinsFont,
} from '../../stylesheet/utils/stylesVars';
import { closeModalWindow } from '../../redux/globalSlice';

export default function ModalLogout() {
  const dispatch = useDispatch();

  const onModalClose = e => {
    dispatch(closeModalWindow());
  };

  return (
    <Modal>
      <Wrapper>
        <Text>Are you sure you want to log out?</Text>
        <ButtonWrap>
          <Button
            primary
            color={accentBgCl}
            background={accentPositiveCl}
            width="100px"
          >
            Yes
          </Button>
          <Button
            outlined
            color={borderBtnCl}
            width="100px"
            onClick={onModalClose}
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
    width: 400px;
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
