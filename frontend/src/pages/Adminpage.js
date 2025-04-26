import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Card, CardContent, Grid, Container } from '@mui/material';
import AdminLoginPage from './AdminLoginPage';

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: null, // We store the image as a file
    });

    // Fetch products when the component is mounted
    useEffect(() => {
        fetchProducts();
    }, []);

    // Fetch all products from the backend
    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
    };

    // Handle form input changes
    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] }); // Set the selected file
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    // Handle form submission (adding new product)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(); // Create FormData to handle both file uploads and text fields
        form.append('name', formData.name);
        form.append('price', formData.price);
        form.append('description', formData.description);

        // Ensure image is appended
        if (formData.image) {
            form.append('image', formData.image);
        }

        try {
            const res = await axios.post('http://localhost:5000/api/products', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // After successful submission, reset the form and fetch products again
            setFormData({ name: '', price: '', description: '', image: null });
            fetchProducts(); // Refresh the product list
        } catch (err) {
            console.error('Error adding product:', err);
            alert('Error adding product');
        }
    };


    // Handle product deletion
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
    };

    const AdminPage = () => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        const handleLoginSuccess = () => {
            setIsAuthenticated(true);
        };

        if (!isAuthenticated) {
            return <AdminLoginPage onLoginSuccess={handleLoginSuccess} />;
        }

        return (
            <div className="admin-container">
                <h1>Admin Dashboard</h1>
                {/* Your admin functionalities go here */}
                <p>Welcome, Admin!</p>
            </div>
        );
    };
    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Admin Panel
            </Typography>

            {/* Product Form */}
            <Card variant="outlined" sx={{ marginBottom: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Add New Product
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Product Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Product Price (₹)"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                    type="number"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Product Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleChange}
                                    required
                                    accept="image/*"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Add Product
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>

            {/* Product List */}
            <Typography variant="h5" gutterBottom>
                All Products
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product._id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography color="textSecondary">₹{product.price}</Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    {product.description}
                                </Typography>
                                <img
                                    src={`http://localhost:5000/uploads/${product.image}`} // Display the image
                                    alt={product.name}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    fullWidth
                                    onClick={() => handleDelete(product._id)}
                                >
                                    Delete
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default AdminPage;
