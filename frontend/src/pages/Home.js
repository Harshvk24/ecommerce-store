import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; // Import the useCart hook
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import './HomePage.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();  // Use addToCart from CartContext

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/products');
            setProducts(res.data);
        } catch (err) {
            console.log(err);
            toast.error('Error fetching products');
        }
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div>
            {/* Products Grid */}
            <div className="products-container">
                {products.map((product) => (
                    <div className="product-card" key={product._id}>
                        <img
                            src={`http://localhost:5000/uploads/${product.image}`} // Corrected string interpolation
                            alt={product.name}
                            className="product-image"
                        />
                        <h3>{product.name}</h3>
                        <p>₹{product.price}</p>
                        <p>{product.description}</p>
                        <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
