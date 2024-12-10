import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Form from './Form';
import { TiThMenu } from 'react-icons/ti';
import Sidebar from './Sidebar';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // Track login state

    const handleAdminLogin = (username, password) => {
        if (username === 'Admin' && password === 'admin123') {
            alert("Login successful!");
            setShowForm(false);
            setLoggedIn(true); // Set logged in state to true
            navigate('/admin');
        } else {
            alert("Invalid username or password");
        }
    };

    const handleLogout = () => {
        setLoggedIn(false); // Reset login state to false
        navigate('/'); // Optionally redirect to the home page after logout
    };

    return (
        <>
            <header className="bg-white text-black p-4 flex justify-between items-center fixed w-full top-0 z-50 border-b border-gray-200">
                <div className="flex items-center">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl text-pink-500 mr-4">
                        <TiThMenu />
                    </button>
                    <h1 className="text-xl font-bold text-pink-500">Dental Appointment System</h1>
                </div>
                <nav className="flex-1 flex justify-center space-x-10">
                    {/* Navigation Links */}
                    <Link to="/" className={`hover:text-pink-500 ${location.pathname === '/' ? 'text-pink-500' : ''}`}>Home</Link>
                    {/* Add other links as needed */}
                </nav>
                {loggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="bg-pink-500 text-white px-4 py-2 rounded-full"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-pink-500 text-white px-4 py-2 rounded-full"
                    >
                        Admin Login
                    </button>
                )}
            </header>

            {showForm && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                        <button onClick={() => setShowForm(false)} className="absolute top-2 right-2 text-gray-700">
                            &times;
                        </button>
                        <Form
                            type="admin"
                            setType={() => {}}
                            onSubmit={(username, password) => handleAdminLogin(username, password)}
                        />
                    </div>
                </div>
            )}

            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </>
    );
};

export default Header;
