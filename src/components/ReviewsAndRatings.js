import React, { useState } from 'react';

const ManageReviews = () => {
    // Sample data for reviews (replace with real data from your database/API)
    const [reviews, setReviews] = useState([
        { id: 1, patientName: 'John Doe', review: 'Great service, very friendly staff!', rating: 5, date: '2024-11-05' },
        { id: 2, patientName: 'Jane Roe', review: 'Appointment was on time and the dentist was professional.', rating: 4, date: '2024-11-04' },
        { id: 3, patientName: 'Mark White', review: 'Good experience but the wait time was a bit long.', rating: 3, date: '2024-11-03' },
        { id: 2, patientName: 'Jane Roe', review: 'Appointment was on time and the dentist was professional.', rating: 4, date: '2024-11-04' },
        { id: 3, patientName: 'Mark White', review: 'Good experience but the wait time was a bit long.', rating: 3, date: '2024-11-03' },
        { id: 1, patientName: 'John Doe', review: 'Great service, very friendly staff!', rating: 5, date: '2024-11-05' },
    ]);

    // Function to handle deleting a review
    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this review?");
        if (confirmed) {
            setReviews(reviews.filter((review) => review.id !== id));
        }
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Manage Reviews</h2>

            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b py-2 px-4">Patient Name</th>
                        <th className="border-b py-2 px-4">Review</th>
                        <th className="border-b py-2 px-4">Rating</th>
                        <th className="border-b py-2 px-4">Date</th>
                        <th className="border-b py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review) => (
                        <tr key={review.id}>
                            <td className="border-b py-2 px-4">{review.patientName}</td>
                            <td className="border-b py-2 px-4">{review.review}</td>
                            <td className="border-b py-2 px-4">{review.rating} / 5</td>
                            <td className="border-b py-2 px-4">{review.date}</td>
                            <td className="border-b py-2 px-4">
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(review.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageReviews;
