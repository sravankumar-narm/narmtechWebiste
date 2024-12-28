import React from "react";
import quizifAI from "../../assets/offerings/quizifAI.png";
import { useNavigate } from "react-router-dom";

const OfferingsCardReverseAgri = ({ Image }) => {
  const navigate = useNavigate();

  const handleAgri = () => {
    navigate("/Agri");
  };
  return (
    <>
      <div className="relative py-4">
        <div className="container lg:px-14 min-h-[700px] grid place-items-center relative z-10">
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
            <div className="order-2 lg:order-1 mt-20 flex flex-col items-center gap-5 lg:translate-x-[50px]">
              <div className="  md:min-w-[700px] lg:min-w-[500px] xl:min-w-[550px] mx-auto bg-white rounded-[50px] border-[1px] border-darkBlue shadow-md place-items-center grid md:grid-flow-col gap-10 p-5">
                <img src={Image} alt="" />
                <div className="grid gap-5 items-center ">
                  <div className="flex justify-center  items-center text-center break-words text-sm bg-orange font-bold shadow-md rounded-3xl p-2 md:py-6">
                    <div className="flex justify-center leading-[16.62px] flex-col items-center text-[14px] text-center">
                      Crop Assistance
                      <div className="flex justify-center leading-[18px]  text-[12px] md:w-[140px] text-center break-words p-2 font-normal">
                        {" "}
                        Crop assistance and recommendation tool for Farmers.
                      </div>
                    </div>
                  </div>
                  {/* <div className="md:w-[130px] h-1 bg-[#B6B2B2] absolute -ml-8  "></div>
                  <div className="md:w-[20px] h-1 bg-[#FFCA77] rounded-full absolute rotate-90 ml-[37px] mb-7"></div>
                  <div className="md:w-[15px] h-[15px] bg-[#FFCA77] rounded-full absolute rotate-90 ml-[40px]"></div>
                  <div className="md:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute rotate-90 ml-[43px]"></div>
                  <div className="md:w-[20px] h-1 bg-[#FCE7E7] rounded-full absolute rotate-90 ml-[88px] mt-7"></div>
                  <div className="md:w-[15px] h-[15px] bg-[#FCE7E7] rounded-full absolute rotate-90 ml-[90px]"></div>
                  <div className="md:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute rotate-90 ml-[93px]"></div> */}

                  <div className="flex justify-center  flex-col items-center  text-center break-words text-sm bg-pink shadow-md rounded-3xl p-2 md:py-6">
                    <div className="flex justify-center leading-[16.62px] text-[14px] flex-col items-center  text-center font-bold">
                      Market Assistance
                      <div className="flex justify-center leading-[18px]  text-[12px] md:w-[140px] text-center break-words p-2 font-normal">
                        Marketing assistance and buyer connects to Farmers.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex gap-5 items-center">
                  <div className="flex justify-center items-center text-[10px] w-[220px] h-[50px] text-center break-words p-1">
                    Crop assistance and recommendation tool for Farmers.
                  </div>
                  <div className="flex justify-center items-center text-[10px] w-[220px] h-[50px] text-center break-words p-1">
                    Marketing assistance and buyer connects to farmers.
                  </div>
                </div> */}
              </div>
              {/* <button
                className="primary-btn px-10 mt-8 rounded-full lg:ml-20 2xl:ml-32"
                id="moreDetailsText3"
                onClick={handleAgri}
              >
                More Details
              </button> */}
            </div>

            {/* first col */}
            <div className="order-1 lg:order-2 lg:col-span-2 lg:pl-40 bg-creamWhite text-black/70 px-10 py-20 rounded-3xl">
              <h1 className="text-5xl font-bold mb-4">Agriculture</h1>
              <h1 className="text-2xl font-bold mb-4">
                VYAVASAYAH 
              </h1>
              {/* <p className="leading-10">
                Our ADHYAYN empowers educational institutions through the
                integration of AI and LLM Model Technologies.
              </p> */}
              <h4 className=" font-medium my-4">
                AI-powered Agriculture Life Cycle Operations Management
                Application empowers Farmers. This AI-powered application offers
                a comprehensive suite of tools and functionalities to manage the
                entire agriculture life cycle. It covers activities such as Crop
                Planning, Planting, Irrigation, Fertilization, Pest Control,
                Harvesting, and Post-Harvest Management, facilitates optimal
                Farmer-market connections,and maximizes profitability and
                Agriculture Industry.{" "}
              </h4>
              <ul className="list-disc pl-5 mt-5 space-y-4">
                <li>
                  Recommendations on Crop Selection and Optimized Utilization of
                  resources such as Land, Water, Fertilizers, and Labor.
                </li>
                <li>
                  Facilitates seamless connections between Farmers and
                  Agriculture markets.
                </li>
                <li>Informed decisions about market demand and supply.</li>
                <li>
                  Facilitates seamless connections between farmers and
                  agriculture markets, ensuring direct access to Potential
                  buyers, Distributors, and Retailers.
                </li>
                <li>
                  Enables Farmers to showcase their products, negotiate prices,
                  and make informed decisions about market demand and supply.
                </li>
              </ul>
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

export default OfferingsCardReverseAgri;
