import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const Burger = (props) => {
    return (
        <div>
            <Ingredient type="bread-top" />
            <Ingredient type="sasuage" />
            <Ingredient type="cheese" />
            <Ingredient type="meat" />
            <Ingredient type="latus" />
            <Ingredient type="bread-bottom" />
        </div>
    );
};

export default Burger;