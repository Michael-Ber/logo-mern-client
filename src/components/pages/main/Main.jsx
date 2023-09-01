import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './main.scss';

import { MainCatalog } from './catalog/MainCatalog';
import { MainNews } from './news/MainNews';
import { MainSearch } from './search/MainSearch';
import { MainSlider } from './carousel/MainSlider';
import { MainPopular } from './popular/MainPopular';
import { MainSponsors } from './sponsors/MainSponsors';
import { MainAbout } from './about/MainAbout';
import { MainLinks } from './links/MainLinks';
import { Cart } from '../../pages/cart/Cart';
import { Page404 } from '../404/Page404';
import { ErrorBoundary } from '../../errorBoundary/ErrorBoundary';

import { Good } from '../good/Good';

const Main = () => {

    

    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="main__wrapper">
                        <div className="main__left">
                            <MainCatalog />
                            <MainNews />
                        </div>
                        <div className="main__right">
                            <MainSearch />
                            <Routes>
                                <Route path='/:id' element={<ErrorBoundary><Good /></ErrorBoundary>}/>
                                <Route path='/cart' element={<ErrorBoundary><Cart /></ErrorBoundary>}/>
                                <Route path="/" element={<ErrorBoundary><MainSlider /><MainPopular /></ErrorBoundary>}/>
                                <Route path='*' element={<ErrorBoundary><Page404 /></ErrorBoundary>}/>  
                            </Routes>
                            
                        </div>
                    </div>
                </div>
            <MainSponsors />
            </section>  
            <MainAbout />
            <MainLinks />
        </>
        
    )
}

export default Main;
