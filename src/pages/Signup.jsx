import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import loginImage from "../assets/brand/hero-robot.png"; // Adjust the path as needed

const Signup = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("email");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center">
        
        {/* Left - Image (75%) */}
        <div className="hidden lg:flex w-3/4 justify-center items-center bg-gray-100">
          <img src={loginImage} alt="Signup Illustration" className="w-full h-[500px] object-contain" />
        </div>

        {/* Right - Form (25%) */}
        <div className="w-full lg:w-1/4 flex flex-col justify-center p-8 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>

          {/* Tabs */}
          <div className="flex justify-center mb-6 border-b">
            <button
              className={`w-1/2 py-2 text-lg font-medium border-b-2 ${
                activeTab === "email" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("email")}
            >
              Email
            </button>
            <button
              className={`w-1/2 py-2 text-lg font-medium border-b-2 ${
                activeTab === "mobile" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("mobile")}
            >
              Mobile
            </button>
          </div>

          {/* Form Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name *</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
          </div>

          {activeTab === "email" && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email *</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Your Email" />
            </div>
          )}

          {activeTab === "mobile" && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Mobile *</label>
              <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Your Mobile Number" />
            </div>
          )}

          <div className="mb-6 flex items-center">
            <input type="checkbox" className="h-5 w-5 text-blue-500 border-gray-300 rounded mr-2" />
            <span className="text-gray-700 text-sm">
              I agree with the <Link to="/terms" className="text-blue-500">terms and conditions</Link>
            </span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
            Send OTP
          </button>

          <p className="mt-4 text-center text-gray-600 text-sm">
            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
