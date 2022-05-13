import './App.css';
import Loader from '../Loader';

import React from 'react';

import Currency from '../Currency/Currency';

export default function App() {
  return (
    <>
      <Loader />
      <h1>Hi</h1>
      <Currency/>
    </>
  );
}
