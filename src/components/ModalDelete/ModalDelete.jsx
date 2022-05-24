import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import authSelectors from '../../redux/auth/authSelectors';
import {
  addTransactionSuccess,
  closeModalWindow,
} from '../../redux/globalSlice';
import { useDeleteTransactionsMutation } from '../../redux/transactions/transactionOperation';
import NotifyContainer from '../NotifyContainer/NotifyContainer';
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

export default function ModalDelete({ id }) {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const [deleteTransaction, { data }] = useDeleteTransactionsMutation();
  const name = userName.split('')[0].toUpperCase() + userName.slice(1);

  useEffect(() => {
    if (data?.code === 200) {
      NotifyContainer(toast(data?.payload?.message || 'Done!'));
      dispatch(closeModalWindow());
      dispatch(addTransactionSuccess());
    }
  }, [data, dispatch]);

  const onDeleteHandler = () => {
    deleteTransaction(id);
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
            onClick={() => dispatch(closeModalWindow())}
          >
            No
          </Button>
        </ButtonWrap>
      </Wrapper>
    </Modal>
  );
}

ModalDelete.propTypes = {
  id: PropTypes.string.isRequired,
};

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
