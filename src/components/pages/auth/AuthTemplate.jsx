import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import "./authTemplate.scss";
import { setProcess } from '../../../service/setProcess';

export const AuthTemplate = ({ title, submit }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgStyles, setMsgstyles] = useState(null);

    const { status, message } = useSelector(state => state.authSlice);
    const nav = useNavigate();

    const submitHandler = (e) => {
        submit(e, { username, password })
            .then((res) => { 
                setUsername(''); 
                setPassword('') ;
                if(res.payload.user) {
                    nav("/main");
                    setMsgstyles({color: 'green', display: 'block'});
                }else {
                    setMsgstyles({color: 'red', display: 'block'});
                }
            })
            .catch((e) => console.log(e))
    }

    const btnName = title === 'Регистрация' ? title : 'Войти';
 

  return (
    <div className='auth-page'>
        <div className="container">
            <h1 className="auth-page__title">{title}</h1>
            <form onSubmit={e => submitHandler(e)} className="auth-page__form">
                <input 
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    onFocus={() => setMsgstyles({display: 'none'})}                  
                    name='username' 
                    placeholder='Введите логин' 
                    className="auth-page__input" />
                <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}  
                    onFocus={() => setMsgstyles({display: 'none'})}                 
                    name='password' 
                    placeholder='Введите пароль' 
                    className="auth-page__input" />
                <p className="auth-page__message" style={msgStyles}>{message}</p>
                <div className="auth-page__btns">
                    <button 
                        type='submit'
                        className="auth-page__btn btn-submit">
                            {setProcess(status, btnName)}
                    </button>
                    <button 
                        className="auth-page__btn btn-cancel">
                            Отмена
                    </button>
                </div>
                
            </form>
        </div>
    </div>
  )
}
