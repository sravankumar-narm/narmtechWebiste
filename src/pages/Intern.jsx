import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import ProgressBar from '../components/Intern/ProgressBar';
import PersonalAcademicForm from '../components/Intern/PersonalAcademicForm';
import Confetti from 'react-confetti';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineLock } from "react-icons/ai"; // Import Icons
import { MdOutlinePayment } from "react-icons/md";

const CelebrationPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-3xl font-bold text-green-600">🎉 Congratulations! 🎉</h2>
        <p className="text-lg mt-2">Your details have been successfully submitted.</p>
        <p className="text-lg mt-2">You’ll get a confirmation email with all the necessary information.</p>
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
// const PaymentIntegration = ({ handlePaymentSuccess }) => {
//   return (
//     <div className="p-8 bg-gray-50 rounded-lg flex flex-col justify-between">
//       <h3 className="text-xl font-semibold text-center mb-4">Pay Nominal Fee</h3>
//       <p className="text-sm text-center mb-4">
//         Please pay the nominal fee to complete your registration.
//       </p>
//       <div className="flex flex-col items-center space-y-4">
//         <p className="text-lg font-semibold">Amount: ₹199</p>
//         <button
//           type="button"
//           onClick={handlePaymentSuccess}
//           className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
//         >
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

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
    userId: '',
  });

  // Validation state
  const [errors, setErrors] = useState({});
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [userId, setUserId] = useState(null);

  // State to track registration and payment status
  const [isRegistered, setIsRegistered] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isDetailsSubmitted, setIsDetailsSubmitted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isSendOtpDisabled, setIsSendOtpDisabled] = useState(false);
  const [isFieldsDisabled, setIsFieldsDisabled] = useState(false);
  const [otpTimer, setOtpTimer] = useState(120); // Timer for OTP button
  const [isVerifyOtpDisabled, setIsVerifyOtpDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOTPMessage, setIsOTPMessage] = useState('');
  const [isOTPErrorMessage, setIsOTPErrorMessage] = useState('');
  const [isVerifyOTPMessage, setIsVerifyOTPMessage] = useState('');
  const [isVerifyPayementMessage, setIsVerifyPayementMessage] = useState('');
  const otpTimerRef = useRef(null); // Store timer reference
  const [isTermsAccepted, setIsTermsAccepted] = useState(false); // Tracks if terms are accepted
  const [isTermsPopupOpen, setIsTermsPopupOpen] = useState(false); // Controls visibility of the popup
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);
  // Show confetti & modal for 5 seconds when registration completes
  useEffect(() => {
    if (isDetailsSubmitted) {
      setShowCelebration(true);
      localStorage.removeItem("paymentCompleted");
      localStorage.removeItem("otpVerified");
      localStorage.removeItem("formData");
      localStorage.removeItem("registrationCompleted");
      setTimeout(() => setShowCelebration(false), 10000);
    }
  }, [isDetailsSubmitted]);
  // useEffect(() => {
  //   const paymentStatus = localStorage.getItem("paymentCompleted");
  //   console.log("Fetching payment status from localStorage:", paymentStatus);

  //   if (paymentStatus === "true") {
  //     setIsPaymentSuccessful(true);
  //     setIsRegistered(true);
  //     console.log('isDetailsSubmitted - ', isDetailsSubmitted)
  //     console.log("Payment status set to true, should show PersonalAcademicForm");
  //   }
  // }, [isPaymentSuccessful]);

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
        setIsLoading(true);
        const response = await fetch("https://nt-misc.centralindia.cloudapp.azure.com:8012/signup-for-interns", {
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
        if (data.response === "success") {
          if (data.response_message === "Mobile is already registered. Please log in or use a different mobile number.") {
            setIsOtpSent(false);
            setIsOtpVerified(false);
            setIsOTPMessage(data.response_message);
            setIsOTPErrorMessage('')
          } else if (data.response_message === "Mobile number is already verified. Continue with payment." || data.response_message === "Payment has failed. Continue with payment.") {
            setIsOtpSent(false);
            setIsOTPMessage(data.response_message);
            setIsOTPErrorMessage('')
            setIsOtpVerified(true);
            setUserId(data.user_id);
            formData.userId = data.user_id;
            localStorage.setItem("formData", JSON.stringify(formData));
          } else if (data.response_message === "Payment has been done successfully. Registration is pending." || data.response_message === "Payment has been done successfully. Continue with registration.") {
            setIsOtpSent(false);
            setIsOTPMessage(data.response_message + ' Redirecting to Personal and Academic Details...');
            setIsOTPErrorMessage('')
            setIsPaymentSuccessful(true);
            setIsOtpVerified(false);
            setUserId(data.user_id);
            console.log("form data - ",formData)
            formData.userId = data.user_id;
            localStorage.setItem("formData", JSON.stringify(formData));
            setTimeout(() => setIsRegistered(true), 5000);

          } else if (data.response_message === "Registration is completed for the given number. Please check your inbox for login credentials.") {
            setIsOtpSent(false);
            setIsOtpVerified(false);
            setIsOTPMessage(data.response_message);
            setIsOTPErrorMessage('')
          } else {
            setIsOTPMessage(data.response_message);
            setIsOTPErrorMessage('')
            setIsFieldsDisabled(true);
            setIsSendOtpDisabled(true);
            setIsOtpSent(true);

            // Clear existing interval before starting a new one
            if (otpTimerRef.current) {
              clearInterval(otpTimerRef.current);
            }

            let timeLeft = 120;
            setOtpTimer(timeLeft);

            otpTimerRef.current = setInterval(() => {
              timeLeft -= 1;
              setOtpTimer(timeLeft);

              if (timeLeft === 0) {
                clearInterval(otpTimerRef.current);
                otpTimerRef.current = null;
                setIsSendOtpDisabled(false);
                setOtpTimer(120);
              }
            }, 1000);
          }
        } else {
          setIsOTPErrorMessage(data.response_message || "Failed to send OTP");
          setIsOTPMessage('');
          setIsOtpSent(false);
          setIsOtpVerified(false);
          setIsSendOtpDisabled(false);
          toast.error(data.message || "Failed to send OTP");
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
        setIsOTPErrorMessage("Something went wrong. Please try again.");
        setIsOTPMessage('');
        setIsOtpSent(false);
        setIsOtpVerified(false);
        setIsSendOtpDisabled(false);
      } finally {
        // Stop loader after API call completes
        setIsLoading(false);
      }
    } else {
      setErrors({ ...errors, mobile: "Enter a valid 10-digit mobile number" });
      toast.error("Please enter a valid 10-digit mobile number.");
      setIsLoading(false);
    }
    // Start a timer to hide the message after 5 seconds
    setTimeout(() => {
      setIsOTPMessage(""); // Clear the success message
      setIsOTPErrorMessage(""); // Clear the error message
    }, 15000);
  };


  // Handle OTP verification
  const handleVerifyOtp = async () => {
    if (!formData.otp.trim()) {
      setErrors({ ...errors, otp: "OTP is required" });
      toast.error("Please enter the OTP.");
      return;
    }

    setIsLoading(true);
    setIsVerifyOtpDisabled(true); // Disable "Verify OTP" button
    try {
      const response = await fetch("https://nt-misc.centralindia.cloudapp.azure.com:8012/sgnup_verification_for_interns", {
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
      if (response.ok && data.response == "success") {
        // if (true) {
        // toast.success("OTP verified successfully!");
        setIsVerifyOTPMessage(data.response_message);
        setIsOtpVerified(true);
        setIsFieldsDisabled(true); // Disable all fields
        setIsSendOtpDisabled(true); // Disable Send OTP button
        setOtpTimer(null); // Stop showing the timer
        setUserId(data.user_id || 0);
        formData.userId = data.user_id;
        // Store in localStorage to persist state on refresh
        localStorage.setItem("otpVerified", "true");
        localStorage.setItem("formData", JSON.stringify(formData));
        // } else if (data.response == "fail") {
        //   if (data.response_message === "Mobile number is already verified. Continue with payment." || data.response_message === "Payment has failed. Continue with payment." || data.response_message === "This mobile number is already verified, please proceed to payment") {
        //     setIsVerifyOTPMessage(data.response_message);
        //     setIsOtpVerified(true);
        //     setIsFieldsDisabled(true); // Disable all fields
        //     setIsSendOtpDisabled(true); // Disable Send OTP button
        //     setOtpTimer(null); // Stop showing the timer
        //     setUserId(data.user_id || 99);
        //     formData.userId = data.user_id;
        //     // Store in localStorage to persist state on refresh
        //     localStorage.setItem("otpVerified", "true");
        //     localStorage.setItem("formData", JSON.stringify(formData));
        //   }
        //   else{
        //     setErrors({ ...errors, otp: data.response_message || "Invalid OTP" });
        //     setIsVerifyOTPMessage('');
        //     setIsSendOtpDisabled(false); // Disable Send OTP button
        //     // Re-enable "Verify OTP" button to allow retrying
        //     setIsVerifyOtpDisabled(false);
        //     // setIsOtpVerified(true) // for testing enabled
        //     setOtpTimer(null); // Stop showing the timer
        //   }
      }
      else if (data.response == "fail") {
        if (data.response_message === "Mobile number is already verified. Continue with payment." || data.response_message === "Payment has failed. Continue with payment." || data.response_message === "This mobile number is already verified, please proceed to payment.") {
          setIsVerifyOTPMessage(data.response_message);
          setIsOtpVerified(true);
          setIsFieldsDisabled(true); // Disable all fields
          setIsSendOtpDisabled(true); // Disable Send OTP button
          setOtpTimer(null); // Stop showing the timer
          setUserId(data.user_id || 0);
          formData.userId = data.user_id;
          // Store in localStorage to persist state on refresh
          localStorage.setItem("otpVerified", "true");
          localStorage.setItem("formData", JSON.stringify(formData));
        } else {
          // toast.error(data.response_message || "Invalid OTP. Please try again.");
          setErrors({ ...errors, otp: data.response_message || "Invalid OTP" });
          setIsVerifyOTPMessage('');
          setIsSendOtpDisabled(false); // Disable Send OTP button
          // Re-enable "Verify OTP" button to allow retrying
          setIsVerifyOtpDisabled(false);
          // setIsOtpVerified(true) // for testing enabled
          setOtpTimer(null); // Stop showing the timer
        }
      }
      else {
        // toast.error(data.response_message || "Invalid OTP. Please try again.");
        setErrors({ ...errors, otp: data.response_message || "Invalid OTP" });
        setIsVerifyOTPMessage('');
        setIsSendOtpDisabled(false); // Disable Send OTP button
        // Re-enable "Verify OTP" button to allow retrying
        setIsVerifyOtpDisabled(false);
        // setIsOtpVerified(true) // for testing enabled
        setOtpTimer(null); // Stop showing the timer
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setErrors({ ...errors, otp: data.response_message || "Something went wrong. Please try again." });
      toast.error("Something went wrong. Please try again.");

      // Re-enable "Verify OTP" button on error
      setIsVerifyOtpDisabled(false);
      setIsVerifyOTPMessage('');
    } finally {
      setIsLoading(false);
    }
    // Start a timer to hide the message after 5 seconds
    setTimeout(() => {
      setErrors(""); // Clear the success message
      setIsVerifyOTPMessage(""); // Clear the error message
    }, 15000);
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
  // const handlePaymentSuccess = async () => {
  //   if (!window.Razorpay) {
  //     toast.error("Razorpay SDK failed to load. Please refresh the page.");
  //     return;
  //   }

  //   const options = {
  //     key: "rzp_test_YP62GL4fHAfeVI", // Replace with your Razorpay Key ID
  //     amount: 199 * 100, // Convert ₹199 to paise
  //     currency: "INR",
  //     name: "Internship Registration",
  //     description: "Payment for Internship Program",
  //     image: "https://narmtech.com/assets/logo-Dx_AJf1h.png",
  //     handler: function (response) {
  //       toast.success("Payment successful!");
  //       setIsPaymentSuccessful(true);
  //       console.log("Payment status updated:", true); // Debugging log
  //       // Store payment status to persist after refresh
  //       localStorage.setItem("paymentCompleted", "true");
  //     },
  //     prefill: {
  //       name: formData.name,
  //       email: formData.email,
  //       contact: formData.mobile,
  //     },
  //     theme: {
  //       color: "#007bff",
  //     },
  //   };
  //   console.log("Is Razorpay available?", window.Razorpay);
  //   const razorpay = new window.Razorpay(options);
  //   razorpay.open();
  // };
  const handlePaymentSuccess = async () => {
    if (!window.Razorpay) {
      toast.error("Razorpay SDK failed to load. Please refresh the page.");
      return;
    }
    setIsLoading(true);
    // Disable the "Pay Now" button during payment processing
    setIsPaymentProcessing(true);

    try {
      // Step 1: Create Order API Call
      const orderResponse = await fetch("https://nt-misc.centralindia.cloudapp.azure.com:8012/create_order_for_internship", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOVFBMICBBZG1pbiIsImV4cCI6MjUzNDAyMzAwNzk5fQ.G1AMvRDZ798-uvCmTEs1fK6nKKakmS1v43mp2RcUuVg",
        },
        body: JSON.stringify({
          user_id: formData.userId || userId,
          user_name: formData.name,
          email_id: formData.email,
          mobile_number: formData.mobile,
          subscription_plan_id: 5,
          quiz_package_id: 0,
          plan_type: "Yearly",
          amount: 199,
          currency: "INR",
          receipt: "string",
          notes: {
            additionalProp1: "string",
            additionalProp2: "string",
            additionalProp3: "string"
          }
        })
      });

      const orderData = await orderResponse.json();
      console.log("Order API Response:", orderData);
      let order_id_data = orderData.order_information.id
      console.log('order_id_data - ', order_id_data)

      // Stop execution if API fails
      if (!orderResponse.ok || orderData.response === "failure") {
        setIsLoading(false);
        setIsVerifyPayementMessage(orderData.response_message || "Something went wrong. Please try again.");
        console.error("Order creation failed:", orderData.response_message);
        setIsPaymentProcessing(false); // Re-enable the button on failure
        return;
      }

      if (!order_id_data) {
        setIsLoading(false);
      }

      // Step 2: Open Razorpay Payment Gateway
      const options = {
        key: "rzp_test_YP62GL4fHAfeVI", // Replace with your Razorpay Key ID
        amount: 199 * 100, // Convert ₹199 to paise
        currency: "INR",
        name: "Internship Registration",
        description: "Payment for Internship Program",
        image: "https://narmtech.com/assets/logo-Dx_AJf1h.png",
        order_id: order_id_data, // Razorpay Order ID
        handler: async function (response) {
          console.log("Payment successful:", response);

          // Prepare data for the verification API
          const paymentDetails = {
            user_name: formData.name, // Replace with actual user name
            email_id: formData.email,   // Replace with actual email
            plan_type: "",  // Replace with actual plan type
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };
          console.log('paymentDetails - ', paymentDetails)

          // Step 3: Call API on Successful Payment
          try {
            const paymentResponse = await fetch("https://nt-misc.centralindia.cloudapp.azure.com:8012/verify_payment_signature_for_internship", {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOVFBMICBBZG1pbiIsImV4cCI6MjUzNDAyMzAwNzk5fQ.G1AMvRDZ798-uvCmTEs1fK6nKKakmS1v43mp2RcUuVg",
              },
              body: JSON.stringify({
                order_id: order_id_data,
                payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                plan_type: "One Time",
                // status: "success",
                user_name: formData.name,
                email_id: formData.email,
                // mobile_number: formData.mobile,
                // amount: 199,
                // currency: "INR",
              })
            });

            const paymentData = await paymentResponse.json();
            console.log("Payment Success API Response:", paymentData);

            if (!paymentResponse.ok) {
              setIsVerifyPayementMessage(paymentData.message || "Something went wrong. Please try again.");
              throw new Error(paymentData.message || "Payment success API failed");
            }
            if (paymentData.response === "success") {
              toast.success("Payment successful!");
              setIsVerifyPayementMessage(paymentData.response_message || "Payment successful!");
              localStorage.setItem("paymentCompleted", "true");
              setIsPaymentSuccessful(true);
              // Ensure isDetailsSubmitted is false to show the form
              setIsDetailsSubmitted(false);
              setForceUpdate((prev) => prev + 1); // Force UI re-render
              setTimeout(() => setIsRegistered(true), 2000);
            } else {
              setIsVerifyPayementMessage(paymentData.response_message || "Payment failed. Please try again.");
            }

          } catch (error) {
            setIsVerifyPayementMessage("Error in payment verification. Please contact support.");
            console.error("Error in payment success API:", error);
            toast.error("Error in payment verification. Please contact support.");
          } finally {
            setIsPaymentProcessing(false); // Re-enable the button after processing
          }
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

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Error processing payment. Please try again.");
      setIsVerifyPayementMessage("Error processing payment. Please try again.");
      setIsPaymentProcessing(false); // Re-enable the button on error
    } finally {
      setIsLoading(false);
    }
    // Start a timer to hide the message after 5 seconds
    setTimeout(() => {
      setIsVerifyPayementMessage(""); // Clear the error message
    }, 15000);
  };




  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      {isLoading && <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div className="spinner"></div>
      </div>}
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 bg-white shadow-xl rounded-lg overflow-hidden p-6">
          {/* Left Section - Progress Bar */}
          <div className="p-8 bg-[#ffecca] rounded-lg text-gray-800">
            <h3 className="text-xl font-semibold mt-4">How it's going to help you?</h3>
            <p className="mt-2 text-sm">
              <span className="font-bold">GenAI</span> is set to <span className="font-bold italic">revolutionize</span> the IT industry, transforming how it operates and redefining the role of
              <span className="font-bold italic"> IT developers</span>.
              This <span className="font-bold">internship program</span> will equip you with the knowledge and skills to apply
              <span className="font-bold italic"> GenAI technology</span> to real-world challenges and develop
              <span className="font-bold"> consumer applications</span> that harness its full potential.
            </p>

            <h3 className="text-xl font-semibold mt-4">What you are going to learn?</h3>
            <p className="mt-2 text-sm">
              In this <span className="font-bold">internship</span>, you'll gain a
              <span className="font-bold italic"> deep understanding of GenAI</span> and its
              <span className="font-bold"> practical applications</span> in your day-to-day tasks.
              You'll explore how to <span className="font-bold italic"> integrate GenAI</span> into various workflows,
              <span className="font-bold">automate processes</span> , and
              <span className="font-bold italic"> enhance productivity</span>.
              Additionally, you'll learn to build <span className="font-bold">simple SaaS applications</span> and
              <span className="font-bold italic"> intelligent bots</span> using
              <span className="font-bold"> Python and GenAI</span>, equipping you with the skills to create
              <span className="font-bold italic"> innovative AI-powered solutions</span>.
            </p>
            <p className="mt-4 font-semibold">📅 Duration: 6 Weeks | Limited Seats Only</p>
            <div className="mt-4">
              <p className="font-semibold">📍 Internship Progress</p>
              {/* Responsive Progress Bar */}
              <div className="flex flex-col items-center justify-between mt-4 relative sm:flex-row">
                <ProgressBar />
              </div>
              <p className="mt-4">
                Register for the internship with a nominal fee. Need more details? ask our <span className="font-bold italic text-black">AI bot</span>
                <span className="text-blue-600 font-semibold"> "Ask Monica" </span>
                or email at
                <a href="mailto:internship@narmtech.com" className="text-blue-600 font-semibold"> internship@narmtech.com</a>.
              </p>

            </div>
            {/* Internship Overview Div */}
            {isVisible && (
              <div className="mt-4">
                <h2>Internship Program Overview (Online)</h2>
                <p>
                  Our internship program is meticulously designed to bridge theoretical learning with practical
                  applications, offering participants a robust foundation in the latest technologies and methodologies.
                </p>

                <h3>Key Highlights:</h3>
                <ul>
                  <li>
                    <strong>Orientation Program (Online):</strong>
                    <ul>
                      <li>Introduction to the internship structure, objectives, and outcomes.</li>
                      <li>
                        Overview of tools and technologies used, including OpenAI, FastAPI, Python, PostgreSQL, ReactJS,
                        Azure, and GitHub.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Skill Development Sessions:</strong>
                    <ul>
                      <li>Comprehensive training on industry-relevant skills.</li>
                      <li>Mentorship from experienced industry professionals.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Live Projects:</strong>
                    <ul>
                      <li>Real-world project involvement.</li>
                      <li>Collaboration with cross-functional teams.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Certification:</strong>
                    <ul>
                      <li>
                        Upon successful completion, participants will receive a certificate acknowledging their efforts
                        and achievements.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h3>Why Partner with Us?</h3>
                <ul>
                  <li>Exposure to cutting-edge technologies and industry practices.</li>
                  <li>Opportunities to contribute to impactful projects.</li>
                  <li>A competitive advantage in the job market.</li>
                </ul>

                <h3>Registration Details:</h3>
                <p>
                  Students can register via our dedicated portal:{" "}
                  <a href="https://narmtech.com/internship" target="_blank" rel="noopener noreferrer">
                    narmtech.com/internship
                  </a>
                  . The signup process is intuitive, ensuring a hassle-free experience.
                </p>
              </div>
            )}
          </div>

          {/* Right Section - Conditional Rendering */}
          {!isRegistered ? (
            <div className="p-8 bg-zinc-100 rounded-lg flex flex-col">
              <h3 className="text-xl font-semibold text-center mb-4">Sign Up for Internship Program</h3>
              <form className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700"><i className="fa-solid fa-user text-blue-600"></i> Full Name <span className='text-[10px] text-blue-800 font-semibold'><i>(as per certificates)</i></span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-blue-500'
                      }`}
                    autoComplete='off'
                  // disabled={isFieldsDisabled}
                  />
                  {errors.name && <p className="text-red-500 text-xs pt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700"><i className="fa-solid fa-envelope text-blue-600"></i> Email <span className='text-[10px] text-blue-800 font-semibold'><i>(All communication will be sent to this email)</i></span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-blue-500'
                      }`}
                    autoComplete='off'
                  // disabled={isFieldsDisabled}
                  />
                  {errors.email && <p className="text-red-500 text-xs pt-1">{errors.email}</p>}
                </div>

                {/* Mobile Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700"><i className="fa-solid fa-phone text-blue-600"></i> Mobile</label>
                  <div className="flex items-center justify-between space-x-2">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter Mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-[60%] p-3 border rounded-lg focus:outline-none focus:ring-2 
                      ${errors.mobile ? "border-red-500" : "focus:ring-blue-500"}`}
                      autoComplete="off"
                    // disabled={isFieldsDisabled}
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
                      // disabled={isSendOtpDisabled || formData.mobile.length !== 10 || !!errors.mobile}
                      disabled={formData.mobile.length !== 10 || !!errors.mobile}
                    >
                      {isSendOtpDisabled ? "Resend OTP" : "Send OTP"}
                    </button>
                  </div>

                  {/* Always show error message & countdown when OTP is sent */}
                  <span className="text-xs text-[#1d8105] pt-1">{isOTPMessage}</span>
                  <span className='text-xs text-red-500 pt-1'>{isOTPErrorMessage}</span>
                  {errors.mobile || isSendOtpDisabled ? (
                    <p className="text-red-500 text-xs">
                      {errors.mobile ? errors.mobile : ""}{" "}
                      {isSendOtpDisabled && !isVerifyOtpDisabled && (
                        <span className="text-blue-600 font-semibold pt-1">
                          Resend OTP in {otpTimer}s
                        </span>
                      )}
                    </p>
                  ) : null}
                </div>
                {/* OTP Field */}
                {isOtpSent && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">🔐 OTP:</label>
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
                      // disabled={!formData.otp || !!errors.otp}
                      >
                        Verify OTP
                      </button>
                    </div>
                    {errors.otp && <p className="text-red-500 text-xs pt-1">{errors.otp}</p>}
                    {isVerifyOtpDisabled && <p className="text-[#1d8105] text-xs pt-1">{isVerifyOTPMessage}</p>}
                  </div>
                )}

                {/* Register Button */}
                {/* <button
                  type="button"
                  onClick={handlePaymentSuccess}
                  className={`w-full px-6 py-3 text-white rounded-lg shadow-md transition ${isOtpVerified && Object.keys(errors).length === 0
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-400 text-white cursor-not-allowed'
                    }`}
                  disabled={!isOtpVerified || Object.keys(errors).length > 0}
                >
                  Pay Now
                </button> */}
                {/* Conditional Rendering for Payment Section */}
                {isOtpVerified && (
                  <div className="mt-4">
                    {/* Disclaimer for Nominal Fee */}
                    <p className="text-base text-gray-600 mb-2">
                      Note: A nominal fee of ₹199 is required to complete your registration (Non refundable).
                    </p>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        id="termsCheckbox"
                        className="mr-2"
                        onChange={(e) => setIsTermsAccepted(e.target.checked)} // Enable Pay Now button when checked
                      />
                      <label htmlFor="termsCheckbox" className="text-sm text-gray-700 cursor-pointer">
                        I agree to the{' '}
                        <span
                          className="text-blue-600 underline cursor-pointer"
                          onClick={() => setIsTermsPopupOpen(true)} // Open Terms and Conditions popup
                        >
                          Terms and Conditions
                        </span>
                      </label>
                    </div>

                    {/* Pay Now Button */}
                    <button
                      type="button"
                      onClick={handlePaymentSuccess}
                      className={`w-full px-6 py-3 text-white rounded-lg shadow-md transition ${isPaymentProcessing
                        ? 'bg-slate-400 cursor-not-allowed' // Show as disabled during payment processing
                        : isTermsAccepted
                          ? 'bg-blue-600 hover:bg-blue-700' // Active state when terms are accepted
                          : 'bg-slate-400 cursor-not-allowed' // Disabled state when terms are not accepted
                        }`}
                      disabled={!isTermsAccepted} // Disable button if terms are not accepted
                    >
                      Pay Now
                    </button>
                    {isVerifyPayementMessage !== "" && (
                      <p className="text-red-500 text-xs pt-1">{isVerifyPayementMessage}</p>
                    )}
                  </div>
                )}

                {/* Terms and Conditions Popup */}
                {isTermsPopupOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-2xl overflow-y-auto h-96">
                      <h2 className="text-lg font-bold mb-4">Terms and Conditions</h2>
                      <div style={{ fontSize: '11px' }}>
                        <p>
                          <strong>1. Eligibility:</strong>
                          By signing up for the internship program, you confirm that you meet the eligibility criteria,
                          including age, educational qualifications, and other requirements specified in the internship
                          description.
                        </p>
                        <p>
                          <strong>2. Commitment:</strong>
                          Interns are expected to adhere to the internship schedule, complete assigned tasks, and maintain
                          a professional attitude throughout the program.
                        </p>
                        <p>
                          <strong>3. Confidentiality:</strong>
                          Interns must maintain confidentiality regarding any sensitive information, documents, or data
                          accessed during the internship. Unauthorized sharing or misuse will result in immediate
                          termination and potential legal action.
                        </p>
                        <p>
                          <strong>4. Stipend and Benefits:</strong>
                          The internship program is unpaid. No stipend or monetary compensation will be provided.
                          However, as part of the program, interns will gain valuable hands-on experience, enhancing their
                          practical skills and knowledge. Upon successful completion, interns will receive a certificate
                          of completion as a formal acknowledgment of their efforts and accomplishments.
                        </p>
                        <p>
                          <strong>5. Intellectual Property:</strong>
                          Any work created or developed during the internship is the sole intellectual property of the
                          company unless explicitly stated otherwise.
                        </p>
                        <p>
                          <strong>6. Termination:</strong>
                          The company reserves the right to terminate the internship for reasons including but not limited
                          to non-performance, misconduct, or breach of terms.
                        </p>
                        <p>
                          <strong>7. Compliance:</strong>
                          Interns must comply with company policies, code of conduct, and applicable laws throughout the
                          internship.
                        </p>
                        <p>
                          <strong>8. Indemnity:</strong>
                          The company is not liable for any personal injury or property damage during the internship
                          unless caused by company negligence.
                        </p>
                        <p>
                          <strong>9. Amendments:</strong>
                          The company may update these terms and conditions and schedule at any time. Interns will be
                          notified of significant changes.
                        </p>
                        <h3 className="font-bold mt-4">Privacy Policy</h3>
                        <p>
                          <strong>1. Personal Information Collection:</strong>
                          We collect personal details, including your name, contact information, academic records, and
                          other data required for processing your application and managing the internship.
                        </p>
                        <p>
                          <strong>2. Usage of Information:</strong>
                          Your personal information is used solely for recruitment, training, and internship management
                          purposes.
                        </p>
                        <p>
                          <strong>3. Data Sharing:</strong>
                          Your information will not be shared with third parties unless required by law or necessary for
                          program facilitation.
                        </p>
                        <p>
                          <strong>4. Data Security:</strong>
                          We implement reasonable measures to protect your personal data against unauthorized access,
                          alteration, or disclosure.
                        </p>
                        <p>
                          <strong>5. Access and Correction:</strong>
                          You may request access to or correction of your personal information at any time by contacting
                          our HR department.
                        </p>
                        <p>
                          <strong>6. Retention of Data:</strong>
                          Your data will be retained for the internship and for a limited period afterward as per legal
                          and business requirements.
                        </p>
                        <p>
                          <strong>7. Cookies and Tracking:</strong>
                          If you use our online platforms, cookies or similar technologies may be used to enhance your
                          experience.
                        </p>
                        <p>
                          <strong>8. Consent:</strong>
                          By signing up, you consent to our collection, use, and processing of your data as outlined in
                          this Privacy Policy.
                        </p>
                        <p>
                          <strong>9. Policy Updates:</strong>
                          We reserve the right to update this Privacy Policy. Significant changes will be communicated
                          to you.
                        </p>
                      </div>
                      <button
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        onClick={() => setIsTermsPopupOpen(false)} // Close popup
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
            // ) : !isPaymentSuccessful ? (
            //   <PaymentIntegration handlePaymentSuccess={handlePaymentSuccess} />
          ) : isPaymentSuccessful && !isDetailsSubmitted ? (
            <PersonalAcademicForm handleSubmitDetails={() => setIsDetailsSubmitted(true)} />
          ) : (
            <div className="text-center p-8 bg-green-100 rounded-lg">
              <h2 className="text-2xl font-bold text-lime-800">🎉 Registration Complete!</h2>
              <p className="mt-2">Your details have been successfully submitted.</p>
              <p className="mt-2">You’ll get a confirmation email with all the necessary information.</p>
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
      {/* <ToastContainer /> */}
      <Footer />
      {/* Toast Container */}
      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1} // Ensures only one toast is displayed at a time
      /> */}
    </div>
  );
};

export default Intern;