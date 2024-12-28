import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AgriCard from "../components/Agri/AgriCard";
import AgriCardSmall from "../components/Agri/AgriCardSmall";
import Agri1 from "../assets/Agri/Agri1.png";
import Agri2 from "../assets/Agri/Agri2.png";
import { useNavigate } from "react-router-dom";


const AgriCardData = {
  title:
    "Crop Assistance",
  content: `Crop assistance and recommendation tool for Farmers.`,

};
const AgriCardData1 = {
    title:
      "Market Assistance",
    content: `Marketing assistance and buyer connects to Farmers.`,
  
  };

const Agri = () => {
  const navigate = useNavigate();

  const navigateToContact  = () => {
    navigate("/Contact1  ");
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <AgriCard />
      <div className="relative">
        <div className="relative z-10">
          <AgriCardSmall reverse={false} data={AgriCardData} image={Agri1} />
          { <AgriCardSmall reverse={true} data={AgriCardData1} image={Agri2} /> }
        </div>

        {/* bg-overlay */}
        <div>
          <div className="h-[600px] w-[600px] rounded-full bg-darkBlue/5 absolute top-1/2 -translate-y-1/2 right-[-300px]">
            <div className="h-full flex justify-center items-center">
              <div className="h-[400px] w-[400px] rounded-full bg-darkBlue/10 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="primary-btn px-10 mt-8" onClick={navigateToContact}>know more</button>
      </div>
      <Footer />
    </div>
  );
};

export default Agri;
