import React from "react";
import Img1 from "../../assets/offerings/nyayah.png";
import { useNavigate } from "react-router-dom";

const OfferingsCardIT = ({ Image }) => {
  const navigate = useNavigate();

  const handleIT = () => {
    navigate("/IT");
  };
  return (
    <>
      <div className="relative py-4">
        <div className="container lg:px-14 min-h-[700px] grid place-items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center relative">
            {/* first col */}
            <div className="lg:col-span-2 lg:pr-64 xl:pr-40 bg-creamWhite text-black/70 px-10 py-20 rounded-3xl">
              <h1 className="text-5xl font-bold mb-4">IT Infrastructure</h1>
              <h1 className="text-2xl font-bold mb-4">
                VYAYAH 
              </h1>
              {/* <p className="leading-7">
                Leveraging AI and analytics, the product analyzes usage
                patterns, performance metrics, and cost data to provide
                cost-effective recommendations. These recommendations help
                organizations optimize their IT spending, identify cost-saving
                opportunities, and align their resources with business needs.
              </p> */}
              <h4 className=" font-medium my-4">
                Leveraging AI and Analytics, the product analyzes usage
                Patterns, Performance metrics, and cost data to provide
                cost-effective recommendations. These recommendations help
                organizations optimize their IT spending, identify cost-saving
                opportunities, and align their resources with business needs.{" "}
              </h4>
              <ul className="list-disc pl-5 mt-5 space-y-4">
                <li>
                  Continuous recommendations of resource optimization for cost
                  and performance.
                </li>
                <li>Recommendation on IT investments.</li>
                <li>
                  Comprehensive insights and control over the IT infrastructure.
                </li>
                <li>
                  Integrated Command Center with advanced analytics and
                  monitoring of infrastructure.
                </li>
                <li>Intelligent Forecasting and Alerts.</li>
              </ul>
            </div>
            {/* second col */}
            <div className="mt-20 flex flex-col items-center gap-5 lg:translate-x-[-90px] xl:translate-x-[-50px]">
              <div className=" lg:w-[580px] gap-2 mx-auto bg-white rounded-[50px] border-[1px] border-darkBlue shadow-md grid md:grid-cols-3 place-items-center p-5">
                <img src={Image} alt="" className="md:row-span-4" />

                <div className=" md:grid gap-5 items-center md:col-span-2   ">
                  <div className="flex justify-center  flex-col items-center  text-center break-words text-sm bg-green shadow-md rounded-3xl p-2 md:py-6 md:px-6 ">
                    <div className="flex justify-center leading-[16.62px] flex-col items-center  text-[14px]  text-center font-bold ">
                      CloudCost
                      <div className="flex justify-center leading-[18px]  text-[12px]  md:w-[122px] text-center break-words p-2 font-medium">
                        Cost comparison tool between multiple cloud environments
                        and On-premise infra.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className=" md:row-span-2 md:col-span-2">
                  <div className="md:w-[250px] h-1 bg-[#B6B2B2] absolute -ml-[165px]  "></div>
                  <div className="md:w-[30px] h-1 bg-green rounded-full absolute rotate-90 -ml-[11px] -mt-4 "></div>
                  <div className="md:w-[15px] h-[15px] bg-green rounded-full absolute -ml-[4px] -mt-1"></div>
                  <div className="md:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute   -mt-[0.4px]"></div>
                  <div className="md:w-[25px] h-1 bg-[#FFCA77] rounded-full absolute rotate-90 ml-[74px] mt-3 "></div>
                  <div className="md:w-[15px] h-[15px] bg-[#FFCA77] rounded-full absolute rotate-90 ml-[79px] -mt-1"></div>
                  <div className="md:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute rotate-90 ml-[83px] -mt-[0.4px]"></div>
                  <div className="md:w-[25px] h-1 bg-[#FCE7E7] rounded-full absolute rotate-90 -ml-[100px] mt-3"></div>
                  <div className="md:w-[15px] h-[15px] bg-[#FCE7E7] rounded-full absolute rotate-90 -ml-[95px] -mt-1"></div>
                  <div className="md:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute rotate-90 -ml-[91.5px] -mt-[0.4px]"></div>
                </div> */}
                <div className="grid gap-4 md:flex md:col-span-2 mt-2">
                  <div className="flex justify-center  flex-col items-center  text-center break-words text-sm bg-pink shadow-md rounded-3xl p-2  md:py-6 ">
                    <div className="flex justify-center text-[14px] leading-[16.62px] flex-col items-center text-center font-bold">
                      IT Infra Recommendation
                      <div className="flex justify-center leading-[18px]  text-[12px]  md:w-[140px] text-center break-words p-2 font-normal">
                        AI recommendations tool for Enterprises on Cloud and
                        Hybrid IT infrastructures.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center leading-3 flex-col items-center text-center break-words text-sm bg-orange font-bold shadow-md rounded-3xl p-2 md:py-6 ">
                    <div className="flex justify-center leading-[16.62px] flex-col text-[14px] items-center text-center">
                      IT Infra Monitoring
                      <div className="flex justify-center leading-[18px]  text-[12px] md:w-[140px]  xl:w-[105px] text-center break-words p-2 font-normal">
                        Integrated IT infrastructure monitoring tool for
                        Enterprises.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex gap-5 items-center">
                  <div className="flex justify-center items-center text-[10px] w-[140px] h-[50px] text-center break-words p-1">
                    Cost comparison tool between multiple cloud environments and
                    On-premise infra.
                  </div>
                  <div className="flex justify-center items-center text-[10px] w-[140px] h-[50px] text-center break-words p-1">
                    AI recommendations tool for Enterprises on Cloud and Hybrid
                    IT infrastructures.
                  </div>
                  <div className="flex justify-center items-center text-[10px] w-[140px] h-[50px] text-center break-words p-1">
                    Integrated IT infrastructure monitoring tool for
                    Enterprises.
                  </div>
                </div> */}
              </div>
              {/* <button
                className="primary-btn px-10 mt-8 rounded-full lg:mr-20 2xl:mr-32 "
                id="moreDetailsText1"
                onClick={handleIT}
              >
                More Details
              </button> */}
            </div>
          </div>
        </div>
        {/* bg-overlay */}
        <div>
          <div className="absolute top-1/2 translate-y-[-50%] right-[0] w-[300px] h-[520px] bg-gradient-to-r rounded-tl-3xl rounded-bl-3xl from-[#684FFF] to-[#7190FE] "></div>
        </div>
        {/* circle overlay */}
        <div className="absolute top-0 right-0">
          <div className="h-[700px] w-[700px] border-[1px] border-circle rounded-full"></div>
        </div>
        <div className="absolute top-[100px] right-[100px]">
          <div className="h-[500px] w-[500px] border-[1px] border-circle rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default OfferingsCardIT;
