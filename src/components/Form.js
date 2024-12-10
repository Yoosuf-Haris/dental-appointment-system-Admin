// Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData.username, formData.password);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
              <h1 className="text-2xl font-bold mb-6 text-blue-700">Admin Login</h1>
            <div>
                <label className="block text-gray-700">Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Login
            </button>
        </form>
    );
};

export default Form;
