import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import './Review.css'
import Reviewitem from './Reviewitem/Reviewitem';
import thankYouimage from '../../images/thankyou.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
        
    }

    const removeProduct = (productKey) =>{        
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

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
    },[]);

    let thankyou;
    if(orderPlaced){
        thankyou = <img className='thankyouimg' src={thankYouimage} alt="" />
    } 

    return (
        <div className='twin-container'>
           <div className='product-container'>
                {
                    cart.map(pd=><Reviewitem 
                        key={pd.key} 
                        removeProduct ={removeProduct}
                        product={pd}>

                        </Reviewitem>)
                }
                {
                    thankyou
                }
            

           </div>
           <div className='cart-container'>
            <Cart cart={cart}>
            <button onClick={handlePlaceOrder} className='add-cart-btn'>Place Order</button>
            </Cart>
            

           </div>
                

            
            
        </div>
    );
};

export default Review;