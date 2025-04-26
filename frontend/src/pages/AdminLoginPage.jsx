import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Hardcoded username and password
        if (username === 'admin' && password === 'admin123') {
            onLoginSuccess();
            navigate('/admin');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <form onSubmit={handleLogin}>
                <h2>Admin Login</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AdminLoginPage;
