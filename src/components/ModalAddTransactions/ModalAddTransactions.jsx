import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Datetime from 'react-datetime';
import Button from '../Button/Button';
import {
  accentPositiveCl,
  accentBgCl,
  size,
  accentNegativeCl,
  accentDisableCl,
} from '../../stylesheet/utils/stylesVars';
import styled from 'styled-components';
import sprite from '../../images/svg/sprite.svg';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datetime/css/react-datetime.css';
import SelectCustom from './Select/SelectCustom';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';

export default function ModalAddTransactions() {
  const [checked, setChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sumTransaction, setSumTransaction] = useState();
  const [comment, setComment] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedDate);

  const options = [
    { value: 'Основной', label: 'Основной' },
    { value: 'Еда', label: 'Еда' },
    { value: 'Авто', label: 'Авто' },
    { value: 'Развитие', label: 'Развитие' },
    { value: 'Дети', label: 'Дети' },
    { value: 'Образование', label: 'Образование' },
    { value: 'Остальные', label: 'Остальные' },
  ];

  const handleSubmit = e => {
    notify();
    e.preventDefault();
  };

  const notify = () =>
    toast.error('Error, somesing go wrong', { autoClose: 3000 });

  return (
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
        <Button outlined>CANCEL</Button>
      </Form>
    </div>
  );
}

const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  height: 31px;
  ${size.tablet} {
    font-size: 30px;
    line-height: 45px;
  }
`;

const Form = styled.form`
  font-family: 'Circe';
  font-style: normal;
  font-size: 18px;
  line-height: 27px;
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
  input {
    padding: 0 20px 4px;
    border: none;
    font-weight: inherit;
    appearance: none;
  }
  ${size.tablet} {
    width: 394px;
  }
`;
const ContainerStyle = styled.div`
  // border-bottom: 1px solid ${accentDisableCl};
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
  // line-height: inherit;
  border: none;
  width: 280px;
  min-height: 84px;
  max-height: 150px;
  padding: 0 20px;
  resize: none;
  ${size.tablet} {
    width: 394px;
    min-height: 32px;
    max-height: 280px;
  }
`;
