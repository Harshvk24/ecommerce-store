import React from 'react';
import { useCart } from '../context/CartContext';  // Import useCart to get cart state

const Cart = () => {
    const { cart, removeFromCart } = useCart();  // Access cart from context

    // Return early if cart is not yet available
    if (!cart) return <div>Loading...</div>;

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    {cart.map((product) => (
                        <div key={product._id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>₹{product.price}</p>
                            <button onClick={() => removeFromCart(product._id)}>
                                Remove from Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


const styles = {
    container: {
        padding: '20px',
    },
    cartList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    cartItem: {
        border: '1px solid #ddd',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
    removeBtn: {
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    }
};

export default Cart;
