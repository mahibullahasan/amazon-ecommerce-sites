import React from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css"


const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price ,0)
    //console.log(cart);
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping =0;
    }
    else if(total >15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = total/10;
    const grandTotal = (total + shipping + tax).toFixed(2);

    /*const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    */

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Item Ordered: {cart.length}</p>
            <p><small>Shipping & Handling:</small> {shipping}</p>
            <p><small>Total before Tax:</small> {total.toFixed(2)}</p>
            <p>Tax + VAT: {tax.toFixed(2)}</p>
            <p><span className='order-total'>Order Total: </span>{grandTotal} </p>
            <br />
            <Link to="/review">
                <button className='add-cart-btn'>Review Order</button>
            </Link>
            
            

        </div>
    );
};

export default Cart;