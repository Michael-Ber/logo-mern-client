import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './mainPopular.scss';


import { addToCart } from '../../../../redux/goods/GoodsSlice';
import { fetchMe } from '../../../../redux/auth/AuthSlice';
import { setProcess } from '../../../../service/setProcess';

import cartWhite from "../../../../assets/icons/main/dump_white.png";
import cartOrange from "../../../../assets/icons/main/dump_orange.png";

import arrowLeft from "../../../../assets/icons/main/arrow_left.png";
import arrowRight from "../../../../assets/icons/main/arrow_right.png";

import { Navigation, Pagination, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Spinner } from '../../../spinner/Spinner';

export const MainPopular = () => {

    const dispatch = useDispatch();

    const { goods, status } = useSelector(state => state.goodsSlice);
    const { user } = useSelector(state => state.authSlice);
    const addHandler = async(id) => {
        if(user.cart.filter(item => item._id === id).length === 0) {
            await dispatch(addToCart({ goodId: id }));
            await dispatch(fetchMe());
        }
    }



    const popularToRender = goods && goods.map((item, i) => {
        return (
            <SwiperSlide key={i} className="popular__item">
                <div data-num={`${i}`}>
                        <div className="item__img">
                            <img src={item.imgUrl} alt={item.title}/>
                        </div>
                        <div className="item__descr">
                            <Link to={`${item._id}`} className="item__name">{item.title}</Link>
                            <div className="item__type">{item.descr}</div>
                            <div className="item__old-cost">{item.oldCost} &#8381;</div>
                            <div className="item__order">
                                <img src={cartWhite} alt="dumster"/>
                                <div className="item__new-cost">{item.newCost} &#8381;</div>
                            </div>
                        </div>
                        <div className="item__hover-content hover-content-item">
                            <Link to={`${item._id}`} className="hover-content-item__name">{item.title}</Link>
                            <div className="hover-content-item__type">{item.descr}</div>
                            <div className="hover-content-item__subname">Тип беговой дорожки:</div>
                            <div className="hover-content-item__subtype">{item.type}</div>
                            <div className="hover-content-item__speed">Скорость движения (км/ч):</div>
                            <div className="hover-content-item__speed-value">{item.speed}</div>
                            <div className="hover-content-item__transf">Складывание:</div>
                            <div className="hover-content-item__transf-value">{item.folding ? 'Есть': 'Нет'}</div>
                            <div 
                                onClick={()=> addHandler(item._id)}
                                className="hover-content-item__dumpster cort-trigger">
                                {setProcess(status, <img src={cartOrange} alt="dumpster"/>)}
                            </div>
                            <div className="hover-content-item__old-cost">{item.oldCost} &#8381;</div>
                            <div className="hover-content-item__order">
                                <div className="hover-content-item__in-stock">в наличии</div>
                                <div className="hover-content-item__new-cost">{item.newCost} &#8381;</div>
                            </div>
                        </div>
                </div>
            </SwiperSlide>
        )
    })
  return (
    <div className="main__popular">
        <div className="popular__header">
            <div className="popular__title">Популярные товары</div>
        </div>
        {status === 'loading' ? 
            <Spinner width="40px" height="40px" marginTop="180px"/> : 
            <Slider popularToRender={popularToRender} />
        }
    </div>
  )
}

const Slider = ({popularToRender}) => {   
    return (
        <div className="popular__list-wrapper">
            <Swiper 
            slideClass='popular__item'
            modules={[Navigation, Pagination, Grid]}
            grid={{
                rows: 2,
                fill: "row"
                
            }}
            navigation={{
                prevEl: '.popular-arrow-prev',
                nextEl: '.popular-arrow-next',
            }}
            pagination={{
                el: '.popular-pagination',
                type: 'fraction',
                clickable: true
            }}
            slidesPerView={3}
            spaceBetween={30}
            // centeredSlides = {true}
            breakpoints={ 
                {
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2
                    },
                    // 400: {
                    //     slidesPerView: 2,
                    // },
                    // 630: {
                    //     slidesPerView: 3,
                    // },
                    1200: {
                        slidesPerView: 3,
                    }
                }
            }
            
            className="popular__list-slider">
                { popularToRender }
                
            
            </Swiper>
                <div className="popular-pagination"></div>
            <div className="popular-arrow-prev">
                <img src={arrowLeft} alt="" />
            </div>
            <div className="popular-arrow-next">
                <img src={arrowRight} alt="" />
            </div>

        </div>
    )
}
