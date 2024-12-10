import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-lg font-bold">Admin Menu</h2>
                {/* Close Button */}
                <button onClick={() => setSidebarOpen(false)} className="text-gray-300 text-2xl">&times;</button>
            </div>
            
            {/* Navigation Links */}
            <aside className="w-64 bg-gray-800 text-white p-6 h-full overflow-y-auto">
               
                
                {/* Quick Actions Section */}
                <section className="w-full py-4 bg-gray-700 px-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-center text-gray-300">Quick Actions</h2>
                    <div className="space-y-4">
                        <div className="flex justify-center">
                            <Link to="/events" className="text-blue-500 hover:underline text-center">Manage Appointments</Link>
                        </div>
                        <div className="flex justify-center">
                            <Link to="/treatment-information" className="text-green-500 hover:underline text-center">Manage Patients</Link>
                        </div>
                        <div className="flex justify-center">
                            <Link to="/appointment-rescheduling" className="text-red-500 hover:underline text-center">Manage Dentists</Link>
                        </div>
                    </div>
                </section>

                <nav className="space-y-4 mb-8">
                    <Link to="reviews-and-ratings" className="block hover:bg-gray-600 p-2 rounded">Reviews</Link>
                    <Link to="admins" className="block hover:bg-gray-600 p-2 rounded">Settings</Link>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
