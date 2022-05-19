import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Datetime from 'react-datetime';
import Button from '../Button/Button';
import SelectCustom from './Select/SelectCustom';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import Modal from '../Modal/Modal';
import {
  accentPositiveCl,
  size,
  accentDisableCl,
} from '../../stylesheet/utils/stylesVars';
import styled from 'styled-components';
import sprite from '../../images/svg/sprite.svg';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datetime/css/react-datetime.css';
import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from '../../redux/globalSlice';

export default function ModalAddTransactions() {
  const [checked, setChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sumTransaction, setSumTransaction] = useState();
  const [comment, setComment] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  console.log(dispatch(openModalAddTransaction()));

  const options = [
    { value: 'Basic' },
    { value: 'Food' },
    { value: 'Car' },
    { value: 'Development' },
    { value: 'Children' },
    { value: 'Education' },
    { value: 'Other' },
  ];

  const handleSubmit = e => {
    console.log(e);
    notify();
    e.preventDefault();
  };

  const notify = () =>
    toast.error('Error, somesing go wrong', { autoClose: 3000 });

  return (
    <Modal>
      <div>
        <ToastContainer />
        <Title>Add transaction</Title>
        <Form onSubmit={handleSubmit}>
          <Label border>
            <ToggleSwitch check={setChecked} />
          </Label>
          {!checked && (
            <Label>
              <SelectCustom options={options} select={setSelectedOption} />
            </Label>
          )}
          <ContainerStyle>
            <Label fontWeight={700}>
              <input
                type="number"
                name="sum"
                value={sumTransaction}
                onChange={({ currentTarget: { numb } }) =>
                  setSumTransaction(numb)
                }
                placeholder="0.00"
                required
              />
            </Label>
            <Label>
              <Datetime
                timeFormat={false}
                closeOnSelect={true}
                dateFormat={'DD.MM.YYYY'}
                value={selectedDate}
                className={'datetime-picker__wrapper'}
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
              name="user-message"
              placeholder="Comment"
            />
          </Label>
          <Button primary type="submit">
            ADD
          </Button>
          <Button
            outlined
            onChange={() => dispatch(openModalAddTransaction(false))}
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
  min-height: 84px;
  max-height: 150px;
  resize: none;
  ${size.tablet} {
    width: 394px;
    min-height: 32px;
    max-height: 280px;
    padding: 0 20px;
  }
`;
