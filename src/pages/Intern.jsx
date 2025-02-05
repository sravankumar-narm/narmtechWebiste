import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


// Payment Integration Component
const PaymentIntegration = ({ handlePaymentSuccess }) => {
  return (
    <div className="p-8 bg-gray-50 rounded-lg flex flex-col justify-between">
      <h3 className="text-xl font-semibold text-center mb-4">Pay Nominal Fee</h3>
      <p className="text-sm text-center mb-4">
        Please pay the nominal fee to complete your registration.
      </p>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg font-semibold">Amount: ₹199</p>
        <button
          type="button"
          onClick={handlePaymentSuccess}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

const Intern = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Progress Bar Data
  const stages = [
    { name: 'Registration Start', date: new Date('2025-02-01') },
    { name: 'Registration End', date: new Date('2025-02-25') },
    { name: 'Week 1', date: new Date('2025-02-26') },
    { name: 'Week 2', date: new Date('2025-03-05') },
    { name: 'Week 3', date: new Date('2025-03-12') },
    { name: 'Week 4', date: new Date('2025-03-19') },
    { name: 'Week 5', date: new Date('2025-03-26') },
    { name: 'Week 6', date: new Date('2025-04-02') },
    { name: 'Certification', date: new Date('2025-04-09') }
  ];

  const today = new Date();

  // State to track which stage is being hovered
  const [hoveredStageIndex, setHoveredStageIndex] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    otp: '',
  });

  // Validation state
  const [errors, setErrors] = useState({});
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // State to track registration and payment status
  const [isRegistered, setIsRegistered] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  // Handle form input changes with real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Real-time validation for each field
    let newErrors = { ...errors };

    if (name === 'name') {
      if (!value.trim()) {
        newErrors.name = 'Name is required';
      } else if (value.length < 3) {
        newErrors.name = 'Name must be at least 3 characters';
      } else if (/\d/.test(value)) {
        newErrors.name = 'Name should not contain numbers';
      } else {
        delete newErrors.name;
      }
    }

    if (name === 'email') {
      if (!value.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = 'Invalid email format';
      } else {
        delete newErrors.email;
      }
    }

    if (name === 'mobile') {
      if (!value.trim()) {
        newErrors.mobile = 'Mobile number is required';
      } else if (!/^\d+$/.test(value)) {
        newErrors.mobile = 'Mobile number should only contain digits';
      } else if (value.length !== 10) {
        newErrors.mobile = 'Mobile number must be 10 digits';
      } else {
        delete newErrors.mobile;
      }
    }

    if (name === 'otp') {
      if (!value.trim()) {
        newErrors.otp = 'OTP is required';
      } else if (value !== '123456') { // Mock OTP validation
        newErrors.otp = 'Invalid OTP';
      } else {
        delete newErrors.otp;
      }
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  // Handle OTP sending
  const handleSendOtp = () => {
    if (formData.mobile.trim() && /^\d{10}$/.test(formData.mobile)) {
      setIsOtpSent(true);
      setIsSendOtpDisabled(true); // Disable the button
      toast.success('OTP sent successfully!');

      // Re-enable the button after 1 minute
      setTimeout(() => {
        setIsSendOtpDisabled(false);
      }, 60000); // 60000 milliseconds = 1 minute
    } else {
      setErrors({ ...errors, mobile: 'Enter a valid 10-digit mobile number' });
      toast.error('Please enter a valid 10-digit mobile number.');
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = () => {
    if (formData.otp === '123456') {
      setIsOtpVerified(true);
      setIsSendOtpDisabled(true); // Disable the button permanently after OTP is verified
      toast.success('OTP verified successfully!');
    } else {
      setErrors({ ...errors, otp: 'Invalid OTP' });
      toast.error('Invalid OTP. Please try again.');
    }
  };

  // Handle registration
  const handleRegisterClick = () => {
    toast.success('Registration successful!');
    setIsRegistered(true);
  };

  // Handle payment success
  const handlePaymentSuccess = () => {
    toast.success('Payment successful!');
    setIsPaymentSuccessful(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 bg-white shadow-xl rounded-lg overflow-hidden p-6">
          {/* Left Section - Progress Bar */}
          <div className="p-8 bg-[#ffecca] rounded-lg text-gray-800">
            <h2 className="text-2xl font-bold mb-6">Virtual Internship Program on Generative AI Powered Web Applications</h2>
            <h3 className="text-xl font-semibold mt-4">How it's going to help you?</h3>
            <p className="mt-2 text-sm">Generative AI is going to be a game changer in the IT world for the next few years, and it's going to change how the IT industry functions. This internship program will help you understand how you can apply generative AI technology for real-time problems and how we can build consumer applications to embed the power of generative AI.</p>
            <h3 className="text-xl font-semibold mt-4">What you are going to learn?</h3>
            <p className="mt-2 text-sm">Generative AI is going to be a game changer in the IT world for the next few years, and it's going to change how the IT industry functions. This internship program will help you understand how you can apply generative AI technology for real-time problems and how we can build consumer applications to embed the power of generative AI.</p>
            <p className="mt-4 font-semibold">📅 Duration: 6 Weeks | Limited Seats Only</p>
            <div className="mt-4">
              <p className="font-semibold">📍 Internship Progress</p>
              {/* Responsive Progress Bar */}
              <div className="flex flex-col items-center justify-between mt-4 relative sm:flex-row">
                {stages.map((stage, index) => {
                  const isCompleted = today >= stage.date;
                  const nextStageDate = stages[index + 1]?.date;

                  // Calculate progress percentage for the line between stages
                  const progressPercentage = nextStageDate
                    ? Math.min(
                      100,
                      ((today - stage.date) / (nextStageDate - stage.date)) * 100
                    )
                    : 100;

                  return (
                    <React.Fragment key={index}>
                      {/* Circle */}
                      <div
                        className="flex flex-col items-center relative"
                        onMouseEnter={() => setHoveredStageIndex(index)}
                        onMouseLeave={() => setHoveredStageIndex(null)}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${isCompleted ? 'bg-blue-600' : 'bg-slate-400'
                            }`}
                        >
                          {isCompleted && '✓'}
                        </div>
                        {/* Label below circle */}
                        <p className="text-xs mt-2 text-center font-semibold">
                          {stage.name}
                        </p>
                        {/* Hover Date Tooltip */}
                        {hoveredStageIndex === index && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                            {stage.date.toLocaleDateString()}
                          </div>
                        )}
                      </div>

                      {/* Line connecting circles */}
                      {index < stages.length - 1 && (
                        <div
                          className="sm:flex-grow sm:h-1 w-1 sm:w-auto h-8 bg-gray-300 relative"
                          style={{
                            marginTop: '-25px',
                            marginLeft: '0px',
                            marginRight: '0px',
                          }}
                        >
                          {/* Blue progress bar overlay */}
                          <div
                            className="absolute top-0 left-0 h-full w-full bg-blue-600 transition-all duration-500"
                            style={{
                              width: `${progressPercentage}%`,
                              height: '100%',
                              display: today < stage.date ? 'none' : 'block',
                            }}
                          ></div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
              <p className="mt-4">Register for the internship with a nominal fee. For more information, <Link to="/contactus" className="text-blue-600 font-semibold">contact us</Link>.</p>
            </div>
          </div>

          {/* Right Section - Conditional Rendering */}
          {!isRegistered ? (
            <div className="p-8 bg-gray-50 rounded-lg flex flex-col">
              <h3 className="text-xl font-semibold text-center mb-4">Register for Internship Program</h3>
              <form className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-blue-500'
                      }`}
                    autoComplete='off'
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-blue-500'
                      }`}
                    autoComplete='off'
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                {/* Mobile Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile:</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.mobile ? 'border-red-500' : 'focus:ring-blue-500'
                        }`}
                      autoComplete='off'
                    />
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className={`px-2 py-1 rounded-lg transition ${formData.mobile.length === 10 && !errors.mobile
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-slate-400 cursor-not-allowed text-white'
                        }`}
                      disabled={formData.mobile.length !== 10 || !!errors.mobile}
                    >
                      Send OTP
                    </button>
                  </div>
                  {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
                </div>

                {/* OTP Field */}
                {isOtpSent && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">OTP:</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        name="otp"
                        placeholder="Enter OTP"
                        value={formData.otp}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.otp ? 'border-red-500' : 'focus:ring-blue-500'
                          }`}
                        autoComplete='off'
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        className={`px-2 py-1 rounded-lg transition ${formData.otp && !errors.otp
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-slate-400 text-white cursor-not-allowed'
                          }`}
                        disabled={!formData.otp || !!errors.otp}
                      >
                        Verify OTP
                      </button>
                    </div>
                    {errors.otp && <p className="text-red-500 text-xs">{errors.otp}</p>}
                  </div>
                )}

                {/* Register Button */}
                <button
                  type="button"
                  onClick={handleRegisterClick}
                  className={`w-full px-6 py-3 text-white rounded-lg shadow-md transition ${isOtpVerified && Object.keys(errors).length === 0
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-400 text-white cursor-not-allowed'
                    }`}
                  disabled={!isOtpVerified || Object.keys(errors).length > 0}
                >
                  Register Now
                </button>
              </form>
            </div>
          ) : (
            <PaymentIntegration handlePaymentSuccess={handlePaymentSuccess} />
          )}
        </div>
      </div>
      <ToastContainer />
      <Footer />
      {/* Toast Container */}
    </div>
  );
};

export default Intern;