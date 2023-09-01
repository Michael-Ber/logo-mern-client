import React from 'react';
import { useDispatch } from 'react-redux';

import { AuthTemplate } from './AuthTemplate';
import { fetchLogin } from '../../../redux/auth/AuthSlice';

const Login = () => {


  

  const dispatch = useDispatch();

  const submitHandler = (e, data) => {
    e.preventDefault();
    return dispatch(fetchLogin(data));
  }
  return (
    <AuthTemplate title={'Логин'} submit={submitHandler}/>
  )
}

export default Login;