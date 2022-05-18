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

  const ToggleSwitch = () => {
    const handleChange = e => {
      setChecked(e.target.checked);
    };

    return (
      <Label border>
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
        <ToggleSwitch />
        {!checked && (
          <Label>
            <SelectCustom options={options} select={setSelectedOption} />
          </Label>
        )}
        <ContainerStyle>
          <Label fontWeight={700}>
            <input
              type="number"
              name="email"
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
            class="modal__form-text"
            placeholder="Комментарий"
          />
        </Label>
        <Button primary type="submit">
          ДОБАВИТЬ
        </Button>
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
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
  svg {
    position: absolute;
    right: 20px;
    width: 18px;
    height: 20px;
  }
`;
const ContainerStyle = styled.div`
  ${size.tablet} {
    width: 394px;
    display: flex;
    justify-content: space-between;
    input {
      text-align: center;
      width: 190px;
    }
    svg {
      right: 11px;
    }
  }
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
`;

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
  box-shadow: ${p =>
    p.checked
      ? '0px 6px 15px rgba(36, 204, 167, 0.5)'
      : '0px 6px 15px rgba(255, 101, 150, 0.5)'};
`;

const Textarea = styled.textarea`
  font-size: inherit;
  // line-height: inherit;
  border: none;
  width: 280px;
  min-height: 84px;
  padding: 0 20px;
  resize: none;
  ${size.tablet} {
    width: 394px;
    min-height: 32px;
  }
`;
