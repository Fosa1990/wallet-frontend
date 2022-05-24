import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  isModalDeleteOpen: false,
  isModalAddTransactionOpen: false,
  isModalUpdateTransactionOpen: false,
  isNewTransaction: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalLogout: (state, _) => {
      state.isModalLogoutOpen = true;
    },
    openModalDelete: (state, _) => {
      state.isModalDeleteOpen = true;
    },
    openModalAddTransaction: (state, _) => {
      state.isModalAddTransactionOpen = true;
    },
    openModalUpdateTransaction: (state, _) => {
      state.isModalUpdateTransactionOpen = true;
    },
    closeModalWindow: (state, _) => {
      state.isModalLogoutOpen = false;
      state.isModalDeleteOpen = false;
      state.isModalAddTransactionOpen = false;
      state.isModalUpdateTransactionOpen = false;
    },
    addTransactionSuccess: (state, _) => {
      state.isNewTransaction = true;
    },
    reloadTransactionList: (state, _) => {
      state.isNewTransaction = false;
    },
  },
});

export const {
  openModalLogout,
  openModalDelete,
  openModalAddTransaction,
  openModalUpdateTransaction,
  closeModalWindow,
  addTransactionSuccess,
  reloadTransactionList,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
