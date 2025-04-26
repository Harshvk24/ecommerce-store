const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

// Get Cart by user
router.get('/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.json(cart);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Add to cart
router.post('/', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId });
        if (cart) {
            cart.products.push({ productId, quantity });
            await cart.save();
        } else {
            const newCart = new Cart({ userId, products: [{ productId, quantity }] });
            await newCart.save();
        }
        res.status(201).json('Product added to cart');
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;
