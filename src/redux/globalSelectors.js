export const selectIsModalLogoutOpen = state => state.global.isModalLogoutOpen;
export const selectIsModalDeleteOpen = state => state.global.isModalDeleteOpen;
export const selectIsModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;
export const selectIsModalUpdateTransactionOpen = state =>
  state.global.isModalUpdateTransactionOpen;
export const getIsNewTransaction = state => state.global.isNewTransaction;
