import { createSelector } from '@reduxjs/toolkit';

export const getFinances = state => state.finances.data;
