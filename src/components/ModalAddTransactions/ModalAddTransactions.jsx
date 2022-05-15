import { ChangeEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  accentPositiveCl,
  size,
  accentNegativeCl,
  accentDisableCl,
} from '../../stylesheet/utils/stylesVars';
import styled from 'styled-components';
import sprite from '../../images/svg/sprite.svg';

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    setChecked(e.target.checked);
    console.log(e);
  };

  return (
    <Label>
      <AddSpan color={checked ? accentDisableCl : accentPositiveCl}>
        Доход
      </AddSpan>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
      <RemoveSpan color={checked ? accentNegativeCl : accentDisableCl}>
        Расход
      </RemoveSpan>
    </Label>
  );
};

export default function ModalAddTransactions() {
  const notify = () =>
    toast.error('Error, somesing go wrong', { autoClose: 3000 });
  return (
    <div>
      <Title>Добавить транзакцию</Title>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
      <Form>
        <ToggleSwitch />
        <label>
          <input type="text" />
        </label>
        <label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </label>
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
  margin-bottom: 40px;

  //  ${size.tablet} {
  //    right: 40px;
  //    bottom: 40px;
  //  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Circe';
  font-style: normal;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  margin-bottom: 40px;
`;
const AddSpan = styled.span`
  color: ${props => props.color};
`;
const RemoveSpan = styled.span`
  color: ${props => props.color};
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 44px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
