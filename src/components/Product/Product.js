import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
import {Link} from "react-router-dom";


const Product = (props) => {
  //console.log(props.product);
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-area">
        <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>
          <small>${price}</small>
        </p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        { 
          props.showAddToCart === true && <button className="add-cart-btn" onClick={() =>props.handleAddProduct(props.product)}>
            <FontAwesomeIcon icon={faCartShopping} />add to cart</button>
            }
        
      </div>
      
      
    </div>
    
  );
};

export default Product;
