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
import styled, { GlobalStyle } from 'styled-components';
import sprite from '../../images/svg/sprite.svg';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datetime/css/react-datetime.css';

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    setChecked(e.target.checked);
  };

  return (
    <Label>
      <Span color={!checked ? accentDisableCl : accentPositiveCl}>Доход</Span>
      <input
        checked={checked}
        type="checkbox"
        onChange={handleChange}
        className="visually-hidden"
      />
      <Switch>
        <Svg checked={checked}>
          {checked && <use href={`${sprite}#icon-add`} />}
          {!checked && <use href={`${sprite}#icon-remove`} />}
        </Svg>
      </Switch>
      <Span color={checked ? accentDisableCl : accentNegativeCl}>Расход</Span>
    </Label>
  );
};

export default function ModalAddTransactions() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sumTransaction, setSumTransaction] = useState();
  const [comment, setComment] = useState();
  console.log(selectedDate);

  const notify = () =>
    toast.error('Error, somesing go wrong', { autoClose: 3000 });

  return (
    <div>
      <ToastContainer />
      <Title>Добавить транзакцию</Title>
      {/* <button onClick={notify}>Notify!</button> */}
      <Form>
        <ToggleSwitch />
        <Label>
          <Input
            // type="text"
            // className={s.name}
            type="email"
            name="email"
            value={sumTransaction}
            onChange={({ currentTarget: { numb } }) => setSumTransaction(numb)}
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
        </Label>
        <Label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </Label>
        <Button primary>ДОБАВИТЬ</Button>
        <Button outlined>ОТМЕНА</Button>
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
`;
const Form = styled.form`
  font-family: 'Circe';
  font-size: 18px;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  line-height: 27px;
  cursor: pointer;
  margin-bottom: 40px;
`;
const Span = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.color};
`;
const Switch = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  background: ${accentBgCl};
  border-radius: 30px;
  border: 1px solid ${accentDisableCl};
  padding: 4px;
  transition: 300ms all;
`;
// const Checkbox = styled.input.attrs({ type: 'checkbox' })``;
const Svg = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 12px;
  border-radius: 44px;
  left: -4px;
  top: 50%;
  box-sizing: content-box;
  transition: 300ms transform;
  transform: ${p =>
    p.checked ? ' translate(0, -50%)' : 'translate(100%, -50%)'};
  background-color: ${p => (p.checked ? accentPositiveCl : accentNegativeCl)};
`;
const InputDefault = styled.input`
  border: none;
  width: 280px;
  border-bottom: 1px solid #000000;
`;
const Input = styled.input.attrs(props => ({ styled: InputDefault }))``;
const DatePicker = styled.div`
  .react-datetime-picker__wrapper {
    border: 1px solid red;
  }
`;
