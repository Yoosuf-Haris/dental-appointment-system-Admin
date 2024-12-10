import React from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from '../assets/image08.jpg';
import image1 from '../assets/image09.jpg';
import image2 from '../assets/myimage.jpg';
import image3 from '../assets/image07.jpg';
import image4 from '../assets/image06.jpg';
import image5 from '../assets/image10.jpg';

const AppointmentScheduling = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center p-6">
            <div className="relative w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${myImage})` }}>
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white text-3xl md:text-4xl font-bold">Dental Clinics Booking Website</h1>
                    </div>
                </div>
                <div className="p-6 flex flex-col items-center">
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 mb-6"
                        onClick={() => navigate('/dentist-selection')}
                    >
                        Book now
                    </button>
                    <div className="w-full flex justify-between items-center text-center">
                        <div className="grid grid-cols-7 gap-2 w-2/3">
                            {/* Days and timings */}
                            <div><p className="text-gray-500">Mon</p><p className="font-semibold">9 am</p><p className="font-semibold">8 pm</p></div>
                            <div><p className="text-gray-500">Tue</p><p className="font-semibold">9 am</p><p className="font-semibold">8 pm</p></div>
                            <div><p className="text-gray-500">Wed</p><p className="font-semibold">9 am</p><p className="font-semibold">8 pm</p></div>
                            <div><p className="text-gray-500">Thu</p><p className="font-semibold">9 am</p><p className="font-semibold">8 pm</p></div>
                            <div><p className="text-gray-500">Fri</p><p className="font-semibold">9 am</p><p className="font-semibold">8 pm</p></div>
                            <div><p className="text-gray-500">Sat</p><p className="font-semibold">9 am</p><p className="font-semibold">8 pm</p></div>
                            <div><p className="text-gray-500">Sun</p><p className="font-semibold">-</p><p className="font-semibold">-</p></div>
                        </div>
                        <div className="w-1/3 text-gray-600 flex flex-col items-start space-y-2">
                            <p>📞 +380999999999</p>
                            <p>📧 dude@mail.com</p>
                            <p>📍 4 Trokhsviatytelska Street, Kyiv, UA</p>
                            <p>michaelcarrieremoremoremore.com</p>
                            <div className="flex space-x-4">
                                <button className="text-blue-600"><i className="fab fa-facebook-f"></i></button>
                                <button className="text-blue-600"><i className="fab fa-twitter"></i></button>
                                <button className="text-blue-600"><i className="fab fa-instagram"></i></button>
                                <button className="text-blue-600"><i className="fab fa-linkedin"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-between w-full">
                        <div className="text-gray-600">
                            <p>Business is often provided, and the histories of the people in charge are usually expressed through short articles.</p>
                            <p><button className="text-blue-500" onClick={() => {}}>Read more</button></p>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-between w-full">
                        <img src={image1} alt="image1" className="w-24 h-24 object-cover "/>
                        <img src={image2} alt="image2" className="w-24 h-24 object-cover"/>
                        <img src={image3} alt="image3" className="w-24 h-24 object-cover"/>
                        <img src={image4} alt="image4" className="w-24 h-24 object-cover"/>
                        <img src={image5} alt="image4" className="w-24 h-24 object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentScheduling;
