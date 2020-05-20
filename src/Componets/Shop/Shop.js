import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10)
    const [cart, setCart] =useState([]);
    const addToCartButton = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="left"></div>
            <div className="center">
                {
                    product.map(product => <Product 
                        product={product}
                        key={product.key}
                        addToCartButton={addToCartButton}
                    ></Product>)
                }
            </div>
            <div className="right">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;