import React from 'react';
import "./page404.scss";
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
      <div className='page404'>
        <p className='page404__notfound'>Страница не найдена :(</p>
        <Link to={"/main"} className='page404__back'>Вернуться на главную</Link>
      </div>
  )
}
