import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './Speakers.css'

const Speakers = () => {
    const [speakers, setSpeakers] = useState([])
    const [cart, setCart] = useState([])
    useEffect( () => {
        fetch('./speakers.json')
        .then(res => res.json())
        .then(data => setSpeakers(data))
    },[])
    const handleAddToCart = (speaker) =>{
        const newCart   =  [...cart , speaker]
        setCart(newCart)
    }
    return (
        <div className="speakers-container">
            <div className="speakers">
            {
                speakers.map( speaker => <Speaker
                    key={speaker.key}
                    speaker={speaker}
                    handleAddToCart={handleAddToCart}
                >
                </Speaker>)
            }
            </div>
            <div className="total-speaker">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Speakers;