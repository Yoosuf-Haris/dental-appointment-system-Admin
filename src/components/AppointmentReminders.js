import React, { useState } from 'react';

const AppointmentReminders = () => {
    const patientName = 'Alex Johnson'; // Single patient name

    // Initial reminders with doctors, treatments, and random dates
    const initialReminders = [
        { id: 1, doctorName: 'Dr. Emily Parker', treatment: 'Teeth Cleaning', date: randomDate(), status: 'Pending' },
        { id: 2, doctorName: 'Dr. Michael Lee', treatment: 'Root Canal', date: randomDate(), status: 'Pending' },
        { id: 3, doctorName: 'Dr. Sarah Connor', treatment: 'Dental Filling', date: randomDate(), status: 'Pending' },
        { id: 4, doctorName: 'Dr. James Smith', treatment: 'Orthodontics Consultation', date: randomDate(), status: 'Pending' },
    ];

    const [reminders, setReminders] = useState(initialReminders);

    // Function to generate a random date within the next 30 days
    function randomDate() {
        const today = new Date();
        const randomDays = Math.floor(Math.random() * 30);
        const reminderDate = new Date(today);
        reminderDate.setDate(today.getDate() + randomDays);
        return reminderDate.toDateString();
    }

    // Function to handle confirm and cancel actions with a confirmation prompt
    const handleStatusChange = (id, newStatus) => {
        const confirmationMessage = newStatus === 'Confirmed'
            ? 'Do you want to confirm this appointment?'
            : 'Do you want to cancel this appointment?';

        if (window.confirm(confirmationMessage)) {
            setReminders((prevReminders) =>
                prevReminders.map((reminder) =>
                    reminder.id === id ? { ...reminder, status: newStatus } : reminder
                )
            );
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Appointment Reminders</h2>
            <ul className="space-y-4">
                {reminders.map((reminder) => (
                    <li key={reminder.id} className="p-4 border rounded-lg shadow-md flex flex-col">
                        <h3 className="text-lg font-semibold">{patientName}</h3>
                        <p>Doctor: {reminder.doctorName}</p>
                        <p>Treatment: {reminder.treatment}</p>
                        <p>Date: {reminder.date}</p>
                        <p className={`font-semibold ${reminder.status === 'Confirmed' ? 'text-green-600' : reminder.status === 'Canceled' ? 'text-red-600' : ''}`}>
                            Status: {reminder.status}
                        </p>
                        <div className="mt-4 self-end">
                            {reminder.status === 'Pending' && (
                                <>
                                    <button
                                        onClick={() => handleStatusChange(reminder.id, 'Confirmed')}
                                        className="px-4 py-2 mr-2 text-white bg-green-500 rounded hover:bg-green-600"
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        onClick={() => handleStatusChange(reminder.id, 'Canceled')}
                                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                                    >
                                        Cancel
                                    </button>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentReminders;
