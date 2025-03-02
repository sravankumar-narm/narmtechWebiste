import React from "react";
import BgImg from "../../assets/consulting/bg.png";
import Img1 from "../../assets/consulting/img1.png";

const ConsultingCard = ({ reverse = false, data }) => {
  console.log("data - ", data);
  console.log("Para - ", data.para);
  return (
    <>
      <div className="relative">
        <div
          className="container-fluid py-10 my-10 relative z-10 lg:pr-32 2xl:px-[200px]  "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
            {/* image section */}
            <div className={reverse ? "md:order-2" : "order-1"}>
              <img
                src={data.image}
                alt=""
                className="w-full md:max-w-[400px] mx-auto shadow-md border border-solid border-blue-200 rounded-lg"
              />
            </div>
            {/* text-content-section */}
            <div
              className={`space-y-8  ${reverse ? "md:order-1" : "order-2"}`}
            >
              <h1 className="text-3xl font-bold text-mainBlue">{data.title}</h1>
              <ul className="list-none  mt-5 space-y-7">
                {data.para.map((paragraph, index) => (
                  <li className="text-[#4E4E4E]">{paragraph}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* bg-overlay */}
        <div
          className={`absolute top-0 ${
            reverse ? "right-0 scale-x-[-1]" : "left-0"
          } `}
        >
          <img src={BgImg} alt="" className="w-full h-[600px]" />
        </div>
      </div>
    </>
  );
};

export default ConsultingCard;
