import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Speaker.css';

const Speaker = (props) => {
    // console.log(props);
    const {name, img,  religion,salary, date_of_birth, profession} = props.speaker;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className="speaker-container">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Profession: {profession}</p>
            <p>Religion: {religion}</p>
            <p>Salary: ${salary}</p>
            <p>Birth: {date_of_birth}</p>
            <button onClick={() => props.handleAddToCart(props.speaker)}>{shoppingCart}Add To Cart</button>
            </div>
        </div>
    );
};

export default Speaker;