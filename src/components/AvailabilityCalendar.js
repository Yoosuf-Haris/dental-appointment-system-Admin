import React from 'react';
import 'tailwindcss/tailwind.css'; // Import TailwindCSS

const AvailabilityCalendar = () => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Define special dates and their colors
    const specialDates = {
        '01-05': 'bg-sky-500', // Thanksgiving
        '07-04': 'bg-green-400', // Independence Day
        '02-04': 'bg-purple-400', // Christmas Day
        '04-15': 'bg-sky-500', // Thanksgiving
        '11-11': 'bg-purple-400', // Veterans Day
        '11-23': 'bg-orange-400', // Thanksgiving
        '10-02': 'bg-sky-500', // Thanksgiving
        '09-07': 'bg-sky-500', // Thanksgiving
        '03-14': 'bg-sky-500', // Thanksgiving
        '10-20': 'bg-sky-500', // Thanksgiving
        '12-25': 'bg-purple-400', // Christmas Day
        '01-01': 'bg-red-400', // Closed on New Year's Day
        // Add more closed dates as needed
    };

    // Function to generate days for a given month
    const generateDays = (year, month) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const daysArray = [];

        // Fill in the empty days before the first day of the month
        for (let i = 0; i < firstDayIndex; i++) {
            daysArray.push(<div key={`empty-${month}-${i}`} className="py-2"></div>);
        }

        // Fill in the days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const dateKey = `${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
            const dayClass = specialDates[dateKey] || 'bg-white';
            daysArray.push(
                <div key={`${month}-${i}`} className={`py-2 ${dayClass}`}>
                    {i}
                </div>
            );
        }

        return daysArray;
    };

    return (
        <div className="p-4">
            <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Office Open And Closed Days 2023</h1>
            <div className="flex justify-center mb-4">
                <span className="flex items-center mr-4">
                    <span className="bg-green-500 w-3 h-3 inline-block rounded-full mr-1"></span>
                    Independence Day
                </span>
                <span className="flex items-center mr-4">
                    <span className="bg-purple-500 w-3 h-3 inline-block rounded-full mr-1"></span>
                    Veterans Day
                </span>
                <span className="flex items-center mr-4">
                    <span className="bg-orange-500 w-3 h-3 inline-block rounded-full mr-1"></span>
                poya
                </span>
                <span className="flex items-center mr-4">
                    <span className="bg-sky-500 w-3 h-3 inline-block rounded-full mr-1"></span>
                    Thanksgiving
                </span>
                <span className="flex items-center mr-4">
                    <span className="bg-red-500 w-3 h-3 inline-block rounded-full mr-1"></span>
                    Christmas Day
                </span>
                <span className="flex items-center">
                    <span className="bg-red-500 w-3 h-3 inline-block rounded-full mr-1"></span>
                    Closed
                </span>
                 </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-screen">
                {monthNames.map((month, index) => (
                    <div key={month} className="bg-white shadow-lg p-4">
                        <h2 className="text-lg font-bold text-center bg-blue-600 text-white p-2 rounded-t-lg">{month} 2023</h2>
                        <div className="grid grid-cols-7 gap-2 mt-2 text-center">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                                <div key={day} className="font-bold">{day}</div>
                            ))}
                            {generateDays(2023, index)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailabilityCalendar;
