import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        // If not authenticated, redirect to login page
        return <Navigate to="/admin-login" />;
    }

    return children;
};

export default PrivateRoute;
