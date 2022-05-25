import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Datetime from 'react-datetime';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useCreateTransactionsMutation } from '../../redux/transactions/transactionOperation';
import {
  closeModalWindow,
  addTransactionSuccess,
} from '../../redux/globalSlice';
import NotifyContainer from '../NotifyContainer/NotifyContainer';
import Button from '../Button/Button';
import SelectCustom from './Select/SelectCustom';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import Modal from '../Modal/Modal';
import { optionModalTransuction } from '../../utils/constants';
import sprite from '../../assets/images/svg/sprite.svg';
import {
  accentDisableCl,
  accentNegativeCl,
  accentPositiveCl,
  circleFont,
  size,
  poppinsFont,
} from '../../styles/stylesVars';
import 'react-datetime/css/react-datetime.css';

const { add, trTypeRemove, trTypeAdd } = optionModalTransuction;

export default function ModalAddTransactions() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [sum, setSum] = useState();
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('');
  const [addTransactions, { data }] = useCreateTransactionsMutation();

  const toggleChange = e => {
    setChecked(e);
    e ? setCategory(add) : setCategory('');
  };

  useEffect(() => {
    if (data?.code === 201) {
      NotifyContainer(toast(data?.payload?.message || 'Done!'));
      dispatch(addTransactionSuccess());
      dispatch(closeModalWindow());
    }
  }, [data, dispatch]);

  const handleSubmit = e => {
    const transactionType = checked ? trTypeAdd : trTypeRemove;
    e.preventDefault();
    addTransactions({
      category,
      comment,
      sum,
      date,
      transactionType,
    });
  };

  return (
    <Modal>
      <div>
        <Title>Add transaction</Title>
        <Form onSubmit={handleSubmit}>
          <Label border>
            <ToggleSwitch check={toggleChange} />
          </Label>
          {!checked && (
            <Label>
              <SelectCustom select={setCategory} />
            </Label>
          )}
          <ContainerStyle>
            <Label fontWeight={700}>
              <input
                type="number"
                name="sum"
                defaultValue={sum}
                onChange={({ target }) => setSum(target.valueAsNumber)}
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
                value={date}
                onChange={date => setDate(date?._d)}
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
              name="comment"
              placeholder="Comment"
            />
          </Label>
          <Button primary type="submit">
            ADD
          </Button>
          <Button outlined onClick={() => dispatch(closeModalWindow())}>
            CANCEL
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

const Title = styled.h2`
  height: 31px;
  font-family: ${poppinsFont};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  ${size.tablet} {
    height: 40px;
    font-size: 30px;
    line-height: 1.5;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: ${circleFont};
  font-style: normal;
  font-size: 18px;
`;
const Label = styled.label`
  position: relative;
  display: block;
  width: 280px;
  margin-bottom: 40px;
  font-weight: ${p => p.fontWeight || '400'};
  border-bottom: ${p => (!p.border ? `1px solid ${accentDisableCl}` : 'none')};
  line-height: 0;
  input,
  textarea {
    padding: 0 20px;
    font-weight: inherit;
    line-height: 1.5;
    border: none;
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
      height: 32px;
    }
    svg {
      right: 20px;
    }
  }
`;
const Textarea = styled.textarea`
  height: 84px;
  width: 280px;
  max-height: 150px;
  font-size: inherit;
  resize: none;
  ${size.tablet} {
    width: 394px;
    height: 32px;
    max-height: 280px;
    padding: 0 20px;
  }
`;
