import React from 'react';
import { useCart } from '../context/CartContext'; // Import the useCart hook
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart } = useCart();

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div className="cart-container">
                    {cart.map((product) => (
                        <div key={product._id} className="cart-item">
                            <img src={product.image} alt={product.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{product.name}</h3>
                                <p>₹{product.price}</p>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => handleRemoveFromCart(product._id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <Link to="/">Back to Shop</Link>
        </div>
    );
};

export default CartPage;
