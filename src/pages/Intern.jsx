import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import ProgressBar from '../components/Intern/ProgressBar';
import PersonalAcademicForm from '../components/Intern/PersonalAcademicForm';
import Confetti from 'react-confetti';

const CelebrationPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-3xl font-bold text-green-600">🎉 Congratulations! 🎉</h2>
        <p className="text-lg mt-2">Your details have been successfully submitted.</p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

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
  const [isDetailsSubmitted, setIsDetailsSubmitted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isSendOtpDisabled, setIsSendOtpDisabled] = useState(false);
  const [isFieldsDisabled, setIsFieldsDisabled] = useState(false);
  const [otpTimer, setOtpTimer] = useState(60); // Timer for OTP button
  const [isVerifyOtpDisabled, setIsVerifyOtpDisabled] = useState(false);

  // Show confetti & modal for 5 seconds when registration completes
  useEffect(() => {
    if (isDetailsSubmitted) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 10000);
    }
  }, [isDetailsSubmitted]);
  useEffect(() => {
    const paymentStatus = localStorage.getItem("paymentCompleted");
    if (paymentStatus === "true") {
      setIsPaymentSuccessful(true);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay SDK Loaded");
    document.body.appendChild(script);
  }, []);
  

  // Handle form input changes with real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Real-time validation for each field
    let newErrors = { ...errors };

    if (name === "name") {
      if (!value.trim()) {
        newErrors.name = "Name is required";
      } else if (value.length < 3) {
        newErrors.name = "Name must be at least 3 characters";
      } else if (/\d/.test(value)) {
        newErrors.name = "Name should not contain numbers";
      } else {
        delete newErrors.name;
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Invalid email format";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "mobile") {
      if (!value.trim()) {
        newErrors.mobile = "Mobile number is required";
      } else if (!/^\d+$/.test(value)) {
        newErrors.mobile = "Mobile number should only contain digits";
      } else if (value.length !== 10) {
        newErrors.mobile = "Mobile number must be 10 digits";
      } else {
        delete newErrors.mobile;
      }
    }

    // Validate OTP only if OTP has been sent
    if (name === "otp" && isOtpSent) {
      if (!value.trim()) {
        newErrors.otp = "OTP is required";
      } else if (!/^\d{6}$/.test(value)) {
        newErrors.otp = "OTP must be a 6-digit number";
      } else {
        delete newErrors.otp;
      }
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };


  // Handle OTP sending
  const handleSendOtp = async () => {
    if (formData.mobile.trim() && /^\d{10}$/.test(formData.mobile)) {
      try {
        const response = await fetch("https://dev.quizifai.com:8010/signup-for-interns", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            signup_option: "mobile",
            user_name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          toast.success("OTP sent successfully!");

          // Disable name, email, and mobile fields
          setIsFieldsDisabled(true);

          // Disable "Send OTP" button and start timer
          setIsSendOtpDisabled(true);
          setIsOtpSent(true);

          let timeLeft = 60;
          const timerInterval = setInterval(() => {
            timeLeft -= 1;
            setOtpTimer(timeLeft);

            if (timeLeft === 0) {
              clearInterval(timerInterval);
              setIsSendOtpDisabled(false); // Re-enable Send OTP
              setOtpTimer(60); // Reset timer
            }
          }, 1000);
        } else {
          toast.error(data.message || "Failed to send OTP");
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
        toast.error("Something went wrong. Please try again.");
      }
    } else {
      setErrors({ ...errors, mobile: "Enter a valid 10-digit mobile number" });
      toast.error("Please enter a valid 10-digit mobile number.");
    }
  };


  // Handle OTP verification
  const handleVerifyOtp = async () => {
    if (!formData.otp.trim()) {
      setErrors({ ...errors, otp: "OTP is required" });
      toast.error("Please enter the OTP.");
      return;
    }

    setIsVerifyOtpDisabled(true); // Disable "Verify OTP" button

    try {
      const response = await fetch("https://dev.quizifai.com:8010/sgnup_verification_for_interns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          verify_option: "mobile",
          mobile: formData.mobile,
          email: formData.email,
          otp: formData.otp,
        }),
      });

      const data = await response.json();

      if (response.ok && data.response !== "fail") {
        toast.success("OTP verified successfully!");
        setIsOtpVerified(true);
        setIsFieldsDisabled(true); // Disable all fields
        setIsSendOtpDisabled(true); // Disable Send OTP button
        setOtpTimer(null); // Stop showing the timer

        // Store in localStorage to persist state on refresh
        localStorage.setItem("otpVerified", "true");
        localStorage.setItem("formData", JSON.stringify(formData));
      } else {
        toast.error(data.response_message || "Invalid OTP. Please try again.");
        setErrors({ ...errors, otp: data.response_message || "Invalid OTP" });

        // Re-enable "Verify OTP" button to allow retrying
        setIsVerifyOtpDisabled(false);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Something went wrong. Please try again.");

      // Re-enable "Verify OTP" button on error
      setIsVerifyOtpDisabled(false);
    }
  };


  // Handle registration
  const handleRegisterClick = () => {
    toast.success('Registration successful!');
    setIsRegistered(true);
  };

  // Handle payment success
  // const handlePaymentSuccess = async () => {
  //   const options = {
  //     key: "rzp_test_YP62GL4fHAfeVI", // Replace with your Razorpay Key ID
  //     amount: 199 * 100, // Amount in paise (₹199)
  //     currency: "INR",
  //     name: "Internship Registration",
  //     description: "Payment for Internship Program",
  //     image: "https://narmtech.com/assets/logo-Dx_AJf1h.png", // Your logo URL
  //     handler: function (response) {
  //       toast.success("Payment successful!");
  //       setIsPaymentSuccessful(true);

  //       // Store payment status in localStorage
  //       localStorage.setItem("paymentCompleted", "true");
  //     },
  //     prefill: {
  //       name: formData.name,
  //       email: formData.email,
  //       contact: formData.mobile,
  //     },
  //     theme: {
  //       color: "#007bff", // Customize Razorpay UI color
  //     },
  //   };

  //   const razorpay = new window.Razorpay(options);
  //   razorpay.open();
  // };
  const handlePaymentSuccess = async () => {
    if (!window.Razorpay) {
      toast.error("Razorpay SDK failed to load. Please refresh the page.");
      return;
    }
  
    const options = {
      key: "rzp_test_YP62GL4fHAfeVI", // Replace with your Razorpay Key ID
      amount: 199 * 100, // Convert ₹199 to paise
      currency: "INR",
      name: "Internship Registration",
      description: "Payment for Internship Program",
      image: "https://narmtech.com/assets/logo-Dx_AJf1h.png",
      handler: function (response) {
        toast.success("Payment successful!");
        setIsPaymentSuccessful(true);
  
        // Store payment status to persist after refresh
        localStorage.setItem("paymentCompleted", "true");
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobile,
      },
      theme: {
        color: "#007bff",
      },
    };
    console.log("Is Razorpay available?", window.Razorpay);
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };
  


  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 bg-white shadow-xl rounded-lg overflow-hidden p-6">
          {/* Left Section - Progress Bar */}
          <div className="p-8 bg-[#ffecca] rounded-lg text-gray-800">
            <h2 className="text-2xl font-bold mb-6">Virtual Internship Program on GenAI Powered Web Applications</h2>
            <h3 className="text-xl font-semibold mt-4">How it's going to help you?</h3>
            <p className="mt-2 text-sm">GenAI is going to be a game changer in the IT world for the next few years, and it's going to change how the IT industry functions. This internship program will help you understand how you can apply GenAI technology for real-time problems and how we can build consumer applications to embed the power of GenAI.</p>
            <h3 className="text-xl font-semibold mt-4">What you are going to learn?</h3>
            <p className="mt-2 text-sm">GenAI is going to be a game changer in the IT world for the next few years, and it's going to change how the IT industry functions. This internship program will help you understand how you can apply GenAI technology for real-time problems and how we can build consumer applications to embed the power of GenAI.</p>
            <p className="mt-4 font-semibold">📅 Duration: 6 Weeks | Limited Seats Only</p>
            <div className="mt-4">
              <p className="font-semibold">📍 Internship Progress</p>
              {/* Responsive Progress Bar */}
              <div className="flex flex-col items-center justify-between mt-4 relative sm:flex-row">
                <ProgressBar />
              </div>
              <p className="mt-4">Register for the internship with a nominal fee. For more information, <Link to="/contactus" className="text-blue-600 font-semibold">contact us</Link>.</p>
            </div>
          </div>

          {/* Right Section - Conditional Rendering */}
          {!isRegistered ? (
            <div className="p-8 bg-gray-50 rounded-lg flex flex-col">
              <h3 className="text-xl font-semibold text-center mb-4">Sign Up for Internship Program</h3>
              <form className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name <span className='text-xs'><i>(Full name as per certificates)</i></span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-blue-500'
                      }`}
                    autoComplete='off'
                    disabled={isFieldsDisabled}
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-blue-500'
                      }`}
                    autoComplete='off'
                    disabled={isFieldsDisabled}
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                {/* Mobile Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile</label>
                  <div className="flex items-center justify-between space-x-2">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-[60%] p-3 border rounded-lg focus:outline-none focus:ring-2 
                      ${errors.mobile ? "border-red-500" : "focus:ring-blue-500"}`}
                      autoComplete="off"
                      disabled={isFieldsDisabled}
                    />
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className={`p-3 rounded-lg transition w-[120px] text-white
                        ${isSendOtpDisabled ? "bg-slate-400 cursor-not-allowed" :
                          (formData.mobile.length === 10 && !errors.mobile ?
                            "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-slate-400 cursor-not-allowed text-white")
                        }
                      `}
                      disabled={isSendOtpDisabled || formData.mobile.length !== 10 || !!errors.mobile}
                    >
                      {isSendOtpDisabled ? "Resend OTP" : "Send OTP"}
                    </button>
                  </div>

                  {/* Always show error message & countdown when OTP is sent */}
                  {errors.mobile || isSendOtpDisabled ? (
                    <p className="text-red-500 text-xs">
                      {errors.mobile ? errors.mobile : "OTP sent successfully!"}{" "}
                      {isSendOtpDisabled && (
                        <span className="text-blue-600 font-semibold">
                          (Resend OTP in {otpTimer}s)
                        </span>
                      )}
                    </p>
                  ) : null}
                </div>
                {/* OTP Field */}
                {isOtpSent && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">OTP:</label>
                    <div className="flex items-center justify-between space-x-2">
                      <input
                        type="text"
                        name="otp"
                        placeholder="Enter OTP"
                        value={formData.otp}
                        onChange={handleChange}
                        className={`w-[60%] p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.otp ? 'border-red-500' : 'focus:ring-blue-500'
                          }`}
                        autoComplete='off'
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        className={`p-3 rounded-lg transition w-[120px] ${formData.otp && !errors.otp
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
          ) : !isPaymentSuccessful ? (
            <PaymentIntegration handlePaymentSuccess={handlePaymentSuccess} />
          ) : !isDetailsSubmitted ? (
            <PersonalAcademicForm handleSubmitDetails={() => setIsDetailsSubmitted(true)} />
          ) : (
            <div className="text-center p-8 bg-green-100 rounded-lg">
              <h2 className="text-2xl font-bold text-green-700">🎉 Registration Complete!</h2>
              <p className="mt-2 text-green-600">Your details have been successfully submitted.</p>
            </div>
          )}
        </div>
      </div>
      {/* Celebration Popup & Confetti */}
      {showCelebration && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <CelebrationPopup onClose={() => setShowCelebration(false)} />
        </>
      )}
      <ToastContainer />
      <Footer />
      {/* Toast Container */}
    </div>
  );
};

export default Intern;