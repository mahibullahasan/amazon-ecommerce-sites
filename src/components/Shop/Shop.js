import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <h5>Item Ordered: 0</h5>
      </div>
    </div>
  );
};
export default Shop;
