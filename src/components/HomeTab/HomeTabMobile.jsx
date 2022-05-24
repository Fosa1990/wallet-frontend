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
} from '../../styles/stylesVars';
import del from '../../assets/images/delete.svg';
import edit from '../../assets/images/edit.svg';

export default function HomeTabMobile({ finances, onDelete, onEdit }) {
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
          <Tr className="button">
            <Td className="buttons">
              <ButtonWrap>
                <ActionButton
                  src={edit}
                  type="button"
                  onClick={() =>
                    onEdit(transaction._id, {
                      transactionType: transaction.transactionType,
                      category: transaction.category,
                      sum: transaction.sum,
                      date: transaction.date,
                      comment: transaction.comment,
                    })
                  }
                />
                <ActionButton
                  src={del}
                  type="button"
                  onClick={() => onDelete(transaction._id)}
                />
              </ButtonWrap>
            </Td>
          </Tr>
        </Tbody>
      </MobileTable>
    </Wrap>
  ));
}

HomeTabMobile.propTypes = {
  finances: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
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
  &.button {
    justify-content: center;
  }
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
  &.buttons {
    width: 100%;
  }
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
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
