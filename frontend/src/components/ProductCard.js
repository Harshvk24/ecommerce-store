import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart} style={styles.button}>Add to Cart</button>
        </div>
    );
};

const styles = {
    card: {
        padding: '20px',
        margin: '10px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        textAlign: 'center',
    },
    image: {
        width: '200px',
        height: '200px',
        objectFit: 'contain',
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    }
};

export default ProductCard;
