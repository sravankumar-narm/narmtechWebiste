import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import loginImage from '../assets/brand/hero-robot.png'; // Placeholder image

const Intern = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigate = useNavigate(); // Define navigate function

  const handleRegisterClick = () => {
    navigate('/internship/signup'); // Updated route here
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10 px-5">
        <div className="flex flex-col sm:flex-row rounded-lg shadow-xl overflow-hidden bg-white">
          {/* Left side - Internship Details */}
<div className="sm:w-7/12 p-8 bg-[#ffecca]">
            <h2 className="text-2xl font-bold mb-4">Virtual Internship Program on Creating GenAI-Powered Web Applications</h2>
            <p className="text-gray-700 mb-4">📅 <strong>Start Date:</strong> February 1, 2025 (Tentative)</p>
            <p className="text-gray-700 mb-4">⏳ <strong>Duration:</strong> 6 Weeks</p>
            <p className="text-gray-700 mb-4">💰 <strong>Nominal Fee:</strong> ₹199</p>
            
            <h3 className="text-xl font-semibold mt-6">📌 Internship Details</h3>
            <ul className="ml-6 text-gray-700 space-y-2">
              <li><strong>Orientation Program (Online):</strong>
                <ul className="ml-4 space-y-1">
                  <li>🔹 Introductory session on GenAI technologies (Database, Python, ReactJS, etc.)</li>
                  <li>🔹 Training on building web applications using GenAI</li>
                  <li>🔹 Overview of project management techniques</li>
                  <li>🔹 Use case discussions and planning sessions</li>
                  <li>🔹 Setting up Teams</li>
                </ul>
              </li>
              <li><strong>6 Weeks of Development:</strong>
                <ul className="ml-4 space-y-1">
                  <li>🔹 Project mentorship</li>
                  <li>🔹 Guidance on documentation</li>
                </ul>
              </li>
              <li><strong>Internship Closing Ceremony (Offline):</strong>
                <ul className="ml-4 space-y-1">
                  <li>🔹 Project presentations</li>
                  <li>🔹 Awarding of internship certificates</li>
                  <li>🔹 Feedback via Google Form</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">📝 Prerequisites for Participation</h3>
            <ul className="ml-6 text-gray-700 space-y-2">
              <li>💻 Personal laptop</li>
              <li>🌐 Stable internet connection</li>
              <li>⏰ Daily attendance at online stand-up meetings</li>
            </ul>
          </div>

          {/* Right side - Advantages and Registration */}
          <div className="sm:w-5/12 p-8 bg-gray-50 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">🎯 Why Join This Internship?</h3>
              <ul className="ml-6 text-gray-700 mt-4 space-y-2">
                <li>🚀 Hands-on experience in GenAI-powered web development</li>
                <li>📈 Gain mentorship from industry experts</li>
                <li>🛠 Learn full-stack development with ReactJS, Python, and AI technologies</li>
                <li>📜 Receive an internship certificate for career growth</li>
                <li>🎤 Get a platform to present your project in the closing ceremony</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">📅 Important Dates</h3>
              <ul className="ml-6 text-gray-700 mt-4 space-y-2">
                <li>📢 <strong>Registration Starts:</strong> February 1, 2025</li>
                <li>🛑 <strong>Registration Deadline:</strong> February 15, 2025</li>
                <li>📩 Emails will include instructions and prerequisites for participation.</li>
              </ul>

              {/* Registration Button after Important Dates */}
              <div className="text-center mt-6">
                <button onClick={handleRegisterClick} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Intern;
