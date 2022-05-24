import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import moment from 'moment';
import styled from 'styled-components';
import { useUpdateTransactionsMutation } from '../../redux/transactions/transactionOperation';
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
import {
  accentDisableCl,
  accentNegativeCl,
  accentPositiveCl,
  circleFont,
  size,
  poppinsFont,
} from '../../styles/stylesVars';
import 'react-datetime/css/react-datetime.css';
import sprite from '../../assets/images/svg/sprite.svg';

const { add, trTypeRemove, trTypeAdd } = optionModalTransuction;

export default function ModalAddTransactions({
  transactionId,
  dataTransaction,
}) {
  const [checked, setChecked] = useState(
    dataTransaction.transactionType === 'income' ? true : false,
  );
  const [sum, setSum] = useState(dataTransaction.sum);
  const [comment, setComment] = useState(dataTransaction.comment);
  const [category, setCategory] = useState(dataTransaction.category);

  const [updateTransactions, { data }] = useUpdateTransactionsMutation();

  const dispatch = useDispatch();

  const toggleChange = e => {
    setChecked(e.target.checked);
    e ? setCategory(add) : setCategory('');
  };

  useEffect(() => {
    if (data?.code === 200) {
      NotifyContainer(toast(data?.payload?.message || 'Done!'));
      dispatch(closeModalWindow());
      dispatch(addTransactionSuccess());
    }
  }, [data, dispatch]);

  const handleSubmit = e => {
    const transactionType = checked ? trTypeAdd : trTypeRemove;
    e.preventDefault();
    updateTransactions({
      transactionId,
      category,
      comment,
      sum,
      transactionType,
    });
  };

  return (
    <Modal>
      <div>
        <Title>Update transaction</Title>
        <Form onSubmit={handleSubmit}>
          <Label border>
            <ToggleSwitch checked={checked} handleChange={toggleChange} />
          </Label>
          {!checked && (
            <Label>
              <SelectCustom select={category} setSelect={setCategory} />
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
            <LabelStat>
              <input
                readOnly={true}
                defaultValue={moment(dataTransaction.date).format('DD.MM.YYYY')}
              />
              <svg>
                <use href={`${sprite}#icon-calendar`} />
              </svg>
            </LabelStat>
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
            EDIT
          </Button>
          <Button outlined onClick={() => dispatch(closeModalWindow())}>
            CANCEL
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

ModalAddTransactions.propTypes = {
  transactionId: PropTypes.string.isRequired,
  dataTransaction: PropTypes.shape({
    category: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
    transactionType: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

const Title = styled.h2`
  font-family: ${poppinsFont};
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
  font-family: ${circleFont};
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
const LabelStat = styled.label`
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
    cursor: initial;
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
