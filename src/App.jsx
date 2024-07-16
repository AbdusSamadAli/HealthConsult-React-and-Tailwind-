import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import DoctorListing from "./components/DoctorListing";
import PatientDashboard from "./components/PatientDashboard";
import AppointmentBooking from "./components/AppointmentBooking";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Router>
      <div>
        <div className="container mx-auto text-center">
          <ul className="flex justify-center">
            {/* Add any additional navigation elements if needed */}
            <li className="mx-4"></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorListing />} />
          <Route path="/dashboard" element={<PatientDashboard />} />
          <Route path="/book-appointment" element={<AppointmentBooking />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

