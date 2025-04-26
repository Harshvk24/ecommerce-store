import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';  // Import your CartProvider
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from "./pages/Adminpage";
import AdminLoginPage from "./pages/AdminLoginPage";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from 'react';
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <CartProvider>  {/* Wrap your app with CartProvider */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/admin"
                        element={
                            <PrivateRoute isAuthenticated={isAuthenticated}>
                                <AdminPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/admin-login" element={<AdminLoginPage onLoginSuccess={() => setIsAuthenticated(true)} />} />

                </Routes>
                <ToastContainer />
            </Router>
        </CartProvider>
    );
};

export default App;
