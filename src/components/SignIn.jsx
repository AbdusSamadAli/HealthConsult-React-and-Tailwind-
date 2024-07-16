import React, { useState } from 'react';
import Navbar from './Navbar';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    // Check if any field is empty
    const { email, password } = formData;
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Clear error state
    setError('');

    // Mock authentication logic (replace with actual authentication)
    console.log('Sign-in submitted:', formData);
    alert('Sign in successful!'); // Replace with actual sign-in logic

    // Clear form data after submission
    setFormData({ email: '', password: '' });
  };

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Sign In</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;


