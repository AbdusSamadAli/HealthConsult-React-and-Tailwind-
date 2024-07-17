
import React, { useState } from "react";

const Faq = () => {
  const [faq1Open, setFaq1Open] = useState(false);
  const [faq2Open, setFaq2Open] = useState(false);
  const [faq3Open,setFaq3Open] = useState(false);

  const toggleFaq1 = () => {
    setFaq1Open(!faq1Open);
  };

  const toggleFaq2 = () => {
    setFaq2Open(!faq2Open);
  };
  const toggleFaq3 = () => {
    setFaq3Open(!faq3Open);
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQ</h2>
      <div className="border-t border-gray-200">
        <button
          className="flex justify-between w-full p-4 text-left text-xl font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 transition duration-300"
          onClick={toggleFaq1}
        >
          Can I book appointments for family members?
          <svg
            className={`w-6 h-6 ${faq1Open ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={faq1Open ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
            />
          </svg>
        </button>
        {faq1Open && (
          <div className="p-4">
            <p className="text-gray-600">
              Yes, you can book appointments for family members using their information. Our platform allows secure sharing and management of appointments for multiple individuals.
            </p>
          </div>
        )}
      </div>
      <div className="border-t border-gray-200">
        <button
          className="flex justify-between w-full p-4 text-left text-xl font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 transition duration-300"
          onClick={toggleFaq2}
        >
          Can I receive updates from doctors?
          <svg
            className={`w-6 h-6 ${faq2Open ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={faq2Open ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
            />
          </svg>
        </button>
        {faq2Open && (
          <div className="p-4">
            <p className="text-gray-600">
              Yes, you can receive updates from doctors through our platform. Once you have booked an appointment, you can securely communicate with your doctor for ongoing updates and follow-up care.
            </p>
          </div>
        )}
      </div>
      <div className="border-t border-gray-200">
        <button
          className="flex justify-between w-full p-4 text-left text-xl font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 transition duration-300"
          onClick={toggleFaq3}
        >
          Can I check the list of doctors and their specialities?
          <svg
            className={`w-6 h-6 ${faq3Open ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={faq3Open ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
            />
          </svg>
        </button>
        {faq3Open && (
          <div className="p-4">
            <p className="text-gray-600">
              Yes, you can view the different doctors and their specialities in the doctors page.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Faq; 
