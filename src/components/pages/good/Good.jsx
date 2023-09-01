import React, { useState, useRef, useEffect, memo } from 'react';
import "./good.scss";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Tooltip } from './Tooltip';
import { InputChangeAmount } from './InputChangeAmount';

import { fetchMe } from '../../../redux/auth/AuthSlice';
import { addToCart } from '../../../redux/goods/GoodsSlice';


import assembly from "../../../assets/icons/goods/free_assembly.png";
import delivery from "../../../assets/icons/goods/free_delivery.png";
import garanty from "../../../assets/icons/goods/garanty.png";
import dump from "../../../assets/icons/main/dump_orange.png";
import { Page404 } from '../404/Page404';
import { Spinner } from '../../spinner/Spinner';

export const Good = memo(() => {

  const { id } = useParams();
  const { goods } = useSelector(state => state.goodsSlice);
  const { user } = useSelector(state => state.authSlice);
  const good = goods && goods.filter(item => item._id === id)[0];
  const dispatch = useDispatch();

  const inputRef = useRef(1);
  const [showTooltipAuth, setShowTooltipAuth] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showTooltipCart, setShowTooltipCart] = useState(false);

  const btnsRef = useRef(null);
  const contentsRef = useRef(null);


  const handleTabs = (e) => {
    Array.from(btnsRef.current.children)
      .forEach(btn => btn.classList.remove('btns-good-tabs--main__btn_active')); 
    Array.from(contentsRef.current.children)
      .forEach(content => content.classList.remove('contents-good-tabs--main__content_active'));
    if(e.target.tagName === 'SPAN') {
      e.target.parentNode.classList.add('btns-good-tabs--main__btn_active');
      document.querySelector(`div[data-tab = ${e.target.parentNode.dataset.tab}]`).classList.add('contents-good-tabs--main__content_active')
    }else {
      e.target.classList.add('btns-good-tabs--main__btn_active');
      document.querySelector(`div[data-tab = ${e.target.dataset.tab}]`).classList.add('contents-good-tabs--main__content_active')
    }
  }
  const cartHandler = async() => {
    if(!user) {
        setShowTooltipAuth(true);
      setTimeout(() => {
        setShowTooltipAuth(false);
      }, 3000)
    }else {
      setShowSpinner(true);
      if(user.cart.filter(item => item._id === id).length === 0) {
        await dispatch(addToCart({ goodId: id, additional: { amount: inputRef.current.value } }));
        setShowSpinner(false);
        await dispatch(fetchMe());
      }else {
        setShowSpinner(false);
        setShowTooltipCart(true);
        setTimeout(() => {
            setShowTooltipCart(false);
        }, 3000)
      }
    }
  }
  const addAmount = () => {
    let res = Number(inputRef.current.value);
    res += 1;
    inputRef.current.value = res;
    return inputRef.current.value
  };
  const subAmount = () => {
    let res = Number(inputRef.current.value);
    res -= 1;
    inputRef.current.value = res;
    return inputRef.current.value
  }
   
  useEffect(() => {
    dispatch(fetchMe());
  }, [])



  return (
    good ? <div className='main'>
      <h2 className="main__good-subtitle">{good.title}</h2>
      <h1 className="main__good-title">{good.descr}</h1>
        <div className="main__good good-main">
            <div className="good-main__left">
                <div className="good-main__wrapper">
                    <div className="good-main__image image-good-main">
                        <img src={good.imgUrl} alt={good.title}/>
                    </div>
                    <div className="good-main__discount">-15%</div>
                </div>
                <div className="good-main__sm-images sm-images-good-main">
                    <ul className="sm-images-good-main__list">
                        <li className="sm-images-good-main__item sm-images-good-main__item_active">
                            <img src={good.imgUrl} alt="small_picture"/>
                        </li>
                        <li className="sm-images-good-main__item">
                            <img src={good.imgUrl} alt="small_picture"/>
                        </li>
                        <li className="sm-images-good-main__item">
                            <img src={good.imgUrl} alt="small_picture"/>
                        </li>
                        <li className="sm-images-good-main__item">
                            <img src={good.imgUrl} alt="small_picture"/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="good-main__right">
                <div className="good-main__info info-good-main">
                    <div className="info-good-main__item">
                        <div className="info-good-main__compare compare-info-good-main">
                            <button className="compare-info-good-main__btn" aria-label="compare button">Сравнить</button>
                            <div className="compare-info-good-main__in-stock">в наличии</div>
                        </div>
                    </div>
                    <div className="info-good-main__item">
                        <div className="info-good-main__order order-info-good-main">
                            <div className="order-info-good-main__descr descr-order-info-good-main">
                                <p className="descr-order-info-good-main__old-price">{good.oldCost} <span>&#8381;</span></p>
                                <p className="descr-order-info-good-main__new-price">{good.newCost} <span>&#8381;</span></p>
                            </div>
                            <InputChangeAmount inputRef={inputRef} addAmount={addAmount} subAmount={subAmount}/>
                            <div 
                              onClick={cartHandler}
                              className="order-info-good-main__cort cort-order-info-good-main">
                                <p className="cort-order-info-good-main__btn">В корзину</p>
                                <div className="cort-order-info-good-main__to-cort">
                                    {showSpinner ? <Spinner /> : <img src={dump} alt="cort"/>}
                                    <Tooltip show={showTooltipCart} message={'Товар уже в корзине'}/>
                                </div>
                                <Tooltip show={showTooltipAuth} message={'Необходима авторизация'}/>
                            </div>
                        </div>
                    </div>
                    <div className="info-good-main__item">
                        <div className="info-good-main__included included-info-good-main">
                            <p className="included-info-good-main__title">В стоимость товара включено:</p>
                            <ul className="included-info-good-main__list">
                                <li className="included-info-good-main__item item-included-info-good-main">
                                    <div className="item-included-info-good-main__img">
                                        <img src={assembly} alt="assembly"/>
                                    </div>
                                    <span className="item-included-info-good-main__name">
                                        Бесплатная сборка
                                    </span>
                                </li>
                                <li className="included-info-good-main__item item-included-info-good-main">
                                    <div className="item-included-info-good-main__img">
                                        <img src={delivery} alt="delivery"/>
                                    </div>
                                    <span className="item-included-info-good-main__name">
                                        Бесплатная доставка
                                    </span>
                                </li>
                                <li className="included-info-good-main__item item-included-info-good-main">
                                    <div className="item-included-info-good-main__img">
                                        <img src={garanty} alt="garanty"/>
                                    </div>
                                    <span className="item-included-info-good-main__name">
                                        Гарантия
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="main__good-tabs good-tabs--main">
            <div 
              ref={btnsRef} 
              className="good-tabs--main__btns btns-good-tabs--main">
                <button
                  onClick={e => handleTabs(e)} 
                  className="btns-good-tabs--main__btn btns-good-tabs--main__btn_active"
                  data-tab="descr" 
                  aria-label="description button">
                    <span>Описание</span>  
                </button>
                <button 
                  onClick={e => handleTabs(e)}  
                  className="btns-good-tabs--main__btn" 
                  data-tab="feature" 
                  aria-label="characteristics button">
                    <span>Характеристики</span> 
                </button>
            </div>
            <div 
              ref={contentsRef} 
              className="good-tabs--main__contents contents-good-tabs--main">
                <div className="contents-good-tabs--main__content contents-good-tabs--main__content_active" data-tab="descr">
                    <p>Начав с производства качественных деревянных лыж, во второй половине 90-х Nordic Track расширил производство, 
                        верно угадав тренд развития спортивного оборудования. С этого момента беговые дорожки Nordic Track стали 
                        настоящим фетишем как для серьезных спортсменов, так и для любителей фитнеса. Готовитесь ли вы к восхождению 
                        на горный пик, к сплаву по бурной реке, или просто решили влезть в прошлогодний купальник к наступающему лету – 
                        Nordic Track поможет достойно решить задачу подготовки к этим свершениям.
                    </p>
                    <p>Гарантия Nordic Track достойна их качества – 24 месяца с даты покупки.
                    </p>
                    <p>Недостатки </p>
                      <p>В линейке производителя отсутствуют модели бюджетного уровня. Кредо производителя – не гнаться за дешевизной, а 
                        предлагать действительно качественный и функциональный товар.
                    </p>
                    <p>Рекомендации</p>
                    <p>Мощные топ-модели лучше устанавливать на специальный шумо-виброзащитный коврик, особенно если живете не на 
                        первом этаже.
                        Популярные модели
                        Nordic Track T15
                        Nordic Track Inline Trainer x7i
                    </p>
                </div>
                <div className="contents-good-tabs--main__content content-contents-good-tabs--main" data-tab="feature">
                    <ul className="content-contents-good-tabs--main__list">
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Использование</span>
                                <span>Полупрофессиональное</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Тип беговой дорожки</span>
                                <span>Электрическая</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Макс. вес пользователя (кг)</span>
                            <span>135</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Скорость движения (км/ч)</span>
                            <span>22</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Угол наклона</span>
                            <span>0 - 15%</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Регулировка угла наклона</span>
                                <span>Автоматическая</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Складывание</span>
                                <span>Есть</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Постоянная мощность двигателя (л.с.)</span>
                                <span>3</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Консоль</span>
                                <span>LCD консоль с голубой подсветкой</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Показания консоли</span>
                                <span>Скорость, время, дистанция, пульс, потраченные калории, пройденный путь, программа, угол наклона</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Система измерения пульса</span>
                                <span>Дублирующие сенсорные датчики, Polar приемник</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Количество программ тренировки</span>
                                <span>32</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Встроенные программы</span>
                                <span>26</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Пользовательские программы</span>
                                <span>4</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Специальные программные возможности</span>
                                <span>RaceTrack<i>тм</i>, iFit<i>R</i> Live</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Мультимедия</span>
                                <span>Аудиоразъем для iPod<i>R</i>**, Intermix Acoustics2.0 встроенные динамики</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Транспортировочные ролики/колеса</span>
                                <span>Да</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Беговое полотно</span>
                                <span>3-ч слойное, ортопедическое</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Система амортизации</span>
                                <span>QuadFlex<i>тм</i></span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Рама</span>
                                <span>Стальная, высокопрочная</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Дека</span>
                                <span>25мм, парафинированная</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Подставка для аксессуаров</span>
                                <span>Да</span>
                            </div>
                        </li>
                        <li className="content-contents-good-tabs--main__item">
                            <div className="content-contents-good-tabs--main__row">
                                <span>Питание</span>
                                <span>Сеть 220 Вольт</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        
    </div>
    : <Page404 />
  )
})
