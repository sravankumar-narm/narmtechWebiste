import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ITCard from "../components/IT/ITCard";
import ITCardSmall from "../components/IT/ITCardSmall";
import IT1 from "../assets/IT/IT1.png"
import IT2 from "../assets/IT/IT2.png"
import IT3 from "../assets/IT/IT3.png"
import { useNavigate } from "react-router-dom";

const ITCardData = {
  title:
    "Cloud Costs",
  content: `Cost comparison tool between multiple cloud environments and On-premise infra.`,
};
const ITCardData1 = {
    title:
      "IT Infrastructure Recommendation",
    content: `AI recommendations tool for Enterprises on Cloud and Hybrid IT infrastructures.`,
  };
  const ITCardData2 = {
    title:
      "IT Infrastructure Monitoring",
    content: `Integrated IT infrastructure monitoring tool for Enterprises.`,
  };
const IT = () => {
  const navigate = useNavigate();

  const navigateToContact  = () => {
    navigate("/Contact1  ");
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <ITCard />
      <div className="relative">
        <div className="relative z-10">
          <ITCardSmall reverse={false} data={ITCardData} image={IT1} />
          { <ITCardSmall reverse={true} data={ITCardData1} image={IT2}/> }
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
          {<ITCardSmall reverse={false} data={ITCardData2} image={IT3}/> }
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

export default IT;
