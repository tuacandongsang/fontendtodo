import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleSubmit = async (val) => {
    try {
      const action = login(val);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar("Đăng nhập thành công", { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return <LoginForm handleSubmit={handleSubmit} />;
}

export default Login;
