import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCreateTransactionsMutation } from '../../redux/transactions/transactionOperation';
import Datetime from 'react-datetime';
import { toast } from 'react-toastify';
import NotifyContainer from '../NotifyContainer/NotifyContainer';
import {
  closeModalWindow,
  addTransactionSuccess,
} from '../../redux/globalSlice';
import { optionModalTransuction } from '../../helpers/constants';
import Button from '../Button/Button';
import SelectCustom from './Select/SelectCustom';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import Modal from '../Modal/Modal';
import sprite from '../../images/svg/sprite.svg';
import {
  accentPositiveCl,
  accentNegativeCl,
  size,
  accentDisableCl,
} from '../../stylesheet/utils/stylesVars';
import styled from 'styled-components';
import 'react-datetime/css/react-datetime.css';

const { defaultSpend, trTypeAdd, trTypeRemove } = optionModalTransuction;

export default function ModalAddTransactions() {
  const [checked, setChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sumTransaction, setSumTransaction] = useState();
  const [comment, setComment] = useState('');
  const [selectedOption, setSelectedOption] = useState(defaultSpend);

  const [addTransactions, { data }] = useCreateTransactionsMutation();

  const dispatch = useDispatch();

  const toggleChange = e => {
    setChecked(e);
    e ? setSelectedOption(trTypeAdd) : setSelectedOption(defaultSpend);
  };

  useEffect(() => {
    if (data?.code === 201) {
      NotifyContainer(toast(data?.payload?.message || 'Done!'));
      dispatch(addTransactionSuccess());
      dispatch(closeModalWindow());
    }
  }, [data, dispatch]);

  const handleSubmit = e => {
    const StatusType = checked ? trTypeAdd : trTypeRemove;
    e.preventDefault();
    addTransactions({
      category: selectedOption,
      comment: comment,
      sum: sumTransaction,
      date: selectedDate,
      transactionType: StatusType,
    });
  };

  return (
    <Modal>
      <div>
        <Title>Add transaction</Title>
        <Form onSubmit={handleSubmit} onReset={handleSubmit}>
          <Label border>
            <ToggleSwitch check={toggleChange} />
          </Label>
          {!checked && (
            <Label>
              <SelectCustom select={setSelectedOption} />
            </Label>
          )}
          <ContainerStyle>
            <Label fontWeight={700}>
              <input
                type="number"
                name="sumTransaction"
                defaultValue={sumTransaction}
                onChange={({ target: { value } }) => setSumTransaction(value)}
                placeholder="0.00"
                title="0.05, 0.50, 5.55, 50.50"
                step="0.01"
                min="0.01"
                required
              />
            </Label>
            <Label>
              <Datetime
                timeFormat={false}
                closeOnSelect={true}
                dateFormat={'DD.MM.YYYY'}
                value={selectedDate}
                onChange={date => setSelectedDate(date?._d)}
              />
              <svg>
                <use href={`${sprite}#icon-calendar`} />
              </svg>
            </Label>
          </ContainerStyle>
          <Label>
            <Textarea
              spellcheck={true}
              value={comment}
              onChange={({ target: { value } }) => setComment(value)}
              name="Comment"
              placeholder="Comment"
            />
          </Label>
          <Button primary type="submit">
            ADD
          </Button>
          <Button
            type="reset"
            outlined
            onClick={() => dispatch(closeModalWindow())}
          >
            CANCEL
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  height: 31px;
  ${size.tablet} {
    font-size: 30px;
    line-height: 1.5;
  }
`;

const Form = styled.form`
  font-family: 'Circe';
  font-style: normal;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const Label = styled.label`
  position: relative;
  display: block;
  margin-bottom: 40px;
  font-weight: ${p => p.fontWeight || '400'};
  border-bottom: ${p => (!p.border ? `1px solid ${accentDisableCl}` : 'none')};
  width: 280px;
  line-height: 0;
  input,
  textarea {
    padding: 0 20px;
    border: none;
    font-weight: inherit;
    line-height: 1.5;
    &:focus-visible {
      border-bottom: 1px solid ${accentPositiveCl};
    }
    &:focus:invalid {
      border-bottom: 1px solid ${accentNegativeCl};
    }
  }
  ${size.tablet} {
    width: 394px;
  }
`;
const ContainerStyle = styled.div`
  width: 280px;
  svg {
    position: absolute;
    top: 2px;
    right: 20px;
    width: 18px;
    height: 20px;
  }
  ${size.tablet} {
    width: 394px;
    display: flex;
    justify-content: space-between;
    label {
      width: 190px;
      &:first-child {
        input {
          text-align: center;
        }
      }
    }
    input {
      width: 100%;
    }
    svg {
      right: 20px;
    }
  }
`;

const Textarea = styled.textarea`
  font-size: inherit;
  width: 280px;
  height: 84px;
  max-height: 150px;
  resize: none;
  ${size.tablet} {
    width: 394px;
    height: 32px;
    max-height: 280px;
    padding: 0 20px;
  }
`;
