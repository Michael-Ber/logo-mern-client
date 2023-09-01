import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './cart.scss';

import { CartItem } from './CartItem';
import { makeOrder } from '../../../redux/goods/GoodsSlice';
import { fetchMe } from '../../../redux/auth/AuthSlice';
import { removeAll } from '../../../redux/goods/GoodsSlice';
import { clearTotalOrder } from '../../../redux/goods/GoodsSlice';

import { spaceBetweenThousand } from '../../../utils/spaceBetweenThousand';
import { setProcess } from '../../../service/setProcess';

import { Modal } from '../../modal/Modal';

export const Cart = () => {

  //SELECTORS
  const { user } = useSelector(state => state.authSlice);
  const { totalOrder, status, message } = useSelector(state => state.goodsSlice);
  const totalOrderNum = spaceBetweenThousand(totalOrder.reduce((sum, item) => item.total + sum, 0));

  const dispatch = useDispatch();

  //REFS
  const btnsRef = useRef(null);
  const contentsRef = useRef(null);

  //STATES
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  const [activeTab, setActiveTab] = useState('fast');


  const handleTabs = (e) => {
    Array.from(btnsRef.current.children)
      .forEach(btn => btn.classList.remove('tabs-order__btn_active')); 
    Array.from(contentsRef.current.children)
      .forEach(content => content.classList.remove('order-main__form_active'));
    
    e.target.classList.add('tabs-order__btn_active');
    document.querySelector(`form[data-order = ${e.target.dataset.order}]`).classList.add('order-main__form_active');
    setActiveTab(e.target.dataset.order);
  }

  const handleOrder = async(e) => {
    e.preventDefault();
    await dispatch(makeOrder({data: {totalOrder, name, phone, mail}}));
    setName('');
    setPhone('');
    setMail('');
    await dispatch(removeAll());
    await dispatch(clearTotalOrder());
    await dispatch(fetchMe());
    setShowModal(true);
  }  
 
  const orderElements = (user && user.cart.length > 0) && user.cart.map(item => {
    return (
      <CartItem key={item._id} item={item} />
    )
  })

  return (
    <div className='main'>
      <h1 className="main__cort-title title-cort">Оформление заказа</h1>
      <div className="main__order order-main"> 
          <div ref={btnsRef} className="order-main__tabs tabs-order">
              <button 
                onClick={e => handleTabs(e)}
                className="tabs-order__btn tabs-order__btn_active" 
                data-order="fast" 
                aria-label="fast order button">Быстрый заказ</button>
              <button 
                onClick={e => handleTabs(e)}
                className="tabs-order__btn" 
                data-order="moscow" 
                aria-label="in moscow button">Курьером по москве и мо</button>
              <button 
                onClick={e => handleTabs(e)}
                className="tabs-order__btn" 
                data-order="regions" 
                aria-label="regions button">Доставка в регионы</button>
          </div>
          <div ref={contentsRef} className="order-main__content">
              <form onSubmit={e => handleOrder(e)} className="order-main__form" data-order="regions">
                  <div className="main__data">
                      <div className="order-main__left">
                          <label htmlFor="surname" className="order-main__label">
                              <span>Фамилия:<span className="order-main__star"> *</span></span>
                              <input 
                                required 
                                name="surname" 
                                id="surname" 
                                type="text" 
                                className="order-main__input"/>
                          </label>
                          <label htmlFor="name" className="order-main__label">
                              <span>Имя:<span className="order-main__star"> *</span></span>
                              <input required name="name" id="name" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="lastname" className="order-main__label">
                              <span>Отчество:<span className="order-main__star"> *</span></span>
                              <input required name="lastname" id="lastname" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="phone" className="order-main__label">
                              <span>Моб. телефон:<span className="order-main__star"> *</span></span>
                              <input required name="phone" id="phone" type="number" className="order-main__input"/>
                          </label>
                          <label htmlFor="mail" className="order-main__label">
                              <span>Ваш E-mail:<span className="order-main__star"> *</span></span>
                              <input required name="mail" id="mail" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="payment" className="order-main__label order-main__label_select">
                              Способ оплаты:
                              <select name="payment" id="payment" className="order-main__input order-main__input_select">
                                  <option value="1" className="order-main__option">Через Сбербанк</option>
                                  <option value="2" className="order-main__option">option-2</option>
                                  <option value="3" className="order-main__option">option-3</option>
                                  <option value="4" className="order-main__option">option-4</option>
                                  <option value="5" className="order-main__option">option-5</option>
                              </select>
                          </label>
                          <label htmlFor="index" className="order-main__label">
                              <span>Индекс<span className="order-main__star"> *</span></span>
                              <input required name="index" id="index" type="number" className="order-main__input"/>
                          </label>
                          <label htmlFor="city" className="order-main__label">
                              <span>Город<span className="order-main__star"> *</span></span>
                              <input required name="city" id="city" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="address" className="order-main__label">
                              <span>Адрес доставки:<span className="order-main__star"> *</span></span>
                              <input required name="address" id="address" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="comments" className="order-main__label">
                              Комментарии:
                              <textarea name="comments" id="comments" type="text" className="order-main__input order-main__input_textarea"></textarea>
                          </label>
                          <label htmlFor="subscribe" className="order-main__label order-main__label_checkbox label-order">
                              <input name="subscribe" id="subscribe" type="checkbox" className="order-main__checkbox"/>
                              <span className="label-order__span">Подписаться на новости и скидки </span> 
                          </label>
                      </div>
                      <div className="order-main__right">
                          <p><span>*</span> Поля, обязательные для заполнения</p>
                          <br/>
                          <p>Отправка товара производится только после 100% оплаты
                              товара. Стоимость доставки возможно оплатить при 
                              получении заказа.
                              <br/>
                              Доставка в регионы осуществляется EMS Почтой России 
                              (в течение 5-14 дней) и курьерской службой DPD (в течение 
                              3-5 дней) с момента передачи заказа в службу доставки. 
                              Стоимость зависит от веса заказа и расстояния. В некоторые 
                              регионы доставка возможна только посредством EMS Почты 
                              России, способ доставки уточняйте у оператора при 
                              оформлении заказа*.
                              <br/>
                              * Интернет-магазин не несет ответственности за задержку 
                              доставки заказа, связанную с работой курьерских служб DPD 
                              и EMS Почты России.</p>
                      </div>
                  </div>
                  <div className="main__yourOrder yourOrder-main">
                      <h2 className="yourOrder-main__title title-cort">Ваш заказ</h2>
                      <ul className="yourOrder-main__list">
                        { activeTab === 'regions' &&  orderElements }
                      </ul>
                      <div className="yourOrder-main__sum">
                          <span>Итого:</span> <strong>{totalOrderNum}</strong> &#8381;
                      </div>
                      <button type="submit" className="yourOrder-main__submit">{setProcess(status, 'оформить заказ')}</button>
                  </div>
              </form>
              <form onSubmit={e => handleOrder(e)} className="order-main__form order-main__form_active" data-order="fast">
                  <div className="main__data">
                      <div className="order-main__left">
                          <label htmlFor="name-short" className="order-main__label">
                              <span>Имя:<span className="order-main__star"> *</span></span>
                              <input 
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                                name="name-short" 
                                id="name-short" 
                                type="text" 
                                className="order-main__input"/>
                          </label>
                          <label htmlFor="phone-short" className="order-main__label">
                              <span>Моб. телефон:<span className="order-main__star"> *</span></span>
                              <input 
                                required 
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                name="phone-short" 
                                id="phone-short" 
                                type="number" 
                                className="order-main__input"/>
                          </label>
                          <label htmlFor="mail-short" className="order-main__label">
                              <span>Ваш E-mail:<span className="order-main__star"> *</span></span>
                              <input 
                                required 
                                value={mail}
                                onChange={e => setMail(e.target.value)}
                                name="mail-short" 
                                id="mail-short" 
                                type="email" 
                                className="order-main__input"/>
                          </label>
                          <label htmlFor="subscribe-short" className="order-main__label order-main__label_checkbox label-order">
                              <input name="subscribe-short" id="subscribe-short" type="checkbox" className="order-main__checkbox"/>
                              <span className="label-order__span">Подписаться на новости и скидки</span> 
                          </label>
                      </div>
                      <div className="order-main__right">
                          <p><span>*</span> Поля, обязательные для заполнения</p>
                          <br/>
                          <p>Отправка товара производится только после 100% оплаты
                              товара. Стоимость доставки возможно оплатить при 
                              получении заказа.
                              <br/>
                              * Интернет-магазин не несет ответственности за задержку 
                              доставки заказа, связанную с работой курьерских служб DPD 
                              и EMS Почты России.</p>
                      </div>
                  </div>
                  <div className="main__yourOrder yourOrder-main">
                      <h2 className="yourOrder-main__title title-cort">Ваш заказ</h2>
                      <ul className="yourOrder-main__list">
                        { activeTab === 'fast' && orderElements }
                      </ul>
                      <div className="yourOrder-main__sum">
                          <span>Итого:</span> <strong>{totalOrderNum}</strong> &#8381;
                      </div>
                      <button type="submit" className="yourOrder-main__submit">{setProcess(status, 'оформить заказ')}</button>
                  </div>
              </form>
              <form onSubmit={e => handleOrder(e)} className="order-main__form" data-order="moscow">
                  <div className="main__data">
                      <div className="order-main__left">
                          <label htmlFor="name-moscow" className="order-main__label">
                              <span>Имя:<span className="order-main__star"> *</span></span>
                              <input required name="name-moscow" id="name-moscow" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="phone-moscow" className="order-main__label">
                              <span>Моб. телефон:<span className="order-main__star"> *</span></span>
                              <input required name="phone-moscow" id="phone-moscow" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="mail-moscow" className="order-main__label">
                              <span>Ваш E-mail:<span className="order-main__star"> *</span></span>
                              <input required name="mail-moscow" id="mail-moscow" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="subscribe-moscow" className="order-main__label order-main__label_checkbox label-order">
                              <input name="subscribe-moscow" id="subscribe-moscow" type="checkbox" className="order-main__checkbox"/>
                              <span className="label-order__span">Подписаться на новости и скидки</span> 
                          </label>
                      </div>
                      <div className="order-main__right">
                          <p><span>*</span> Поля, обязательные для заполнения</p>
                          <br/>
                          <p>Отправка товара производится только после 100% оплаты
                              товара. Стоимость доставки возможно оплатить при 
                              получении заказа.
                              <br/>
                              * Интернет-магазин не несет ответственности за задержку 
                              доставки заказа, связанную с работой курьерских служб DPD 
                              и EMS Почты России.</p>
                      </div>
                  </div>
                  <div className="main__yourOrder yourOrder-main">
                      <h2 className="yourOrder-main__title title-cort">Ваш заказ</h2>
                      <ul className="yourOrder-main__list">
                          { activeTab === 'moscow' && orderElements }
                      </ul>
                      <div className="yourOrder-main__sum">
                          <span>Итого:</span> <strong>{totalOrderNum}</strong> &#8381;
                      </div>
                      <button type="submit" className="yourOrder-main__submit">{setProcess(status, 'оформить заказ')}</button>
                  </div>
              </form>
          </div>
      </div>
      <Modal message={message} showModal={showModal} setShowModal={setShowModal}/>
    </div>
  )
}
