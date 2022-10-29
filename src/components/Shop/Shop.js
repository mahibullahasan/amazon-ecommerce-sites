import React, { useState } from 'react';
import fakeData from '../../fakeData';

const Shop = () => { 
    const first10 = fakeData;
    const [products, setProducts] = useState(first10);
    
    
    return (
        <div>
            <ul>
                {
                    products.map( products => <li>{products.name}</li> )
                }
            </ul>
        </div>
    );
    
};
export default Shop;