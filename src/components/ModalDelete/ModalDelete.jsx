import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import Button from '../Button';
import authSelectors from '../../redux/auth/authSelectors';
import { closeModalWindow } from '../../redux/globalSlice';
import {
  size,
  accentBgCl,
  accentPositiveCl,
  accentTextCl,
  borderBtnCl,
  poppinsFont,
} from '../../stylesheet/utils/stylesVars';
import styled from 'styled-components';
import { useDeleteTransactionsMutation } from '../../redux/transactions/transactionOperation';
import { addTransactionSuccess } from '../../redux/globalSlice';

export default function ModalLogout({ id }) {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const name = userName.split('')[0].toUpperCase() + userName.slice(1);
  const [deleteTransaction, result] = useDeleteTransactionsMutation();

  const onDeleteHandler = () => {
    console.log('id', id);
    console.log('click');
    console.log('result', result);
    deleteTransaction(id);
    dispatch(addTransactionSuccess());
    onCancelDelete();
  };

  const onCancelDelete = e => {
    dispatch(closeModalWindow());
  };

  return (
    <Modal
      height="100vh"
      heightContent="auto"
      width="320px"
      padding="20px 10px"
      paddingTab="40px 73px"
    >
      <Wrapper>
        <Text>
          {name ?? 'User'}, are you sure you want to delete transaction?
        </Text>
        <ButtonWrap>
          <Button
            primary
            color={accentBgCl}
            background={accentPositiveCl}
            width="100px"
            marginBtm="0px"
            onClick={onDeleteHandler}
          >
            Yes
          </Button>
          <Button
            outlined
            color={borderBtnCl}
            width="100px"
            onClick={onCancelDelete}
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
