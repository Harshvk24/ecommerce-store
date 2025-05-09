const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String }, // Store the image filename
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
