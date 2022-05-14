import './App.css';
import Loader from '../Loader';

import React from 'react';
import ButtonAddTransactions from '../ButtonAddTransactions';

export default function App() {
  return (
    <>
      <ButtonAddTransactions />
      <Loader />
      <h1>Hi</h1>
    </>
  );
}
