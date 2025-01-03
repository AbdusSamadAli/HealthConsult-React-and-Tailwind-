import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="bg-blue-50">
      <header className="bg-gradient-to-r from-blue-200 to-blue-700 p-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <FaUserDoctor className="text-3xl text-white mr-2" />
            <Link to="/" className="text-3xl font-bold text-white">
              HealthConsult
            </Link>
          </div>
          <nav className="flex items-center">
            <Link to="/" className="text-lg text-white hover:text-blue-200 hover:underline transition-colors duration-300 mr-4">
              Home
            </Link>
            <Link to="/doctors" className="text-lg text-white hover:text-blue-200 hover:underline transition-colors duration-300 mr-4">
              Doctors
            </Link>
            <Link to="/dashboard" className="text-lg text-white hover:text-blue-200 hover:underline transition-colors duration-300 mr-4">
              Dashboard
            </Link>
            <Link to="/book-appointment" className="text-lg text-white hover:text-blue-200 hover:underline transition-colors duration-300 mr-4">
              Book Appointment
            </Link>
            <Link to="/sign-in" className="text-lg text-white hover:text-blue-200 hover:underline transition-colors duration-300">
              Sign In
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;


