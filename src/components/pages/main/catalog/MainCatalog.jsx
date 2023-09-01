import React, { useRef, useState } from 'react';
import './mainCatalog.scss';

import tableImg from "../../../../assets/img/main/table_tennis.jpg";

export const MainCatalog = () => {

    const listRef = useRef(null);
    const burgerRef = useRef(null);
    const [burgerOpen, setBurgerOpen] = useState(true);

    const burgerHandle = () => {
        const burgerLines = burgerRef.current.children;
        setBurgerOpen(state => !state);
        if(burgerOpen) {
            transformBurgerLines(burgerLines, burgerOpen);
            listRef.current.classList.add('catalog__list_active');

        }else {
            transformBurgerLines(burgerLines, burgerOpen);
            listRef.current.classList.remove('catalog__list_active')
        }
    }

    const transformBurgerLines = (lines, opened) => {
        if(opened) {
            Array.from(lines).forEach(line => {
                switch(line.dataset.line) {
                    case '0': line.style.transform = 'rotate(45deg) translate(3px, 3px)';break;
                    case '1': line.style.display = 'none'; break;
                    case '2': line.style.transform = 'rotate(-45deg) translate(2px, -2px)';break;
                    default: return null
                }
            })
        }else {
            Array.from(lines).forEach(line => {
                switch(line.dataset.line) {
                    case '0': line.style.transform = 'rotate(0) translate(0, 0)';break;
                    case '1': line.style.display = 'block'; break;
                    case '2': line.style.transform = 'rotate(0) translate(0, 0)';break;
                    default: return null
                }
            })
        }
    }

  return (
        <div className="main__catalog">
            <div className="catalog__header">
                <span className="catalog__title">
                    Каталог товаров
                </span>
                <div onClick={burgerHandle} ref={burgerRef} className="catalog__burger burgerBtn">
                    <span className="catalog__burger-btn-line" data-line='0'></span>
                    <span className="catalog__burger-btn-line" data-line='1'></span>
                    <span className="catalog__burger-btn-line" data-line='2'></span>
                </div>
            </div>
            <ul ref={listRef} className="catalog__list">
                <li data-popup="0" className="catalog__item catalog__item_parent">
                    <span>Беговые дорожки</span> 
                </li>
                <li data-popup="0" className="catalog__item  catalog__item_parent">
                    <span>Эллиптические тренажеры</span>
                </li>
                <li className="catalog__item"><span>Велотренажеры</span></li>
                <li className="catalog__item"><span>Гребные тренажеры</span></li>
                <li className="catalog__item"><span>Вибромассажеры</span></li>
                <li data-popup="0" className="catalog__item  catalog__item_parent">
                    <span>Теннисные столы</span>
                </li>
                <li className="catalog__item"><span>Баскетбол</span></li>
                <li data-popup="0" className="catalog__item  catalog__item_parent">
                    <span>Массажные кресла</span>
                </li>
                <li data-popup="0" className="catalog__item  catalog__item_parent">
                    <span>Массажные столы</span>
                </li>
                <li className="catalog__item"><span>Силовые тренажеры</span></li>
                <li className="catalog__item"><span>Батуты</span></li>
                <li className="catalog__item"><span>Детские городки</span></li>
                <li className="catalog__item"><span>Дачная мебель</span></li>
                <li className="catalog__item"><span>Уличные спортивные комплексы</span></li>
                <li className="catalog__item"><span>Аксессуары</span></li>
            </ul>

            <div data-popup="0" className="main__popup">
                <div className="main__popup-close">&#10006;</div>
                <ul className="popup__list">
                    <li className="popup__item">
                        <span>Всепогодный</span>
                    </li>
                    <li className="popup__item">
                        <span>Для помещений</span>
                    </li>
                    <li className="popup__item">
                        <span>Профессиональный</span>
                    </li>
                    <li className="popup__item">
                        <span>Любительский</span>
                    </li>
                </ul>
                <div className="popup__dayproduct">
                    <div className="dayproduct__title">Товар дня</div>
                    <div className="dayproduct__image">
                        <img src={tableImg} alt="tennis_table"/>
                    </div>
                    <div className="dayproduct__descr">
                        <a href="#" className="dayproduct__link">Домашний теннисный стол 
                            Donic Indoor Roller 800 Green</a>
                    </div>
                    <div className="dayproduct__buy">
                        <div className="dayproduct__dump"></div>
                        <div className="dayproduct__cost">64 990 &#8381</div>
                    </div>
                </div>
            </div>
        </div>
  )
}
