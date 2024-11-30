import React, { useState } from 'react';

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
    const { email, password } = formData;
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    console.log('Sign-in submitted:', formData);
    alert('Sign in successful!'); 
    setFormData({ email: '', password: '' });
  };

  return (
    <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg max-w-md mx-auto mt-8 hover:bg-blue-50">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-600">
        Sign In
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm sm:text-base text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm sm:text-base border rounded-lg"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm sm:text-base text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm sm:text-base border rounded-lg"
            required
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}
        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );  
};

export default SignIn;


