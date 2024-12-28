import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LegalCard from "../components/Legal/LegalCard";
import LegalCardSmall from "../components/Legal/LegalCardSmall";
import Legal1 from "../assets/legal/legal1.png";
import Legal2 from "../assets/legal/legal2.png";
import Legal3 from "../assets/legal/legal3.png";
import Legal4 from "../assets/legal/legal4.png";
import { useNavigate } from "react-router-dom";

const LegalCardData = {
  title:
    "Legal Documentation",
  content: `Document Management for Legal Firms and Advocates.`,
  image : Legal1
};
const LegalCardData1 = {
  title:
    "Intelligent Citations",
  content: `Citation References for Legal Firms and Advocates.`,
  image : Legal2
};
const LegalCardData2 = {
  title:
    "Corporate Legal",
  content: `Legal and compliance solutions for corporates.`,
  image : Legal3
};
const LegalCardData3 = {
  title:
    "Legal Assistance",
  content: `Assistance to the common public on legal issues.`,
  image : Legal4
};
const Legal = () => {
  
  const navigate = useNavigate();

  const navigateToContact  = () => {
    navigate("/Contact1  ");
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <LegalCard />
      <div className="relative">
        <div className="relative z-10">
          <LegalCardSmall reverse={false} data={LegalCardData}/>

          <LegalCardSmall reverse={true} data={LegalCardData1}/>
        
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

      <div className="relative">
        <div className="relative z-10">
          {<LegalCardSmall reverse={false} data={LegalCardData2} /> }
          { <LegalCardSmall reverse={true} data={LegalCardData3} /> }
        </div>
        {/* bg-overlay */}
        <div>
          <div className="h-[600px] w-[600px] rounded-full bg-darkBlue/5 absolute top-1/2 -translate-y-1/2 left-[-300px]">
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

export default Legal;
