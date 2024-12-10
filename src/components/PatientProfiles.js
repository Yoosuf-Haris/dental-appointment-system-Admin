import React, { useState } from 'react';
import image16 from '../assets/image16.jpg';

const PatientProfiles = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [patient, setPatient] = useState({
        name: 'Alex Johnson',
        age: 30,
        gender: 'Male',
        contact: '555-1234',
        email: 'alex.johnson@example.com',
        address: '123 Main St, Springfield',
        profilePicture: image16,
        medicalHistory: 'Diabetes, Hypertension',
        currentMedications: 'Metformin, Amlodipine',
        lastAppointment: '2024-10-01',
        nextAppointment: '2024-11-15',
    });

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient((prevPatient) => ({
            ...prevPatient,
            [name]: value,
        }));
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-center mb-4">Patient Profile</h2>
            
            <div className="flex flex-col items-center space-y-4">
                <img
                    src={patient.profilePicture}
                    alt={`${patient.name} Profile`}
                    className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
                />
            </div>

            <div className="space-y-4 text-left">
                {isEditing ? (
                    <>
                        <label>
                            <strong>Name:</strong>
                            <input
                                type="text"
                                name="name"
                                value={patient.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                        <label>
                            <strong>Age:</strong>
                            <input
                                type="number"
                                name="age"
                                value={patient.age}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                        <label>
                            <strong>Gender:</strong>
                            <input
                                type="text"
                                name="gender"
                                value={patient.gender}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                        <label>
                            <strong>Contact:</strong>
                            <input
                                type="text"
                                name="contact"
                                value={patient.contact}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                        <label>
                            <strong>Email:</strong>
                            <input
                                type="email"
                                name="email"
                                value={patient.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                        <label>
                            <strong>Address:</strong>
                            <input
                                type="text"
                                name="address"
                                value={patient.address}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                    </>
                ) : (
                    <>
                        <p><strong>Name:</strong> {patient.name}</p>
                        <p><strong>Age:</strong> {patient.age}</p>
                        <p><strong>Gender:</strong> {patient.gender}</p>
                        <p><strong>Contact:</strong> {patient.contact}</p>
                        <p><strong>Email:</strong> {patient.email}</p>
                        <p><strong>Address:</strong> {patient.address}</p>
                    </>
                )}
            </div>

            <button 
                onClick={toggleEdit}
                className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                {isEditing ? 'Save' : 'Edit Profile'}
            </button>
        </div>
    );
};

export default PatientProfiles;
