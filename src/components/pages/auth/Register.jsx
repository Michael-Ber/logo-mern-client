import React from 'react';
import { useDispatch } from 'react-redux';

import { AuthTemplate } from './AuthTemplate';
import { fetchRegister } from '../../../redux/auth/AuthSlice';


const Register = () => {


  const dispatch = useDispatch();

  const submitHandler = (e, data) => {
    e.preventDefault();
    return dispatch(fetchRegister(data));
  }

  return (
    <AuthTemplate title={'Регистрация'} submit={submitHandler}/>
  )
}

export default Register;
