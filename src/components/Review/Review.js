import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import './Review.css'

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect (() => {
        //Use Cart Data
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map( key => {
        const product = fakeData.find( pd => pd.key === key);
        product.quantity = savedCart[key];
        return product;
        });
        setCart(cartProducts);
    },[])

    return (
        <div>
            <span>
            <h1>Alhamdulillah! </h1>
            <h4>Order Review: {cart.length}</h4>
            </span>
            
        </div>
    );
};

export default Review;