import React from 'react';

import { useDispatch } from 'react-redux';
import { clearNotification } from '../../store/notification/actions';
import { useNotification } from '../../store/notification/selectors';

import Snackbar from '../../components/snackbar';

const NotificationProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { type, message, active } = useNotification();

  const onExit = () => {
    dispatch(clearNotification())
  };

  return (
    <>
      {children}
      {active && (
        <Snackbar type={type} onExit={onExit}>
          {message}
        </Snackbar>
      )}
    </>
  );
};

export default NotificationProvider;
