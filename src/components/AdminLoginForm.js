// AdminLoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username === 'Admin' && formData.password === 'admin123') {
            alert('Admin login successful!');
            navigate('/admin'); // Redirect to the admin page
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-blue-700">Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div className="flex items-center bg-gray-100 rounded-md p-3">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full bg-transparent border-none focus:outline-none"
                            required
                        />
                    </div>
                    <div className="flex items-center bg-gray-100 rounded-md p-3">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-transparent border-none focus:outline-none"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-2 rounded-full mt-6 hover:bg-blue-800"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLoginForm;
