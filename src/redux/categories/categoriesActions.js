import { createAction } from '@reduxjs/toolkit';

export const getCategories = createAction('categories/getCategories');
export const getMonth = createAction('categories/getMonth');
export const getYear = createAction('categories/getYear');
