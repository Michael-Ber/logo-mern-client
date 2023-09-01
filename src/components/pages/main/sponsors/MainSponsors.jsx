import React, { useEffect, useState } from 'react';
import './mainSponsors.scss';

import { fetchData } from '../../../../service/fetchData';

import arrowLeft from "../../../../assets/icons/main/arrow_left.png";
import arrowRight from "../../../../assets/icons/main/arrow_right.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const MainSponsors = () => {

    const [sponsors, setSponsors] = useState(null);

    useEffect(() => {
        fetchData("https://logo-0f9b.onrender.com/sponsors", {})
            .then(res => setSponsors(res.sponsors))
            .catch((e) => console.log(e))
    }, [])

    const sponsorsToRender = sponsors && sponsors.map(slide => {
        return (
            <SwiperSlide key={slide._id} className="sponsors__item">
                
                <img src={slide.imgUrl} alt={slide.title}/>
                
            </SwiperSlide>
        )
    })


  return (
    <div className="sponsors">
        <div className="container container_sponsors">
            <div className="sponsors__wrapper">
                <div className="sponsors__slider">
                    <Slider sponsorsToRender={sponsorsToRender} />
                    
                    
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}


const Slider = ({sponsorsToRender}) => {   
    return (
        <div className="sponsors__wrapper">
            <Swiper 
            slideClass='sponsors__item'
            modules={[Navigation]}
            navigation={{
                prevEl: '.arrow__prev',
                nextEl: '.arrow__next',
            }}
            slidesPerView={5}
            spaceBetween={10}
            breakpoints={ 
                {
                    320: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 5,
                    }
                }
            }
            
            className="sponsors__slider">
                { sponsorsToRender }

                
            </Swiper>
            <div className="arrow arrow__prev">
                <img src={arrowLeft} alt="prev"/>
            </div>
            
            <div className="arrow arrow__next">
                <img src={arrowRight} alt="next"/>
            </div>
        </div>
    )
}