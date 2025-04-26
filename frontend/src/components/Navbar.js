import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext, useCart} from '../context/CartContext';
import cart from "../pages/Cart";

const Navbar = () => {

    const { cart } = useCart();
    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <Link to="/" style={styles.link}>🛒 MyStore</Link>
            </div>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                <li><Link to="/cart" style={styles.link}>Cart ({cart ? cart.length : 0})</Link></li>
                <li><Link to="/login" style={styles.link}>Login</Link></li>
                <li><Link to="/register" style={styles.link}>Register</Link></li>

            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        background: '#007bff',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;
