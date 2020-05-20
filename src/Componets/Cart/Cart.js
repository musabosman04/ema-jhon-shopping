import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0
    if (total > 200) {
        shipping = 0
    }
    else if (total > 100) {
        shipping = 5
    }
    else if (total > 0) {
        shipping = 10
    }
    const tax = total % 10;
    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <p>Items Ordered {cart.length}</p>
            <p><small>Items: {(total).toFixed(2)}</small></p>
            <p><small>Shipping & Handling: {shipping}</small></p>
            <p><small>tax: {(tax).toFixed(2)}</small></p>
            <h3>Order Total: {(total + shipping + tax).toFixed(2)}</h3>
            <Link to="/review"><button className="main-button">Review your order</button></Link>
        </div>
    );
};

export default Cart;