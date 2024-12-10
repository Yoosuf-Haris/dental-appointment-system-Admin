import React, { useState } from 'react';
import image16 from '../assets/image16.jpg';

const OnlinePayment = () => {
    // Sample appointments with initial status as "Unpaid"
    const [appointments, setAppointments] = useState([
        { id: 1, date: '2024-11-01', treatment: 'Dental Cleaning', doctor: 'Dr. Smith', cost: 100, status: 'Unpaid' },
        { id: 2, date: '2024-11-05', treatment: 'Tooth Extraction', doctor: 'Dr. Patel', cost: 200, status: 'Unpaid' },
        { id: 3, date: '2024-11-10', treatment: 'Orthodontic Consultation', doctor: 'Dr. Lee', cost: 150, status: 'Unpaid' },
    ]);

    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expiration: '',
        cvv: '',
    });

    // Handle appointment selection
    const handleSelectAppointment = (appointment) => {
        setSelectedAppointment(appointment);
    };

    // Handle payment input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    // Submit payment and update status
    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        
        // Update appointment status to "Paid"
        setAppointments((prevAppointments) =>
            prevAppointments.map((appointment) =>
                appointment.id === selectedAppointment.id
                    ? { ...appointment, status: 'Paid' }
                    : appointment
            )
        );

        alert(`Payment successful for ${selectedAppointment.treatment}`);
        setSelectedAppointment(null); // Reset after payment
        setPaymentInfo({ cardNumber: '', expiration: '', cvv: '' }); // Clear form
    };

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Online Payment</h2>

            {/* Appointment Selection or Selected Appointment Details */}
            {!selectedAppointment ? (
                <>
                    <h3 className="text-lg font-semibold mb-2">Select an Appointment:</h3>
                    <ul className="space-y-2 mb-4">
                        {appointments.map((appointment) => (
                            <li
                                key={appointment.id}
                                className={`flex justify-between items-center p-2 border rounded-lg ${appointment.status === 'Paid' ? 'bg-green-100' : ''}`}
                            >
                                <div>
                                    <p><strong>Date:</strong> {appointment.date}</p>
                                    <p><strong>Treatment:</strong> {appointment.treatment}</p>
                                    <p><strong>Doctor:</strong> {appointment.doctor}</p>
                                    <p><strong>Cost:</strong> ${appointment.cost}</p>
                                    <p><strong>Status:</strong> {appointment.status}</p>
                                </div>
                                {appointment.status === 'Unpaid' && (
                                    <button
                                        onClick={() => handleSelectAppointment(appointment)}
                                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Select
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    {/* Selected Appointment Details */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Selected Appointment</h3>
                        <div className="p-3 border rounded-lg bg-gray-100">
                            <p><strong>Date:</strong> {selectedAppointment.date}</p>
                            <p><strong>Treatment:</strong> {selectedAppointment.treatment}</p>
                            <p><strong>Doctor:</strong> {selectedAppointment.doctor}</p>
                            <p><strong>Cost:</strong> ${selectedAppointment.cost}</p>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                        <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
                        <div>
                            <label className="block font-semibold">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={paymentInfo.cardNumber}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border rounded"
                                placeholder="Enter your card number"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-semibold">Expiration Date</label>
                            <input
                                type="text"
                                name="expiration"
                                value={paymentInfo.expiration}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border rounded"
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-semibold">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={paymentInfo.cvv}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border rounded"
                                placeholder="CVV"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-green-500 text-white rounded mt-4 hover:bg-green-600"
                        >
                            Pay ${selectedAppointment.cost}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default OnlinePayment;
