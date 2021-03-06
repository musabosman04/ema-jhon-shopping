import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { name, img, price, seller, stock, key } = props.product;
    const buttonIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3><Link to={"/product/" + key}>{name}</Link></h3>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock-order soon</small></p>
                <button className="main-button"
                    onClick={() =>props.addToCartButton(props.product)}
                >{buttonIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;