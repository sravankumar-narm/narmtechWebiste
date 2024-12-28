import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import EduCard from "../components/Edu/EduCard"
import EduCardSmall from "../components/Edu/EduCardSmall";
import Edu1 from "../assets/Edu/Edu1.png"
import Edu2 from "../assets/Edu/Edu2.png"
import Edu3 from "../assets/Edu/Edu3.png"
import Edu4 from "../assets/Edu/Edu4.png"
import { useNavigate } from "react-router-dom";


const EduCardData = {
  title:
    "QuizifAI",
  content: `You AI-powered Quiz & Exam Companion`,
};
const EduCardData1 = {
    title:
      "Time Table",
    content: `AI recommendation engine for Class timetables, Lesson Plans, and employee schedules.`,
  };
  const EduCardData2 = {
    title:
      "Attendance",
    content: `Fully automated attendance solution for Educational Institutions.`,
  };
  const EduCardData3 = {
      title:
        "Human Resource Management",
      content: `AI-powered HRMS solution for Educational Institutions.`,
    };

const Edu = () => {
  const navigate = useNavigate();

  const navigateToContact  = () => {
    navigate("/Contact1  ");
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <EduCard />
      <div className="relative">
        <div className="relative z-10">
          <EduCardSmall reverse={false} data={EduCardData} image={Edu1} />
          { <EduCardSmall reverse={true} data={EduCardData1} image={Edu2}/> }
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
          {<EduCardSmall reverse={false} data={EduCardData2} image={Edu3}/> }
          { <EduCardSmall reverse={true} data={EduCardData3} image={Edu4}/> }
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

export default Edu;
