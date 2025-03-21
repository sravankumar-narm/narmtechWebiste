import React from "react";
import quizifAI from "../../assets/offerings/quizifAI.png";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const OfferingsCardReverse = ({ Image }) => {
  const navigate = useNavigate();

  const handleEdu = () => {
    navigate("/Edu");
  };
  return (
    <>
      <div className="relative py-4">
        <div className="container-fluid lg:px-14 min-h-[700px] grid place-items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center relative">
            {/* first col */}
            {/* <div className="order-2 lg:order-1 mt-20 flex flex-col items-center gap-5 lg:translate-x-[50px]">
              <div className="h-[280px] w-[400px] mx-auto bg-white rounded-[50px] border-[1px] border-darkBlue shadow-md grid place-items-center">
                <img src={Image} alt="" />
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-[96px] h-[116px] bg-gray shadow-md rounded-3xl"></div>
                <div className="w-[96px] h-[116px] bg-gray shadow-md rounded-3xl"></div>
                <div className="w-[96px] h-[116px] bg-gray shadow-md rounded-3xl"></div>
                <div className="w-[96px] h-[116px] bg-gray shadow-md rounded-3xl"></div>
              </div>
              <button className="primary-btn px-10 mt-8">More Details</button>
            </div> */}
            <div className="order-2 lg:order-1 mt-20 flex flex-col items-center gap-5 lg:translate-x-[90px] xl:translate-x-[50px]">
              <div className=" mx-auto bg-white rounded-[50px] border-[1px] border-darkBlue shadow-md grid place-items-center p-5 py-10 gap-8">
                <img src={Image} alt="" />
                {/* <div className="md:w-[420px] lg:w-[420px] h-1 bg-[#B6B2B2] absolute lg:mb-28 md:mb-24  "></div>
                <div className="md:w-[20px] lg:w-[40px] h-1 bg-green rounded-full absolute rotate-90 lg:-ml-[420px] lg:-mt-20 md:-mt-16 md:-ml-[420px]"></div>
                <div className="md:w-[15px] lg:w-[15px] h-[15px] bg-green rounded-full absolute lg:-ml-[420px] lg:mb-28 md:mb-24 md:-ml-[420px] "></div>
                <div className="md:w-[8px] lg:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute lg:-ml-[420px] lg:mb-28 md:mb-24 md:-ml-[420px]"></div>
                <div className="md:w-[20px] lg:w-[40px] h-1 bg-pink rounded-full absolute rotate-90 lg:-ml-[140px] md:-ml-[140px] lg:-mt-20 md:-mt-16"></div>
                <div className="md:w-[15px] lg:w-[15px] h-[15px] bg-pink rounded-full absolute rotate-90 lg:-ml-[140px] md:-ml-[140px] md:mb-24 lg:mb-28"></div>
                <div className="md:w-[8px] lg:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute rotate-90 lg:-ml-[140px] md:-ml-[140px] md:mb-24 lg:mb-28 "></div>
                <div className="md:w-[20px] lg:w-[40px] h-1 bg-[#FFCA77] rounded-full absolute rotate-90 lg:ml-[140px] md:ml-[140px] lg:-mt-20 md:-mt-16  "></div>
                <div className="md:w-[15px] lg:w-[15px] h-[15px] bg-[#FFCA77] rounded-full absolute rotate-90 lg:ml-[140px] md:ml-[140px] md:mb-24 lg:mb-28 "></div>
                <div className="md:w-[8px] lg:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute rotate-90 lg:ml-[140px]  md:ml-[140px] md:mb-24 lg:mb-28"></div>
                <div className="md:w-[20px] lg:w-[40px] h-1 bg-lightBlue  rounded-full absolute rotate-90 lg:ml-[420px] md:ml-[420px] lg:-mt-20 md:-mt-16 "></div>
                <div className="md:w-[15px] lg:w-[15px] h-[15px] bg-lightBlue  rounded-full absolute rotate-90 lg:ml-[420px] md:ml-[420px] md:mb-24 lg:mb-28  "></div>
                <div className="md:w-[8px]  lg:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute rotate-90 lg:ml-[421px] md:ml-[420px] md:mb-24 lg:mb-28"></div> */}

                <div className=" grid md:flex gap-3">
                  <div className="flex justify-center  flex-col items-center  text-center break-words text-sm bg-green shadow-md rounded-3xl p-2 md:py-4  " >
                    <div className="flex justify-center flex-col items-center leading-[16.62px]  text-center break-words  font-bold md:mb-7">
                      <img src={quizifAI} />
                      <div className="flex justify-center leading-[18px] items-center text-[14px] md:w-[110px]  text-center break-words font-normal">
                        Your AI-powered Quiz & Exam Companion
                      </div>
                      <a href={'https://quizifai.com/'} target="_blank" rel="noopener noreferrer" className="text-primary underline flex items-center gap-1">
                        Know more <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center  flex-col items-center  text-center text-sm bg-pink shadow-md rounded-3xl p-2 ">
                    <div className="flex justify-center leading-[16.62px] text-[14px] flex-col items-center text-center font-bold ">
                      TimeTable
                      <div className="flex justify-center leading-[18px]  text-[12px]  md:w-[110px] text-center p-2 font-normal ">
                        AI Endorsed engine
                        Class Timetables, Lesson
                        Plans, and Employee schedules.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center  flex-col items-center text-center break-words text-sm bg-orange font-bold shadow-md rounded-3xl p-2  ">
                    <div className="flex justify-center leading-[16.62px] flex-col items-center text-[14px] text-center md:mb-5  ">
                      Attendence
                      <div className="flex justify-center leading-[18px]  text-[12px]  md:w-[110px] text-center break-words p-2 font-normal">
                        Fully automated Attendance solution for Educational
                        Institutions.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center leading-[18-62px] flex-col items-center  text-center break-words text-sm bg-lightBlue font-bold shadow-md rounded-3xl p-2  ">
                    <div className="flex justify-center  font-bold text-[14px] flex-col leading-[16.62px] md:w-[110px]">
                      Human Resource Management
                      <div className="flex justify-center leading-[18px]  text-[12px] md:w-[110px] text-center break-words p-2 font-normal ">
                        AI-powered HRMS solution for Educational Institutions.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex gap-5 items-center">
                  <div className="flex justify-center items-center text-[10px] w-[110px] text-center break-words p-1">
                    AI generated Exams and Quizzes.
                  </div>
                  <div className="flex justify-center items-center text-[10px] w-[110px] text-center break-words p-1">
                    AI recommendation engine for Class timetables, Lesson Plans,
                    and employee schedules.
                  </div>
                  <div className="flex justify-center items-center text-[10px] w-[110px] text-center break-words p-1">
                    Fully automated attendance solution for Educational
                    Institutions.
                  </div>
                  <div className="flex justify-center items-center text-[10px] w-[110px] text-center break-words p-1">
                    AI-powered HRMS solution for Educational Institutions.
                  </div>
                </div> */}
              </div>
              {/* <button
                className="primary-btn px-10 mt-8 rounded-full lg:ml-20 2xl:ml-32"
                id="moreDetailsText2"
                onClick={handleEdu}
              >
                More Details
              </button> */}
            </div>

            {/* first col */}
            <div className="order-1 lg:order-2 lg:col-span-2 lg:pl-60 xl:pl-44 bg-creamWhite text-black/70 px-10 py-20 rounded-3xl">
              <h1 className="text-5xl font-bold mb-4">Education</h1>
              <h1 className="text-2xl font-bold mb-4">
                ADHYAYN
              </h1>
              <p className="leading-7 font-medium">
                Our ADHYAYN empowers Educational Institutions through the
                integration of AI and LLM Model Technologies.
              </p>
              <h4 className="font-bold my-4">
                AI intelligence is extensively applied in the following.{" "}
              </h4>
              <ul className="list-disc pl-5 mt-5 space-y-4">
                <li>
                  Intelligent and complete automation of day-to-day activities
                  such as Attendance Tracking, Resource Allocations, Classroom
                  Assignments, Grading, and Calendar Management. Administrative
                  tasks such as Convocations/Placements.
                </li>
                <li>
                  Efficient usage of Staff Time for high-value-added after activities
                </li>
                <li>
                  Reports and Valuable insights, enabling decision-makers to
                  make informed choices quickly and efficiently.
                </li>
              </ul>
              <div>
                <a href={'https://adhyayn.com/'} target="_blank" rel="noopener noreferrer" className="text-primary underline flex items-center gap-1">
                  Know more <ExternalLink size={16} />
                </a>
              </div>
              {/* <h4 className="font-bold my-4">
                AI intelligence plays a pivotal role in intelligently and
                comprehensively automating day-to-day tasks of educational
                institutions, including Attendance Tracking, Resource
                Allocations, Classroom Assignments, Grading, and Calendar
                Management. It extends to administrative functions such as
                Convocations and Placements.{" "}
              </h4>
              <ul className="list-disc pl-5 mt-5 space-y-4">
                <li>
                  It optimizes the utilization of staff time, ensuring efficient
                  engagement in high-value-added activities.
                </li>
                <li>
                  AI AI-generated reports provide Valuable Insights,
                  facilitating decision-makers in making prompt and
                  well-informed choices.
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        {/* bg-overlay */}
        <div>
          <div className="absolute top-1/2 translate-y-[-50%] left-[0] w-[300px] h-[520px] bg-gradient-to-r rounded-tr-3xl rounded-br-3xl from-[#684FFF] to-[#7190FE] "></div>
        </div>
        {/* circle overlay */}
        <div className="absolute top-0 left-0">
          <div className="h-[700px] w-[700px] border-[1px] border-circle rounded-full"></div>
        </div>
        <div className="absolute top-[100px] left-[100px]">
          <div className="h-[500px] w-[500px] border-[1px] border-circle rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default OfferingsCardReverse;
