import React, { useState } from 'react';

const ManageDentists = () => {
    // Sample data for dentists (replace with real data from your database/API)
    const [dentists, setDentists] = useState([
        { id: 1, name: 'Dr. Smith', specialty: 'Orthodontics', contact: '555-1234', status: 'Active' },
        { id: 2, name: 'Dr. Lee', specialty: 'Periodontics', contact: '555-5678', status: 'Active' },
        { id: 3, name: 'Dr. Johnson', specialty: 'Endodontics', contact: '555-9101', status: 'Inactive' },
        { id: 1, name: 'Dr. Smith', specialty: 'Orthodontics', contact: '555-1234', status: 'Active' },
        { id: 2, name: 'Dr. Lee', specialty: 'Periodontics', contact: '555-5678', status: 'Active' },
        { id: 3, name: 'Dr. Johnson', specialty: 'Endodontics', contact: '555-9101', status: 'Inactive' },
    ]);

    const [editingDentist, setEditingDentist] = useState(null); // Track the dentist being edited
    const [editForm, setEditForm] = useState({ name: '', specialty: '', contact: '', status: '' }); // Form state

    // Function to handle opening the edit form with selected dentist data
    const handleEdit = (dentist) => {
        setEditingDentist(dentist.id);
        setEditForm({ name: dentist.name, specialty: dentist.specialty, contact: dentist.contact, status: dentist.status });
    };

    // Function to handle input changes in the edit form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    // Function to save the edited dentist data
    const handleSave = () => {
        setDentists((prevDentists) =>
            prevDentists.map((dentist) =>
                dentist.id === editingDentist ? { ...dentist, ...editForm } : dentist
            )
        );
        setEditingDentist(null); // Close the edit form
    };

    // Function to cancel editing
    const handleCancel = () => {
        setEditingDentist(null);
    };

    // Function to delete a dentist
    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this dentist?");
        if (confirmed) {
            setDentists(dentists.filter((dentist) => dentist.id !== id));
        }
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Manage Dentists</h2>

            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b py-2 px-4">Name</th>
                        <th className="border-b py-2 px-4">Specialty</th>
                        <th className="border-b py-2 px-4">Contact</th>
                        <th className="border-b py-2 px-4">Status</th>
                        <th className="border-b py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dentists.map((dentist) => (
                        <tr key={dentist.id}>
                            <td className="border-b py-2 px-4">{dentist.name}</td>
                            <td className="border-b py-2 px-4">{dentist.specialty}</td>
                            <td className="border-b py-2 px-4">{dentist.contact}</td>
                            <td className="border-b py-2 px-4">{dentist.status}</td>
                            <td className="border-b py-2 px-4">
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={() => handleEdit(dentist)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(dentist.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Modal */}
            {editingDentist && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                        <h3 className="text-xl font-bold mb-4">Edit Dentist</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editForm.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Specialty:</label>
                                <input
                                    type="text"
                                    name="specialty"
                                    value={editForm.specialty}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Contact:</label>
                                <input
                                    type="text"
                                    name="contact"
                                    value={editForm.contact}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Status:</label>
                                <select
                                    name="status"
                                    value={editForm.status}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageDentists;
