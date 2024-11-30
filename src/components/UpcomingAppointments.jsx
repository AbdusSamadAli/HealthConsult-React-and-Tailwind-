import React from 'react';

const UpcomingAppointments = () => {
  const appointments = [
    { id: 1, date: '2024-07-20', time: '10:00 AM', doctor: 'Dr. Frank Arnold' },
    { id: 2, date: '2024-07-22', time: '02:00 PM', doctor: 'Dr. Jane Smith' },
    { id: 3, date: '2024-07-28', time: '06:00 PM', doctor: 'Dr. John Doe' }
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-md hover:bg-blue-50">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Upcoming Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id} className="border-b border-gray-300 py-2">
            <div className="text-sm text-gray-600">{appointment.date} at {appointment.time}</div>
            <div className="text-lg">Doctor: {appointment.doctor}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingAppointments;

