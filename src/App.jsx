import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Intern from "./pages/Intern.jsx";
import Signup from "./pages/Signup.jsx"; // Import Signup component

import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import NoPage from "./pages/NoPage.jsx";
import Offerings from "./pages/Offerings.jsx";
import Consulting from "./pages/Consulting.jsx";
import Legal from "./pages/Legal.jsx";
import IT from "./pages/IT.jsx";
import Edu from "./pages/Edu.jsx";
import Agri from "./pages/Agri.jsx";
import AboutUs from "./pages/Aboutus.jsx";
import OurTeam from "./pages/OurTeam.jsx";
import Aibot from "./pages/Aibot.jsx";
import monicaImg from "./assets/brand/monica.png";
import CountdownTimer from "./components/CountdownTimer";
import close from "./assets/brand/close.png";
import { useLocation } from 'react-router-dom'; // Import useLocation
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Refund from "./pages/Refund.jsx";

function App() {
  const [aiChatStatus, setAiChatStatus] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [chatLog, setChatLog] = useState([]); // Lift chatLog state to App

  const location = useLocation();

  const handleOpenAIChat = () => {
    if (aiChatStatus) {
      // If the chatbot is currently open, reset the chatLog state when closing
      setChatLog([]);
    }
    setAiChatStatus(!aiChatStatus);
  };

  const handleMinAIChat = () => {
    setAiChatStatus(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openAibot = () => {
    setAiChatStatus(true);
  };

  return (
    <>
      <CountdownTimer endDate="2025-03-31T12:00:00" currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="offerings" element={<Offerings />} />
          <Route path="Aboutus" element={<AboutUs />} />
          <Route path="consulting" element={<Consulting />} />
          <Route path="Ourteam" element={<OurTeam />} />
          <Route path="legal" element={<Legal />} />
          <Route path="IT" element={<IT />} />
          <Route path="Edu" element={<Edu />} />
          <Route path="Agri" element={<Agri />} />
          <Route path="internship" element={<Intern />} />
          <Route path="internship/signup" element={<Signup />} />
          <Route path="PrivatePolicy" element={<Privacy />} />
          <Route path="TermsandConditions" element={<Terms />} />
          <Route path="CancellationAndRefundPolicy" element={<Refund />} />
          {aiChatStatus && (
            <Route
              path="Aibot"
              element={
                <Aibot
                  onClose={handleOpenAIChat}
                  onMin={handleMinAIChat}
                  chatLog={chatLog} // Pass chatLog as a prop
                  setChatLog={setChatLog} // Pass setChatLog as a prop
                />
              }
            />
          )}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

      {!showMenu ? (
        <div className="fixed bottom-0 right-0 z-10">
          {!aiChatStatus ? (
            <div className="fixed bottom-0 right-0 z-10 group/item">
              <div className="group/edit invisible group-hover/item:visible">
                <img src={close} className="float-end pr-2" onClick={toggleMenu} />
              </div>
              <div onClick={openAibot}>
                <img src={monicaImg} className="w-[70%] float-end" />
              </div>
            </div>
          ) : (
            <div>
              <Aibot
                onClose={handleOpenAIChat}
                onMin={handleMinAIChat}
                chatLog={chatLog} // Pass chatLog as a prop
                setChatLog={setChatLog} // Pass setChatLog as a prop
              />
            </div>
          )}
        </div>
      ) : (
        <div
          className="fixed bottom-[120px] right-0 z-10 -rotate-90 -mr-10 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="bg-[#D9D9D9] text-[14px] rounded-t-lg px-[35px] py-[5px]">
            <p className="font-normal">Ask</p>
            <p className="font-extrabold">MONICA</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
