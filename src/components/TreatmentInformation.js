import React, { useState } from 'react';

const ManagePatients = () => {
    const [patients, setPatients] = useState([
        { id: 1, name: 'John Doe', age: 30, gender: 'Male', contact: '123-456-7890', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Roe', age: 25, gender: 'Female', contact: '234-567-8901', email: 'jane.roe@example.com' },
        { id: 3, name: 'Mark White', age: 40, gender: 'Male', contact: '345-678-9012', email: 'mark.white@example.com' },
        { id: 1, name: 'John Doe', age: 30, gender: 'Male', contact: '123-456-7890', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Roe', age: 25, gender: 'Female', contact: '234-567-8901', email: 'jane.roe@example.com' },
        { id: 3, name: 'Mark White', age: 40, gender: 'Male', contact: '345-678-9012', email: 'mark.white@example.com' },
        { id: 3, name: 'Mark White', age: 40, gender: 'Male', contact: '345-678-9012', email: 'mark.white@example.com' },
        { id: 1, name: 'John Doe', age: 30, gender: 'Male', contact: '123-456-7890', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Roe', age: 25, gender: 'Female', contact: '234-567-8901', email: 'jane.roe@example.com' },
        { id: 3, name: 'Mark White', age: 40, gender: 'Male', contact: '345-678-9012', email: 'mark.white@example.com' },
    ]);

    const [editingPatient, setEditingPatient] = useState(null); // Track the patient being edited
    const [editForm, setEditForm] = useState({ name: '', age: '', gender: '', contact: '', email: '' }); // Form state

    // Handle opening the edit form with selected patient data
    const handleEdit = (patient) => {
        setEditingPatient(patient.id);
        setEditForm({ ...patient });
    };

    // Handle input change in the edit form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    // Handle saving the edited patient
    const handleSave = () => {
        setPatients((prevPatients) =>
            prevPatients.map((patient) =>
                patient.id === editingPatient ? { ...patient, ...editForm } : patient
            )
        );
        setEditingPatient(null); // Close the edit form
    };

    // Handle cancelling the edit
    const handleCancel = () => {
        setEditingPatient(null);
    };

    // Function to delete a patient
    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this patient?");
        if (confirmed) {
            setPatients(patients.filter((patient) => patient.id !== id));
        }
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Manage Patients</h2>

            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b py-2 px-4">Name</th>
                        <th className="border-b py-2 px-4">Age</th>
                        <th className="border-b py-2 px-4">Gender</th>
                        <th className="border-b py-2 px-4">Contact</th>
                        <th className="border-b py-2 px-4">Email</th>
                        <th className="border-b py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td className="border-b py-2 px-4">{patient.name}</td>
                            <td className="border-b py-2 px-4">{patient.age}</td>
                            <td className="border-b py-2 px-4">{patient.gender}</td>
                            <td className="border-b py-2 px-4">{patient.contact}</td>
                            <td className="border-b py-2 px-4">{patient.email}</td>
                            <td className="border-b py-2 px-4">
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={() => handleEdit(patient)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(patient.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Modal */}
            {editingPatient && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                        <h3 className="text-xl font-bold mb-4">Edit Patient</h3>
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
                                <label className="block text-gray-700">Age:</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={editForm.age}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Gender:</label>
                                <select
                                    name="gender"
                                    value={editForm.gender}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
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
                                <label className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editForm.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
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

export default ManagePatients;
