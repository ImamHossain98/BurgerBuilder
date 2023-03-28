import React from 'react';
import Header from './Header/Header';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import { BurgerBuilderWithRouter } from './BurgerBuilder/BurgerBuilder';

import { Routes, Route } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/orders' Component={Orders} />
                    <Route path='/checkout' Component={Checkout} />
                    <Route path='/' exact Component={BurgerBuilderWithRouter} />
                </Routes>

            </div>


        </div>
    );
};

export default Main;