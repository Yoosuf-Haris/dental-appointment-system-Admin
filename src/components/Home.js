import React from 'react';
import Dental from '../assets/image01.jpg';

const AdminHome = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Header Section */}
            <section className="w-full h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${Dental})` }}>
                <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <h1 className="text-white text-5xl md:text-6xl font-bold">Admin Dashboard</h1>
                </div>
            </section>

            {/* Overview Section */}
            <section className="w-full py-16 px-8 md:px-32">
                <h2 className="text-3xl font-semibold mb-8 text-center">Admin Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">Total Appointments</h3>
                        <p className="text-4xl font-semibold text-blue-500">120</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">Registered Patients</h3>
                        <p className="text-4xl font-semibold text-green-500">75</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">Active Dentists</h3>
                        <p className="text-4xl font-semibold text-red-500">5</p>
                    </div>
                </div>
            </section>

            {/* Actions Section */}
           

            {/* About Section */}
            <section className="w-full py-10 px-5 md:px-32 bg-gray-800 text-white">
                <h2 className="text-3xl font-semibold mb-5 text-center">About Admin Panel</h2>
                <p className="text-lg text-center mb-5">
                    Welcome to the Admin Dashboard for the Dental Clinic Management System. This panel allows administrators to manage appointments, patients, and dentists, as well as access real-time data on clinic operations.
                </p>
            </section>

            {/* Footer */}
            <div className="w-full py-4 bg-gray-900 text-white text-center">
                <p>Copyright © 2024. All rights reserved. Designed By Yoosuf Haris</p>
            </div>
        </div>
    );
};

export default AdminHome;
