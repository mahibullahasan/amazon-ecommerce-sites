import React from 'react';

const Product = (props) => {
    const {img, name} = props.product;
    return (
        <div className='product'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='product-container'>
                 <h4>{name}</h4>                     
            </div>
            
        </div>
    );
};

export default Product;