import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const CountdownTimer = ({ endDate, currentPath }) => {
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

  // Dynamic background color based on days left
  let bgColorClass = 'bg-gradient-to-br from-[#f05030] to-[#d03c27] text-white p-3 rounded-lg shadow-md';
  // if (days <= 5 && !ended) {
  //   bgColorClass = 'bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-lg shadow-md';
  // }
  if (days <= 2 && !ended) {
    bgColorClass = 'bg-gradient-to-br from-[#f64e4e] to-[#f64e4e] text-white p-3 rounded-lg shadow-md';
  }
  if (days <= 1 && !ended) {
    bgColorClass = 'bg-gradient-to-br from-[#db3a3a] to-[#f64e4e] text-white p-3 rounded-lg shadow-md';
  }
  if (ended) {
    bgColorClass = 'bg-gradient-to-br from-[#f64e4e] to-[#f64e4e] text-white p-3 rounded-lg shadow-md';
  }

  // Hide timer on signup page
  if (ended || currentPath === '/internship/signup' || currentPath === '/internship') {
    return null;
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start with fade-in and slide-up effect
        animate={{ opacity: 1, y: 0 }} // Animate to fully visible and no vertical offset
        transition={{ duration: 0.5, ease: 'easeOut' }} // Smooth transition
        whileHover={{
          scale: 1.05, // Slightly zoom in on hover
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add a shadow on hover
        }}
        whileTap={{
          scale: 0.95, // Shrink (sink) when clicked
          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)', // Reduce shadow when clicked
        }}
        className={`fixed left-4 bottom-4 ${bgColorClass} cursor-pointer z-20`}
        onClick={() => navigate('/internship')}
      >
        <div className="text-base font-bold">
          Virtual Internship Program on GenAI Powered Web Applications
        </div>
        <div className="text-sm text-gray-300">
          <span>{days}d {hours}h {minutes}m {seconds}s</span>&nbsp;&nbsp;
          <span>({new Date(endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })})</span>
        </div>
      </motion.div>
    );
  }
};

export default CountdownTimer;