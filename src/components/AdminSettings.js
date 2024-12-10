import React, { useState } from 'react';

const AdminSettings = () => {
    // State to hold form data
    const [profile, setProfile] = useState({
        name: 'Admin',
        email: 'admin@example.com',
        password: '',
    });

    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        smsNotifications: false,
    });

    const [systemSettings, setSystemSettings] = useState({
        timeZone: 'UTC',
        language: 'English',
    });

    // Function to handle profile changes
    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    // Function to handle notifications changes
    const handleNotificationsChange = (e) => {
        const { name, checked } = e.target;
        setNotifications((prevNotifications) => ({
            ...prevNotifications,
            [name]: checked,
        }));
    };

    // Function to handle system settings changes
    const handleSystemSettingsChange = (e) => {
        const { name, value } = e.target;
        setSystemSettings((prevSettings) => ({
            ...prevSettings,
            [name]: value,
        }));
    };

    // Function to handle form submission (save changes)
    const handleSave = () => {
        alert("Settings saved successfully!");
        // Here you would typically send the updated settings to your backend API
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Admin Settings</h2>

            {/* Profile Settings */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
                <label className="block mb-2">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </label>
                <label className="block mb-2">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </label>
                <label className="block mb-2">
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={profile.password}
                        onChange={handleProfileChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </label>
            </section>

            {/* Notification Settings */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
                <label className="block mb-2">
                    <input
                        type="checkbox"
                        name="emailNotifications"
                        checked={notifications.emailNotifications}
                        onChange={handleNotificationsChange}
                        className="mr-2"
                    />
                    Email Notifications
                </label>
                <label className="block mb-2">
                    <input
                        type="checkbox"
                        name="smsNotifications"
                        checked={notifications.smsNotifications}
                        onChange={handleNotificationsChange}
                        className="mr-2"
                    />
                    SMS Notifications
                </label>
            </section>

            {/* System Settings */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-4">System Settings</h3>
                <label className="block mb-2">
                    Time Zone:
                    <select
                        name="timeZone"
                        value={systemSettings.timeZone}
                        onChange={handleSystemSettingsChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="UTC">UTC</option>
                        <option value="PST">PST</option>
                        <option value="EST">EST</option>
                        <option value="CST">CST</option>
                        {/* Add more time zones as needed */}
                    </select>
                </label>
                <label className="block mb-2">
                    Language:
                    <select
                        name="language"
                        value={systemSettings.language}
                        onChange={handleSystemSettingsChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        {/* Add more languages as needed */}
                    </select>
                </label>
            </section>

            <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Save Changes
            </button>
        </div>
    );
};

export default AdminSettings;
