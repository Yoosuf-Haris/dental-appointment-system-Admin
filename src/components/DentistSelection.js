import React, { useState } from 'react';
import image1 from '../assets/image11.jpg';
import image2 from '../assets/image12.jpg';
import image3 from '../assets/image14.jpg';
import image4 from '../assets/image13.jpg';
import image5 from '../assets/image15.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DentistSelection = () => {
    const allDentists = [
        {
            id: 1,
            name: 'Dr. John Doe',
            specialty: 'Orthodontist',
            rating: 4.5,
            image: image1,
            experience: '15 years',
            education: 'DDS, University of Dentistry'
        },
        {
            id: 2,
            name: 'Dr. Jane Smith',
            specialty: 'Pediatric Dentist',
            rating: 4.7,
            image: image2,
            experience: '10 years',
            education: 'DDS, Pediatric Dentistry, University of Children'
        },
        {
            id: 3,
            name: 'Dr. Michael Brown',
            specialty: 'Periodontist',
            rating: 4.2,
            image: image3,
            experience: '8 years',
            education: 'DDS, Periodontics, University of Health'
        },
        {
            id: 4,
            name: 'Dr. Lisa White',
            specialty: 'General Dentist',
            rating: 4.3,
            image: image4,
            experience: '12 years',
            education: 'DDS, University of General Dentistry'
        },
        {
            id: 5,
            name: 'Dr. Chris Green',
            specialty: 'Oral Surgeon',
            rating: 4.4,
            image: image5,
            experience: '9 years',
            education: 'DDS, Oral Surgery, University of Surgery'
        }
    ];

    const [dentists, setDentists] = useState(allDentists);
    const [selectedSpecialty, setSelectedSpecialty] = useState('All');
    const [selectedRating, setSelectedRating] = useState('All');
    const [selectedDentist, setSelectedDentist] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState(null); // Initialize appointmentDate
    const [appointmentTime, setAppointmentTime] = useState(''); // Initialize appointmentTime


    // Filter dentists based on specialty and rating
    const filterDentists = () => {
        let filteredDentists = allDentists;

        if (selectedSpecialty !== 'All') {
            filteredDentists = filteredDentists.filter(dentist => dentist.specialty === selectedSpecialty);
        }

        if (selectedRating !== 'All') {
            const minRating = parseFloat(selectedRating);
            filteredDentists = filteredDentists.filter(dentist => dentist.rating >= minRating);
        }

        setDentists(filteredDentists);
    };

    // Handle specialty change
    const handleSpecialtyChange = (e) => {
        setSelectedSpecialty(e.target.value);
        filterDentists();
    };

    // Handle rating change
    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
        filterDentists();
    };

      // Handle booking of selected dentist
      const handleBookAppointment = () => {
        setDentists(dentists.map(dentist =>
            dentist.id === selectedDentist.id ? { ...dentist, booked: true } : dentist
        ));
        alert(`Appointment booked on ${appointmentDate.toLocaleDateString()} at ${appointmentTime}`);
        setSelectedDentist(null); // Reset selected dentist after booking
        setAppointmentDate(null); // Clear date selection
        setAppointmentTime(''); // Clear time selection

    };

    return (
        <div className="flex">
            {/* Filter Sidebar */}
            <aside className="w-1/4 p-4 bg-gray-100 border-r border-gray-200">
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                <div>
                    <label className="block text-gray-700">Specialty</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded"
                        value={selectedSpecialty}
                        onChange={handleSpecialtyChange}
                    >
                        <option value="All">All</option>
                        <option value="Orthodontist">Orthodontist</option>
                        <option value="Pediatric Dentist">Pediatric Dentist</option>
                        <option value="Periodontist">Periodontist</option>
                        <option value="General Dentist">General Dentist</option>
                        <option value="Oral Surgeon">Oral Surgeon</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Rating</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded"
                        value={selectedRating}
                        onChange={handleRatingChange}
                    >
                        <option value="All">All</option>
                        <option value="4.0">4+ stars</option>
                        <option value="3.0">3+ stars</option>
                        <option value="2.0">2+ stars</option>
                    </select>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-white">
                <h2 className="text-2xl font-bold mb-6">Select a Dentist</h2>
                
                {selectedDentist ? (
                    <div className="border border-gray-200 rounded-lg p-4 shadow-lg">
                        <img src={selectedDentist.image} alt={selectedDentist.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{selectedDentist.name}</h3>
                            <p className="text-gray-600">{selectedDentist.specialty}</p>
                            <div className="mt-2 flex items-center">
                                <span className="text-yellow-500">&#9733;</span>
                                <span className="ml-2">{selectedDentist.rating}</span>
                            </div>
                            <p className="mt-2 text-gray-700"><strong>Experience:</strong> {selectedDentist.experience}</p>
                            <p className="mt-1 text-gray-500"><strong>Education:</strong> {selectedDentist.education}</p>

 {/* Date and Time Selection */}
 <div className="mt-4">
                                <label className="block text-gray-700 mb-2">Select Appointment Date</label>
                                <DatePicker
                                    selected={appointmentDate}
                                    onChange={(date) => setAppointmentDate(date)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholderText="Select Date"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 mb-2">Select Appointment Time</label>
                                <input
                                    type="time"
                                    value={appointmentTime}
                                    onChange={(e) => setAppointmentTime(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            {selectedDentist.booked ? (
                                <p className="text-red-500 font-bold mt-4">Doctor Already Booked</p>
                            ) : (
                                <div className="mt-4 flex space-x-4">
                                    <button
                                        onClick={handleBookAppointment}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            )}
                            <button
                                onClick={() => setSelectedDentist(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-4"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dentists.map(dentist => (
                            <div
                                key={dentist.id}
                                onClick={() => setSelectedDentist(dentist)}
                                className={`cursor-pointer border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition ${
                                    dentist.booked ? 'bg-gray-100' : ''
                                }`}
                            >
                                <img src={dentist.image} alt={dentist.name} className="w-full h-32 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">{dentist.name}</h3>
                                    <p className="text-gray-600">{dentist.specialty}</p>
                                    <div className="mt-2 flex items-center">
                                        <span className="text-yellow-500">&#9733;</span>
                                        <span className="ml-2">{dentist.rating}</span>
                                    </div>
                                    <p className="mt-2 text-gray-700"><strong>Experience:</strong> {dentist.experience}</p>
                                    <p className="mt-1 text-gray-500"><strong>Education:</strong> {dentist.education}</p>
                                    {dentist.booked && (
                                        <p className="text-red-500 font-bold mt-2">Doctor Already Booked</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default DentistSelection;
