import { Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa"; // Corrected import

const Navbar = () => {
  return (
    <div className="bg-blue-50">
      <header className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <FaUserMd className="text-3xl text-white mr-2" /> {/* Updated icon */}
            <Link to="/" className="text-3xl font-bold text-white">
              HealthConsult
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center">
            <Link
              to="/"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300 mr-4"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300 mr-4"
            >
              Doctors
            </Link>
            <Link
              to="/dashboard"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300 mr-4"
            >
              Dashboard
            </Link>
            <Link
              to="/book-appointment"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300 mr-4"
            >
              Book Appointment
            </Link>
            <Link
              to="/sign-in"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300"
            >
              Sign In
            </Link>
          </nav>

          {/* Mobile menu (hamburger icon) */}
          <div className="md:hidden flex items-center">
            <button className="text-white text-3xl">
              {/* Hamburger icon */}
              ☰
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;



