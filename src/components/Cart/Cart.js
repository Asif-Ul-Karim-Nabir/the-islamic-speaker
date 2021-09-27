import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const {cart} = props
    let total_salary = 0 ;
    let speaker_name = "" ;
    for(const speaker of cart){
        total_salary = total_salary + speaker.salary ;
        speaker_name = speaker_name +  " " + speaker.name
    }    
    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <h3>Speaker Added:{cart.length}</h3>
            <h3>Total-Salary: ${total_salary}</h3>
            <h3>name: {speaker_name}</h3>
        </div>
    );
};

export default Cart;