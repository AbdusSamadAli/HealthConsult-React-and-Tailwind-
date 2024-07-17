import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Faq from "./Faq";
import DoctorListing from "./DoctorListing";
import PatientDashboard from "./PatientDashboard";
import AppointmentBooking from "./AppointmentBooking";
import SignIn from "./SignIn";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.jpg";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4 flex flex-wrap items-center">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <section className="my-8 flex-1 flex flex-wrap items-center">
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="md:w-1/2 text-left">
                    <h1 className="text-4xl font-bold mb-2 text-blue-700">
                      Welcome to HealthConsult!
                    </h1>
                    <p className="text-lg mb-4 text-gray-700 mt-3">
                      This is your go-to platform for virtual health consultations.
                    </p>
                    <h1 className="text-3xl font-bold mb-4 text-blue-800 mt-5">
                      Our Services
                    </h1>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-4 rounded-lg shadow-md hover:bg-slate-100">
                        <img
                          src={image1}
                          alt="Virtual Appointments"
                          className="w-full h-40 object-cover mx-auto mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2 text-blue-700">
                          Virtual Appointments
                        </h2>
                        <p className="text-gray-700">
                          Schedule consultations with specialists in various fields.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md hover:bg-slate-100">
                        <img
                          src={image2}
                          alt="Medical Records"
                          className="w-90 h-43 object-contain mx-auto mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2 text-blue-700">
                          Medical Records Access
                        </h2>
                        <p className="text-gray-700">
                          Access your medical records and history online securely.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md hover:bg-slate-100">
                        <img
                          src={image3}
                          alt="Secure Messaging"
                          className="w-full h-45 object-contain mx-auto mb-4"
                        />
                        <h2 className="text-xl text-blue-700 font-bold mb-2">
                          Secure Messaging
                        </h2>
                        <p className="text-gray-700">
                          Communicate securely for ongoing care and follow-ups.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md hover:bg-slate-100">
                        <img
                          src={image4}
                          alt="High Professional Standards"
                          className="w-full h-40 object-contain mx-auto mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2 text-blue-700">
                          High Professional Standards
                        </h2>
                        <p className="text-gray-700">
                          Benefit from high standards of medical expertise and professionalism.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 mt-8 md:mt-0 md:ml-4 flex justify-center items-center">
                    <div className="md:w-4/5">
                      <h2 className="text-3xl font-bold text-blue-700 mb-6">
                        Health Tips
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6 hover:bg-slate-100">
                          <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Tip 1: Stay Hydrated
                          </h3>
                          <p className="text-lg text-gray-700 mb-4">
                            Drink plenty of water throughout the day to maintain good hydration levels.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 hover:bg-slate-100">
                          <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Tip 2: Eat Balanced Meals
                          </h3>
                          <p className="text-lg text-gray-700 mb-4">
                            Include a variety of fruits, vegetables, lean proteins, and whole grains in your diet.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 hover:bg-slate-100">
                          <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Tip 3: Maintain Your Fitness
                          </h3>
                          <p className="text-lg text-gray-700 mb-4">
                            Go for regular walks in the morning or evening.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 hover:bg-slate-100">
                          <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Tip 4: Do Yoga
                          </h3>
                          <p className="text-lg text-gray-700 mb-4">
                            Exercising and doing yoga will be good for both physical and mental health.
                          </p>
                        </div>
                        <div className="flex items-center justify-center md:col-span-2">
                          <iframe
                            width="100%"
                            height="700"
                            src="https://www.youtube.com/embed/THj794SH8LQ?si=2KsezM-3YrTdQ34L"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full max-w-screen-lg h-80 object-contain mb-4"
                          ></iframe>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Feedback from Our Users
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:bg-slate-100 ">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        Sarah Johnson
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">
                        "HealthConsult made it so easy to find the right doctor for my needs. I highly recommend their services!"
                      </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:bg-slate-100">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        Harry Rogers
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">
                        "The doctors at HealthConsult were very professional and helped me understand my treatment options clearly."
                      </p>
                    </div>
                  </div>
                </div>
                <Faq />
              </section>
            }
          />
          <Route exact path="/doctors" element={<DoctorListing />} />
          <Route exact path="/dashboard" element={<PatientDashboard />} />
          <Route exact path="/book-appointment" element={<AppointmentBooking />} />
          <Route exact path="/sign-in" element={<SignIn />} />
        </Routes>
      </main>
      <footer className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 shadow-lg flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-gray-600 text-xl">
            © 2024 HealthConsult. All rights reserved.
          </p>
          <CiInstagram className="text-2xl mx-1 h-10 w-10" />
          <FaFacebook className="text-2xl mx-1 h-10 w-10" />
          <FaWhatsapp className="text-2xl mx-1 h-10 w-10" />
        </div>
      </footer>

    </div>
  );
};

export default Home;




