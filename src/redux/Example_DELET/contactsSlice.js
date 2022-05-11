import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {},
});

export const { filterContact } = contactsSlice.actions;

export default contactsSlice.reducer;