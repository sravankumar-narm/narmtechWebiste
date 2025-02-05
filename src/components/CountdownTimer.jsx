import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CountdownTimer = ({ endDate, currentPath }) => { // Added currentPath prop
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  function calculateTimeLeft() {
    const difference = new Date(endDate).getTime() - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
    }

    let daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

    return { days: daysLeft, hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft, ended: false };
  }

  const { days, hours, minutes, seconds, ended } = timeLeft;

 let bgColorClass = 'bg-gradient-to-br from-[#f05030] to-[#d03c27] text-white p-3 rounded-lg shadow-md hover:bg-gradient-to-tr hover:from-orange-700 hover:to-orange-900 hover:shadow-lg transition-all duration-300 cursor-pointer z-20'; // Mid blue gradient for normal days
  // if(days > 3){
  //   bgColorClass = ''; // 3 days or less
  // }
  if (days <= 5 && !ended) {
    bgColorClass = 'bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-lg shadow-md hover:bg-gradient-to-tr hover:from-blue-50 hover:to-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer z-20 hover:scale-105';
  }
  if (days <= 2 && !ended) {
    bgColorClass = 'bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 rounded-lg shadow-md hover:bg-gradient-to-tr hover:from-purple-50 hover:to-white hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer z-20 hover:scale-105'; // 2 days or less, white to light purple with enhanced hover effects
  }
  if (days <= 1 && !ended) {
    bgColorClass = 'bg-gradient-to-br from-white to-red-50 border-2 border-red-200 rounded-lg shadow-md hover:bg-gradient-to-tr hover:from-red-50 hover:to-white hover:border-red-300 hover:shadow-lg transition-all duration-300 cursor-pointer z-20 hover:scale-105'; // 1 day or less, white to light red with enhanced hover effects
  }
  if (ended) {
    bgColorClass = 'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-lg shadow-md hover:bg-gradient-to-tr hover:from-gray-100 hover:to-gray-50 hover:border-gray-400 hover:shadow-lg transition-all duration-300 cursor-pointer z-20'; // Ended, light gray to gray with enhanced hover effects
  }

  // Hide timer on signup page
  if (ended || currentPath === '/internship/signup' || currentPath === '/internship') {
    return null;
  } else {
    return (
      <div onClick={() => navigate('/internship')} className={`fixed left-4 bottom-4 ${bgColorClass} text-white p-3 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300 cursor-pointer z-20`}>
        <div className="text-base font-bold">Virtual Internship Program on Generative AI Powered Web Applications</div>
        <div className="text-sm text-gray-300">
          <span>{days}d {hours}h {minutes}m {seconds}s</span>&nbsp;&nbsp;
          <span>({new Date(endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })})</span>
        </div>
      </div>
    );
  }
};

export default CountdownTimer;
