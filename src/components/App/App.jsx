import './App.css';
import Loader from '../Loader';

import React from 'react';
import ButtonAddTransactions from '../ButtonAddTransactions';
import ModalAddTransactions from '../ModalAddTransactions';

export default function App() {
  return (
    <>
      <ModalAddTransactions />
      <ButtonAddTransactions />
      <Loader />
      <h1>Hi</h1>
    </>
  );
}
