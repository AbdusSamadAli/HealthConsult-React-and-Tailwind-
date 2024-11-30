import React from 'react';
import UpcomingAppointments from './UpcomingAppointments';
import MedicalHistory from './MedicalHistory';
import Messages from './Messages';
const PatientDashboard = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl mt-3 font-bold mb-6 text-center text-blue-600">
        Patient Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:bg-slate-100">
          <UpcomingAppointments />
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:bg-slate-100">
          <MedicalHistory />
        </div>
        <div className="col-span-1 md:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow-lg mt-6 hover:bg-slate-100">
          <Messages />
        </div>
      </div>
    </div>
  );
  
};

export default PatientDashboard;


