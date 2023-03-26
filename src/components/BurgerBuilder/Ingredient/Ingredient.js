import React from 'react';
import BreadTop from '../../../assets/Images/Burger-top.png'
import BreadBottom from '../../../assets/Images/Burger-bottom.png'
import Cheese from '../../../assets/Images/cheese.png'
import Sasuage from '../../../assets/Images/Sausagee.png'
import Meat from '../../../assets/Images/Meat.png'
import Latus from '../../../assets/Images/Letus.png'
import './Ingredient.css'



const Ingredient = (props) => {

    let ingredient = null;

    switch (props.type) {

        case 'bread-top':
            ingredient = <div><img src={BreadTop} alt="Bread Top" /></div>
            break;

        case 'sasuage':
            ingredient = <div><img src={Sasuage} alt="Sasuage" /></div>
            break;

        case 'cheese':
            ingredient = <div><img src={Cheese} alt="Cheese" /></div>
            break;

        case 'meat':
            ingredient = <div><img src={Meat} alt="Meat" /></div>
            break;

        case 'latus':
            ingredient = <div><img src={Latus} alt="Latus" /></div>
            break;

        case 'bread-bottom':
            ingredient = <div><img src={BreadBottom} alt="Bread Bottom" /></div>
            break;

        default:
            ingredient = null;


    }

    return (
        <div className='Ingridient'>
            {ingredient}
        </div>
    );
};

export default Ingredient;