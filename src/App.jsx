import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import close from "./assets/brand/close.png";

function App() {
  const [aiChatStatus, setAiChatStatus] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenAIChat() {
    setAiChatStatus(!aiChatStatus);
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openAibot = () => {
    setAiChatStatus(true);
  };

  return (
    <BrowserRouter>
      <>
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
            {aiChatStatus && <Route path="Aibot" element={<Aibot onClose={handleOpenAIChat} />} />}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>

        {!showMenu ? (
          <div className="fixed bottom-0 right-0 z-10">
            {!aiChatStatus ? (
              <div className="fixed bottom-0 right-0 z-10 group/item">
                <div className="group/edit invisible group-hover/item:visible">
                  <img
                    src={close}
                    className="float-end pr-2"
                    onClick={toggleMenu}
                  />
                </div>
                <div onClick={openAibot}>
                  <img src={monicaImg} className="w-[70%] float-end " />
                </div>
              </div>
            ) : (
              <div>
                <Aibot onClose={handleOpenAIChat} />
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
    </BrowserRouter>
  );
}

export default App;
