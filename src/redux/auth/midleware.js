import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger = api => next => action => {
  if (isRejectedWithValue(action)) {
    if (action.payload?.data?.payload?.message === 'jwt expired') {
      toast.error('Please login again');
    } else if (action.payload?.data?.payload?.message) {
      toast.error(`${action.payload?.data?.payload?.message}`);
    } else {
      toast.error('Bad Request');
    }
  }

  return next(action);
};
