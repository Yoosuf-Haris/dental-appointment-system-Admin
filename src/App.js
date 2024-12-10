import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Home';
import AppointmentScheduling from './components/AppointmentScheduling';
import DentistSelection from './components/DentistSelection';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import AppointmentReminders from './components/AppointmentReminders';
import PatientProfiles from './components/PatientProfiles';
import OnlinePayment from './components/OnlinePayment';
import AppointmentRescheduling from './components/AppointmentRescheduling';
import TreatmentInformation from './components/TreatmentInformation';
import ReviewsAndRatings from './components/ReviewsAndRatings';
import Events from './components/Events';
import AdminPage from './components/AdminPage'; 
import AdminSetting from './components/AdminSettings'; // Add this component for the events page
import './index.css';

const App = () => {
    return (
        <Router>
            <div className="App flex flex-col h-screen">
                <Header/>
                <MainContent/>
            </div>
        </Router>
    );
};

const MainContent = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className="flex flex-1 pt-16"> {/* Add padding to top to avoid overlapping with the header */}
           
            <div className={`flex-1 p-4 ${!isHomePage ? 'ml-64' : ''} overflow-y-auto`}>
                <Routes>
                <Route path="/admin" element={<AdminPage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/appointment-scheduling" element={<AppointmentScheduling />} />
                    <Route path="/dentist-selection" element={<DentistSelection />} />
                    <Route path="/availability-calendar" element={<AvailabilityCalendar />} />
                    <Route path="/appointment-reminders" element={<AppointmentReminders />} />
                    <Route path="/patient-profiles" element={<PatientProfiles />} />
                    <Route path="/online-payment" element={<OnlinePayment />} />
                    <Route path="/appointment-rescheduling" element={<AppointmentRescheduling />} />
                    <Route path="/treatment-information" element={<TreatmentInformation />} />
                    <Route path="/reviews-and-ratings" element={<ReviewsAndRatings />} />
                    <Route path="/admins" element={<AdminSetting />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
