import React, { createContext, useState, useContext } from 'react';

// Create CartContext
export const CartContext = createContext();

// CartProvider to manage and provide cart state
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);  // Initialize cart as an empty array

    // Function to add items to the cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Function to remove items from the cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to access cart context
export const useCart = () => useContext(CartContext);
