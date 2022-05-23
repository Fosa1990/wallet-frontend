import Moment from 'react-moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Comment from './Comment';
import ActionButton from '../ActionButton';
import {
  circleFont,
  accentBgCl,
  accentNegativeCl,
  accentPositiveCl,
} from '../../stylesheet/utils/stylesVars';
import del from '../../assets/images/delete.svg';
import edit from '../../assets/images/edit.svg';

export default function HomeTabMobile({ finances, onDelete }) {
  return finances.map(transaction => (
    <Wrap key={transaction._id}>
      <MobileTable>
        <Tbody type={transaction.transactionType}>
          <Tr>
            <Th>Date</Th>
            <Td>{<Moment format="DD.MM.YYYY">{transaction.date}</Moment>}</Td>
          </Tr>
          <Tr>
            <Th>Type</Th>
            {transaction.transactionType === 'income' ? <Td>+</Td> : <Td>-</Td>}
          </Tr>
          <Tr>
            <Th>Category</Th>
            <Td>{transaction.category}</Td>
          </Tr>
          <Tr>
            <Th>Comment</Th>
            <Td>{<Comment transactionComment={transaction.comment} />}</Td>
          </Tr>
          <Tr>
            <Th>Sum</Th>
            <Td>
              {Intl.NumberFormat('ru-Ru', {
                minimumFractionDigits: 2,
              }).format(transaction.sum)}
            </Td>
          </Tr>
          <Tr>
            <Th>Balance</Th>
            <Td>
              {Intl.NumberFormat('ru-Ru', {
                minimumFractionDigits: 2,
              }).format(transaction.balance)}
            </Td>
          </Tr>
        </Tbody>
      </MobileTable>
      <ButtonWrap>
        <ActionButton
          src={del}
          type="button"
          onClick={() => onDelete(transaction._id)}
        />
        <ActionButton
          src={edit}
          type="button"
          onClick={() => onDelete(transaction._id)}
        />
      </ButtonWrap>
    </Wrap>
  ));
}

HomeTabMobile.propTypes = {
  finances: PropTypes.array,
};

const MobileTable = styled.table`
  background-color: ${accentBgCl};
  border-collapse: collapse;
  border-radius: 10px;
  width: 280px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Tbody = styled.tbody`
  vertical-align: middle;
  width: 100%;
  padding: 0 20px;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5%;
    width: 5px;
    height: 99%;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
    background-color: ${({ type }) =>
      type === 'income' ? `${accentPositiveCl}` : `${accentNegativeCl}`};
  }
`;

const Tr = styled.tr`
  border-bottom: 1px solid #dcdcdf;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Th = styled.th`
  font-family: ${circleFont};
  font-size: 18px;
  font-weight: 700;
`;

const Td = styled.td`
  font-family: ${circleFont};
  font-size: 16px;
  font-weight: 400;
  padding: 14px 0;
  text-align: right;
  max-width: 135px;
  word-wrap: break-word;
`;

const Wrap = styled.div`
  width: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
