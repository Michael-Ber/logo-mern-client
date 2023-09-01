import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './header.scss';

import { logout } from '../../redux/auth/AuthSlice';

import bgImg from "../../assets/img/main/header_bg.jpg";
import dump from "../../assets/icons/main/dump.png";

export const Header = () => {

    const { user } = useSelector(state => state.authSlice);

    const username = user && user.username;

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

  return (
    <header className="header">
        <img src={bgImg} alt="header_background" className="header__bg"/>
        <div className="container container_header">
            <div className="header__wrapper">
                <div className="header__main">
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-wrapper">
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Бренды</a>
                                </div>
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Гарантия</a>
                                </div>
                            </li>
                            <li className="header__nav-wrapper">
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Распродажа</a>
                                </div>
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Оплата</a>
                                </div>
                            </li>
                            <li className="header__nav-wrapper">
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Доставка и сборка</a>
                                </div>
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Контакты</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Link to={"/main"} className="header__logo">
                    <div className="header__logo-title">LOGO</div>
                    <div className="header__logo-subtitle">Спортивный магазин</div>
                </Link>
                <div className="header__auth">
                    <Link to={"/login"} className="header__auth-link">Вход /</Link>
                    <Link to={"/register"} className="header__auth-link">Регистрация</Link>
                </div>
                <div className="header__submain">
                    <ul className="header__tel-list">
                        <li className="header__tel-item">
                            <span>Москва</span>
                            <a href="tel:84991234567" className="header__tel-link">8-499-123-45-67</a>
                        </li>
                        <li className="header__tel-item">
                            <span>Бесплатно для России</span>
                            <a href="tel:88001234567" className="header__tel-link">8-800-123-45-67</a>
                        </li>
                    </ul>
                </div>
                <div className="burger">
                    <div className="burger-btn">
                        <span className="burger-btn-line"></span>
                        <span className="burger-btn-line"></span>
                        <span className="burger-btn-line"></span>
                    </div>
                    <div className="burger-menu">
                        <nav className="burger__nav burger__nav_sm">
                            <ul className="burger__nav-list burger__nav-list_sm">
                                <li className="burger__nav-item">
                                    <a href="#" className="burger__nav-link burger__nav-link_sm">Бренды</a>
                                </li>
                                <li className="burger__nav-item">
                                    <a href="#" className="burger__nav-link burger__nav-link_sm">Гарантия</a>
                                </li>
                                <li className="burger__nav-item">
                                    <a href="#" className="burger__nav-link burger__nav-link_sm">Распродажа</a>
                                </li>
                                <li className="burger__nav-item">
                                    <a href="#" className="burger__nav-link burger__nav-link_sm">Оплата</a>
                                </li>
                                <li className="burger__nav-item">
                                    <a href="#" className="burger__nav-link burger__nav-link_sm">Доставка и сборка</a>
                                </li>
                                <li className="burger__nav-item">
                                    <a href="#" className="burger__nav-link burger__nav-link_sm">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="subheader">
                <div className="subheader__left">
                    <div className='subheader__link-wrapper'>
                        <Link to={"/login"} className="subheader__link link-login">{username ? username + ',': 'Войти'}</Link>
                        {username && <span onClick={logoutHandler}> Выйти</span>}
                    </div>
                    
                    <Link to={"/register"} className="subheader__link">Регистрация</Link>
                    <a href='mailto:test@test.test' className="subheader__link">sport@gmail.com</a>
                </div>
                <div className="subheader__right">
                    <a href="tel:88888888888" className="subheader__call">Обратный звонок</a>
                    <div className="subheader__opening">
                        <span>
                            <strong>Пн-Вт:</strong>
                            09:00-21:00
                        </span>
                        <span>
                            <strong>Сб-Вс:</strong>
                            10:00-20:00
                        </span>
                    </div>
                    <Link to={"/main/cart"} className="subheader__order">
                        <div className="subheader__dumpster">
                            <img src={dump} alt="dumpster"/>
                        </div>
                        <div className="subheader__counts counts-subheader">
                            <span className="counts-subheader__count">{user ? user.cart.length: 0}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        
    </header>
  )
}
