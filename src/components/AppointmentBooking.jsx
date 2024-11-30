import React, { useState } from 'react';


const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    hour: '',
    minute: '',
    period: 'AM',
    doctor: '',
    speciality: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, date, hour, minute, period, doctor, speciality } = formData;
    if (!name || !date || !hour || !minute || !doctor || !speciality) {
      setError('Please enter all fields.');
      return;
    }

    if (window.confirm('Are you sure you want to book this appointment?')) {
      console.log('Form submitted:', formData);
      alert('Appointment booked successfully!');
      setError('');
    }
  };

  return (
    <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Book an Appointment</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto hover:bg-blue-50">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Time</label>
            <div className="flex space-x-2">
              <input
                type="number"
                id="hour"
                name="hour"
                value={formData.hour}
                onChange={handleChange}
                className="w-20 px-3 py-2 border rounded-lg"
                placeholder="HH"
                min="1"
                max="12"
                required
              />
              <span>:</span>
              <input
                type="number"
                id="minute"
                name="minute"
                value={formData.minute}
                onChange={handleChange}
                className="w-20 px-3 py-2 border rounded-lg"
                placeholder="MM"
                min="0"
                max="59"
                required
              />
              <select
                id="period"
                name="period"
                value={formData.period}
                onChange={handleChange}
                className="w-20 px-3 py-2 border rounded-lg"
                required
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="doctor" className="block text-gray-700 font-bold mb-2">Doctor</label>
            <input
              type="text"
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="speciality" className="block text-gray-700 font-bold mb-2">Speciality</label>
            <input
              type="text"
              id="speciality"
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Book Appointment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;

