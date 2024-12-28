import React from "react";
import { useNavigate } from "react-router-dom";

const OfferingsCard = ({ Image }) => {
  const navigate = useNavigate();

  const handleLegal = () => {
    navigate("/legal");
  };
  return (
    <>
      <div className="relative py-2">
        <div className="container lg:px-14 min-h-[700px] grid place-items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center relative">
            {/* first col */}
            <div className="lg:col-span-2 xl:pr-40 lg:pr-60 bg-creamWhite text-black/70 px-10 py-20 rounded-3xl">
              <h1 className="text-5xl font-bold mb-4">Legal</h1>
              <h1 className="text-2xl font-bold mb-4">
                NYAYAH (Launching on Nov 2024)
              </h1>
              <p className="leading-7 font-medium">
                This powerful AI solution revolutionizes the Legal landscape by
                empowering Legal Practitioners and Law Firms with advanced
                automation and organization capabilities.
              </p>
              <h4 className="font-bold my-4">
                AI intelligence is extensively applied in the following.{" "}
              </h4>
              <ul className="list-disc pl-5 mt-5 space-y-4">
                <li>
                  Lifecycle Management of Legal cases, handling day-to-day
                  operations.
                </li>
                <li>
                  Documents Verification and Creating Insights and reports.
                </li>
                <li>
                  Quick and efficient generation of Legal Forms and Documents.
                </li>
                <li>
                  Recommendations concerning Statutes, also Validations, and
                  Intelligent Citations.
                </li>
              </ul>
              {/* <p className="leading-7">
                Holistic Legal Solutions for Precision and Compliance: Embrace a
                holistic approach to legal practice with our app, providing a
                comprehensive suite of tools for precise legal management.
                Ensure compliance, receive intelligent recommendations, and
                fortify your legal strategies with confidence.
              </p> */}
              {/* <h4 className="font-bold my-4">
                Holistic Legal Solutions for Precision and Compliance: Embrace a
                holistic approach to legal practice with our app, providing a
                comprehensive suite of tools for precise legal management.
                Ensure compliance, receive intelligent recommendations, and
                fortify your legal strategies with confidence.{" "}
              </h4>
              <ul className="list-disc pl-5 mt-5 space-y-4">
                <li>Streamlined Legal Case Management.</li>
                <li>Robust Documents Verification and Insightful Reporting.</li>
                <li>Effortless Form and Document Generation.</li>
                <li>Informed Decision-Making with Recommendations.</li>
              </ul> */}
            </div>
            {/* second col */}
            <div className="mt-20 flex flex-col  items-center gap-5 lg:translate-x-[-90px] xl:translate-x-[-50px]">
              <div className="mx-auto bg-white rounded-[50px] border-[1px] border-darkBlue shadow-md grid place-items-center p-5 py-10 gap-8">
                <img src={Image} alt="" className="" />
                {/* <div className="md:w-[450px] lg:w-[420px] h-1 bg-[#B6B2B2] absolute lg:mb-28 md:mb-14  "></div>
                <div className="md:w-[35px] lg:w-[40px] h-1 bg-green rounded-full absolute rotate-90 lg:-ml-[420px] lg:-mt-20 md:-mt-8 md:-ml-[450px]    "></div>
                <div className="md:w-[15px] lg:w-[15px] h-[15px] bg-green rounded-full absolute lg:-ml-[420px]   lg:mb-28 md:mb-14 md:-ml-[450px] "></div>
                <div className="md:w-[8px] lg:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute lg:-ml-[420px] lg:mb-28 md:mb-14 md:-ml-[450px]"></div>
                <div className="md:w-[40px] lg:w-[40px] h-1 bg-pink rounded-full absolute rotate-90 lg:-ml-[140px] md:-ml-[110px] lg:-mt-20 md:-mt-6"></div>
                <div className="md:w-[15px] lg:w-[15px] h-[15px] bg-pink rounded-full absolute rotate-90 lg:-ml-[140px] md:-ml-[110px] md:mb-14 lg:mb-28"></div>
                <div className="md:w-[8px] lg:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute rotate-90 lg:-ml-[140px] md:-ml-[110px] md:mb-14 lg:mb-28 "></div>
                <div className="md:w-[40px] lg:w-[40px] h-1 bg-[#FFCA77] rounded-full absolute rotate-90 lg:ml-[140px] md:ml-[200px] lg:-mt-20 md:-mt-6  "></div>
                <div className="md:w-[15px] lg:w-[15px] h-[15px] bg-[#FFCA77] rounded-full absolute rotate-90 lg:ml-[140px] md:ml-[200px] md:mb-14 lg:mb-28 "></div>
                <div className="md:w-[8px] lg:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute rotate-90 lg:ml-[140px]  md:ml-[200px] md:mb-14 lg:mb-28"></div>
                <div className="md:w-[40px] lg:w-[40px] h-1 bg-lightBlue  rounded-full absolute rotate-90 lg:ml-[420px] md:ml-[450px] lg:-mt-20 md:-mt-6 "></div>
                <div className="md:w-[15px] lg:w-[15px] h-[15px] bg-lightBlue  rounded-full absolute rotate-90 lg:ml-[420px] md:ml-[450px] md:mb-14 lg:mb-28  "></div>
                <div className="md:w-[8px]  lg:w-[8px] h-[8px] bg-[#B6B2B2] rounded-full absolute rotate-90 lg:ml-[421px] md:ml-[450px] md:mb-14 lg:mb-28"></div> */}
                <div className=" grid md:flex lg:flex gap-3 ">
                  <div className="flex justify-center flex-col items-center  text-center break-words text-sm bg-green shadow-md rounded-3xl p-2   lg:py-6  ">
                    <div className="flex justify-center leading-[16.62px] flex-col items-center  text-[14px]  text-center font-bold ">
                      Legal Documentation
                      <div className="flex justify-center leading-[18px]  text-[12px] text-center md:w-[110px]  break-words p-2 font-medium">
                        Document Management for Legal Firms and Advocates.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center  flex-col items-center  text-center break-words text-sm bg-pink shadow-md rounded-3xl p-2 lg:py-6  ">
                    <div className="flex justify-center text-[14px] leading-[16.62px] flex-col items-center  text-center font-bold">
                      Intelligent Citations
                      <div className="flex justify-center leading-[18px]  text-[12px] text-center  md:w-[110px]   break-words p-2 font-medium">
                        Citation References for Legal Firms and Advocates.
                      </div>
                    </div>
                  </div>
                 
                  <div className="flex justify-center leading-3 flex-col items-center  text-center break-words text-sm bg-orange font-bold shadow-md rounded-3xl p-2 lg:py-6">
                    <div className="flex justify-center leading-[16.62px] flex-col text-[14px] items-center text-center ">
                      Corporate Legal
                      <div className="flex justify-center leading-[18px]  text-[12px] text-center  md:w-[110px] break-words p-2 font-medium">
                        Legal and compliance solutions for corporates.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center leading-3 flex-col items-center text-center break-words text-sm bg-lightBlue font-bold shadow-md rounded-3xl p-2 lg:py-6 ">
                    <div className="flex justify-center leading-[16.62px] flex-col text-[14px] items-center  text-center ">
                      Legal Assistance
                      <div className="flex justify-center leading-[18px]  text-[12px] text-center md:w-[110px] break-words p-2  font-medium">
                        Assistance to the common public on Legal issues.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex gap-5 items-center">
                  <div className="flex justify-center items-center text-[10px] w-[100px] text-center break-words p-1">
                    Document Management for Legal Firms and Advocates.
                  </div>
                  <div className="flex justify-center items-center text-[10px] w-[100px] text-center break-words p-1">
                    Citation References for Legal Firms and Advocates.
                  </div>
                  <div className="flex justify-center items-center text-[10px] w-[100px] text-center break-words p-1">
                    Legal and compliance solutions for corporates.
                  </div>
                  <div className="flex justify-center items-center text-[10px] w-[100px] text-center break-words p-1">
                    Assistance to the common public on legal issues.
                  </div>
                </div> */}
              </div>
              {/* <button
                className="primary-btn px-10 mt-8 rounded-full lg:mr-20 2xl:mr-32 "
                id="moreDetailsText"
                onClick={handleLegal}
              >
                More Details{" "}
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

export default OfferingsCard;
