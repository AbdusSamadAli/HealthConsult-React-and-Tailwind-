import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import DoctorListing from "./components/DoctorListing";
import PatientDashboard from "./components/PatientDashboard";
import AppointmentBooking from "./components/AppointmentBooking";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorListing />} />
          <Route path="/dashboard" element={<PatientDashboard />} />
          <Route path="/book-appointment" element={<AppointmentBooking />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;


