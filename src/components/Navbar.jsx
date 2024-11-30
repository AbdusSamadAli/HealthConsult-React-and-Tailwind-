import { Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <div className="bg-blue-50">
      <header className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <FaUserMd className="text-3xl text-white mr-2" />
            <Link to="/" className="text-3xl font-bold text-white">
              HealthConsult
            </Link>
          </div>
          <nav className="w-full md:flex items-center justify-between space-x-4 hidden md:flex">
            <Link
              to="/"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300"
            >
              Doctors
            </Link>
            <Link
              to="/dashboard"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300"
            >
              Dashboard
            </Link>
            <Link
              to="/book-appointment"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300"
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
          <nav className="md:hidden w-full flex flex-col space-y-4 mt-4">
            <Link
              to="/"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300"
            >
              Doctors
            </Link>
            <Link
              to="/dashboard"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300"
            >
              Dashboard
            </Link>
            <Link
              to="/book-appointment"
              className="text-lg text-white hover:text-blue-600 hover:underline transition-colors duration-300"
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
        </div>
      </header>
    </div>
  );
};

export default Navbar;



