import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-blue-50">
      <header className="bg-gradient-to-r from-blue-200 to-blue-700 p-4 md:p-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaUserDoctor className="text-3xl text-white" />
            <Link
              to="/"
              className="text-3xl font-bold text-white transition-colors duration-300"
            >
              HealthConsult
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/doctors">
              <Button
                className="text-lg bg-white text-blue-700 hover:bg-blue-50 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-4 py-2 transition-all duration-200 ease-in-out"
              >
                Doctors
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                className="text-lg bg-white text-blue-700 hover:bg-blue-50 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-4 py-2 transition-all duration-200 ease-in-out"
              >
                Dashboard
              </Button>
            </Link>
            <Link to="/book-appointment">
              <Button
                className="text-lg bg-white text-blue-700 hover:bg-blue-50 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-4 py-2 transition-all duration-200 ease-in-out"
              >
                Book Appointment
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button
                className="text-lg bg-white text-blue-700 hover:bg-blue-50 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-4 py-2 transition-all duration-200 ease-in-out"
              >
                Sign In
              </Button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
