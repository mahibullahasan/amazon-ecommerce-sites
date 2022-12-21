import React from 'react';
import "./Reviewitem.css"

const Reviewitem = (props) => {
    console.log(props);
    const {name, quantity, key,price} = props.product;
    return (
        <div className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br />
            <button 
            className="add-cart-btn"
            onClick={() =>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default Reviewitem;