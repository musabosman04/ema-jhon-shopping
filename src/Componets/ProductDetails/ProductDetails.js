import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './ProductDetails.css';

const ProductDetails = () => {
    let {productKey} = useParams();
    let product = fakeData.find(pd => pd.key === productKey); 
    console.log(product);
    return (
        <div className="container">
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
                <p><small>by: {product.seller}</small></p>
                <p>${product.price}</p>
                <p><small>only {product.stock} left in stock-order soon</small></p>
        </div>
    );
};

export default ProductDetails;