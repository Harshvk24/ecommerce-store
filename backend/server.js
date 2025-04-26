const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const Product = require('./models/Product'); // Import your product model

dotenv.config(); // Load environment variables
const app = express();

// Set up Multer storage for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Files will be saved in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename using timestamp
    },
});

const upload = multer({ storage }); // Set up multer with storage configuration

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/uploads', express.static('uploads')); // Serve images from the 'uploads' folder

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Routes

// Product POST endpoint (to create a new product)
app.post('/api/products', upload.single('image'), async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const image = req.file ? req.file.filename : null; // Get the uploaded image filename

        // Validate the incoming data
        if (!name || !price || !description || !image) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Create a new product and save to the database
        const newProduct = new Product({
            name,
            price: parseFloat(price),
            description,
            image,
        });

        await newProduct.save();
        res.status(201).json(newProduct); // Send back the newly created product
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error adding product' });
    }
});

// Product GET endpoint (to fetch all products)
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products); // Send back the list of products
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Product DELETE endpoint (to delete a product)
app.delete('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting product' });
    }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
