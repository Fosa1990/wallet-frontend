import { useState } from 'react';
import styled from 'styled-components';

export default function Comment({ transactionComment }) {
  const [showMore, setShowMore] = useState(true);
  const ellipseText = text => {
    return text.length > 20 ? text.slice(0, 20) : text;
  };
  const toggleShowMore = () => {
    setShowMore(state => !state);
  };

  return (
    <div>
      {showMore ? ellipseText(transactionComment) : transactionComment}
      {transactionComment.length > 20 && (
        <Button onClick={toggleShowMore}>
          {showMore ? '...' : <span>&nbsp;&#8682;</span>}
        </Button>
      )}
    </div>
  );
}

const Button = styled.button`
  display: inline;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
`;
