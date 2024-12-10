import React, { useState } from 'react';

const ManageAppointments = () => {
    // Sample data for appointments (replace with real data from your database/API)
    const [appointments, setAppointments] = useState([
        { id: 1, patientName: 'John Doe', dentistName: 'Dr. Smith', date: '2024-11-10', time: '10:00 AM', status: 'Confirmed' },
        { id: 2, patientName: 'Jane Roe', dentistName: 'Dr. Lee', date: '2024-11-12', time: '2:00 PM', status: 'Pending' },
        { id: 3, patientName: 'Mark White', dentistName: 'Dr. Johnson', date: '2024-11-15', time: '11:00 AM', status: 'Cancelled' },
        { id: 1, patientName: 'John Doe', dentistName: 'Dr. Smith', date: '2024-11-10', time: '10:00 AM', status: 'Confirmed' },
        { id: 2, patientName: 'Jane Roe', dentistName: 'Dr. Lee', date: '2024-11-12', time: '2:00 PM', status: 'Pending' },
        { id: 3, patientName: 'Mark White', dentistName: 'Dr. Johnson', date: '2024-11-15', time: '11:00 AM', status: 'Cancelled' },
        { id: 1, patientName: 'John Doe', dentistName: 'Dr. Smith', date: '2024-11-10', time: '10:00 AM', status: 'Confirmed' },
        { id: 2, patientName: 'Jane Roe', dentistName: 'Dr. Lee', date: '2024-11-12', time: '2:00 PM', status: 'Pending' },
        { id: 3, patientName: 'Mark White', dentistName: 'Dr. Johnson', date: '2024-11-15', time: '11:00 AM', status: 'Cancelled' },
    ]);

    const [editingAppointment, setEditingAppointment] = useState(null); // Track the appointment being edited
    const [editForm, setEditForm] = useState({ date: '', time: '', status: '' }); // Form state

    // Handle opening the edit form with selected appointment data
    const handleEdit = (appointment) => {
        setEditingAppointment(appointment.id);
        setEditForm({ date: appointment.date, time: appointment.time, status: appointment.status });
    };

    // Handle input change in the edit form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    // Handle saving the edited appointment
    const handleSave = () => {
        setAppointments((prevAppointments) =>
            prevAppointments.map((appointment) =>
                appointment.id === editingAppointment ? { ...appointment, ...editForm } : appointment
            )
        );
        setEditingAppointment(null); // Close the edit form
    };

    // Handle cancelling the edit
    const handleCancel = () => {
        setEditingAppointment(null);
    };

    // Function to delete an appointment
    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this appointment?");
        if (confirmed) {
            setAppointments(appointments.filter((appointment) => appointment.id !== id));
        }
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Manage Appointments</h2>

            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b py-2 px-4">Patient Name</th>
                        <th className="border-b py-2 px-4">Dentist Name</th>
                        <th className="border-b py-2 px-4">Date</th>
                        <th className="border-b py-2 px-4">Time</th>
                        <th className="border-b py-2 px-4">Status</th>
                        <th className="border-b py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td className="border-b py-2 px-4">{appointment.patientName}</td>
                            <td className="border-b py-2 px-4">{appointment.dentistName}</td>
                            <td className="border-b py-2 px-4">{appointment.date}</td>
                            <td className="border-b py-2 px-4">{appointment.time}</td>
                            <td className="border-b py-2 px-4">{appointment.status}</td>
                            <td className="border-b py-2 px-4">
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={() => handleEdit(appointment)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(appointment.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Modal */}
            {editingAppointment && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                        <h3 className="text-xl font-bold mb-4">Edit Appointment</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={editForm.date}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Time:</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={editForm.time}
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
                                    <option value="Confirmed">Confirmed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Cancelled">Cancelled</option>
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

export default ManageAppointments;
