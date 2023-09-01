import React from 'react';
import './mainSlider.scss';

import arrowIcon from "../../../../assets/icons/main/catalog_arrow.png";
import womanavatarImg from "../../../../assets/img/main/woman_ava.jpg";
import manavatarImg from "../../../../assets/img/main/man_ava.jpg";
import cardioImg from "../../../../assets/img/main/cardio_ava.jpg";
import bikeImg from "../../../../assets/img/main/bike_ava.jpg";

export const MainSlider = () => {
  return (
    <div className="main__slider-wrapper">
        <div className="main__slider">
            <div className="main__slide main__slide_active">
                <div className="slide__sale">
                    <div className="sale__title">
                        <span className="slide__sale-title title__orange fsz48 title">Мега</span>
                        <span className="slide__sale-title title__gray fsz48 title title_block title_lh">Распродажа</span>
                    </div>
                    <div className="sale__descr">
                        <span className="title__orange fsz18 title title_block mb5">
                            Успей купить
                            <span className="title__gray fsz14 title">Тренажеры</span>
                        </span>
                        <span className="title__white fsz14 title title_bg">по старой цене</span>
                        <span className="title__gray fsz14 title title_block mt5">
                            до их
                            <span className="title__light-gray fsz14 title"> повышения</span>
                        </span>
                    </div>
                    <div className="sale__cost">от 45 000 &#8381;</div>
                    <a href="./catalog.html" className="sale__detail">
                        <span>Подробнее</span> 
                        <img src={arrowIcon} alt="arrow_left"/>
                    </a>
                </div>
            </div>
            <div className="main__slide">Content2</div>
            <div className="main__slide">Content3</div>
            <div className="main__slide">Content4</div>
            <div className="main__slide">Content5</div>
        </div>
        <div className="slider__photos">
            <div className="no-photo">1
            </div>
            <div className="slider__photo">
                <img src={womanavatarImg} alt="woman" className="img1"/>
            </div>
            <div className="slider__photo">
                <img src={manavatarImg} alt="man" className="img2"/>
            </div>
            <div className="slider__photo">
                <img src={cardioImg} alt="cardio" className="img3"/>
            </div>
            <div className="slider__photo">
                <img src={bikeImg} alt="on_bike" className="img4"/>
            </div>
        </div>
    </div>
  )
}
