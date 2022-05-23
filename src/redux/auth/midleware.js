import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
export const rtkQueryErrorLogger = api => next => action => {
  if (isRejectedWithValue(action)) {
    if (action.payload?.data?.payload?.message === 'jwt expired') {
      toast.error('Please login again', { className: 'Toastify__error' });
      window.localStorage.clear();
    } else if (action.payload?.data?.status === 409) {
      toast.error('This user has already been registered', {
        className: 'Toastify__error',
      });
    } else if (action.payload?.data?.payload?.message) {
      toast.error(`${action.payload?.data?.payload?.message}`, {
        className: 'Toastify__error',
      });
    } else {
      toast.error('Bad Request', { className: 'Toastify__error' });
    }
  }

  return next(action);
};
