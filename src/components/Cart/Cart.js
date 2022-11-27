import React from 'react';
import "./Cart.css"


const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price ,0)

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
            <h3>Order Total: {grandTotal} </h3>
            
            

        </div>
    );
};

export default Cart;