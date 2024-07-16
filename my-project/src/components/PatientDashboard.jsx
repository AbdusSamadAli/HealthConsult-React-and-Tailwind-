import React from 'react';
import UpcomingAppointments from './UpcomingAppointments';
import MedicalHistory from './MedicalHistory';
import Messages from './Messages';
import Navbar from './Navbar';
const PatientDashboard = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="text-4xl  mt-3 font-bold mb-6 text-center text-blue-600">Patient Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-100">
          <UpcomingAppointments />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-100">
          <MedicalHistory />
        </div>
        <div className="col-span-2 text-center bg-white p-6 rounded-lg shadow-lg mt-6 hover:bg-slate-100">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;


