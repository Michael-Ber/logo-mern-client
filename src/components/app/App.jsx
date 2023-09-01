import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { fetchMe } from '../../redux/auth/AuthSlice';
import { gettingGoods } from '../../redux/goods/GoodsSlice';

import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import Main from '../pages/main/Main';
import { Catalog } from '../pages/catalog/Catalog';
import { Test } from '../test/Test';
import { Page404 } from '../pages/404/Page404';
import { ErrorBoundary } from '../errorBoundary/ErrorBoundary';

const App = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
      dispatch(fetchMe());
      dispatch(gettingGoods());
      nav("/main");
  }, [])


  return (
    <div className="app">
      <Header />
      <Test />
      <Routes>
        <Route path='/register' element={<ErrorBoundary><Register /></ErrorBoundary>}/>
        <Route path='/login' element={<ErrorBoundary><Login /></ErrorBoundary>}/>
        <Route path='/catalog' element={<ErrorBoundary><Catalog /></ErrorBoundary>}/>
        
        <Route path='/main/*' element={<ErrorBoundary><Main /></ErrorBoundary>}/>
        <Route path='*' element={<ErrorBoundary><Page404 /></ErrorBoundary>}/>
        
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
