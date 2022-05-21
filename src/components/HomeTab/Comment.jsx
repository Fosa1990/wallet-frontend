import { useState } from 'react';
import styled from 'styled-components';

export default function Comment({ transactionComment }) {
  const [text, setText] = useState(transactionComment.substr(0, 20));
  const readMore = e => {
    setText(transactionComment);
    e.target.disabled = true;
    e.target.classList.add('visually-hidden');
  };

  return (
    <div>
      {transactionComment.length < 20 && <p>{text}</p>}
      {transactionComment.length > 20 && (
        <>
          <p>
            {text}
            <Button onClick={readMore}>...</Button>
          </p>
        </>
      )}
    </div>
  );
}

const Button = styled.button`
  display: inline;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
