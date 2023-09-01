import React from 'react';
import './mainLinks.scss';

export const MainLinks = () => {
  return (
    <section className="sitelinks">
        <div className="container">
            <div className="sitelinks__info sitelinks__row">
                <div className="sitelinks__title sitelinks__item">Информация:</div>
                <div className="sitelinks__subwrapper">
                    <a href="#" className="sitelinks__link sitelinks__item">Бренд</a>
                    <a href="#" className="sitelinks__link sitelinks__item">Доставка</a>
                    <a href="#" className="sitelinks__link sitelinks__item">Распродажа</a>
                    <a href="#" className="sitelinks__link sitelinks__item">Контакты</a>
                    <a href="#" className="sitelinks__link sitelinks__item">Отзывы</a>
                </div>
            </div>
            <div className="sitelinks__help sitelinks__row">
                <div className="sitelinks__title sitelinks__item">Помощь:</div>
                <div className="sitelinks__subwrapper">
                    <a href="#" className="sitelinks__link sitelinks__item">Как заказать</a>
                    <a href="#" className="sitelinks__link sitelinks__item">Доставка</a>
                    <a href="#" className="sitelinks__link sitelinks__item">Оплата</a>
                    <a href="#" className="sitelinks__link sitelinks__item">Гарантия и сборка</a>
                    <a href="#" className="sitelinks__link sitelinks__item">Возврат</a>
                </div>
            </div>
        </div>
    </section>
  )
}
