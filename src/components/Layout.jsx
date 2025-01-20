import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 via-gray-200 to-white animate-gradient sm:bg-gradient-to-b sm:from-blue-200 sm:via-gray-300 sm:to-white md:bg-gradient-to-tl md:from-blue-300 md:via-gray-400 md:to-white lg:bg-gradient-to-br xl:bg-gradient-to-l"
    >
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-gradient-to-r from-blue-200 to-blue-700 p-6 shadow-lg flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-gray-600 text-xl">
            © 2024 HealthConsult. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <CiInstagram className="text-2xl h-8 w-8 text-gray-900 hover:text-blue-800 transition" />
            <FaFacebook className="text-2xl h-8 w-8 text-gray-900 hover:text-blue-800 transition" />
            <FaWhatsapp className="text-2xl h-8 w-8 text-gray-900 hover:text-blue-800 transition" />
          </div>
        </div>
      </footer>
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

