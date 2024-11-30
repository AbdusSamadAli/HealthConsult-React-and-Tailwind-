import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 shadow-lg flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-gray-600 text-xl">
            © 2024 HealthConsult. All rights reserved.
          </p>
          <CiInstagram className="text-2xl mx-1 h-10 w-10" />
          <FaFacebook className="text-2xl mx-1 h-10 w-10" />
          <FaWhatsapp className="text-2xl mx-1 h-10 w-10" />
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;


