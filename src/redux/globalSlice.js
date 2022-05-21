import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isNewTrunsaction: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalLogout: (state, _) => {
      state.isModalLogoutOpen = true;
    },
    openModalAddTransaction: (state, _) => {
      state.isModalAddTransactionOpen = true;
    },
    closeModalWindow: (state, _) => {
      state.isModalLogoutOpen = false;
      state.isModalAddTransactionOpen = false;
    },
    addTransactionSuccess: (state, _) => {
      state.isNewTrunsaction = true;
    },
    reloadTransactionList: (state, _) => {
      state.isNewTrunsaction = false;
    },
  },
});

export const {
  openModalLogout,
  openModalAddTransaction,
  openModalDeleteUser,
  closeModalWindow,
  addTransactionSuccess,
  reloadTransactionList,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
