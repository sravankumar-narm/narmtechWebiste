import React from "react";
import BgImg from "../../assets/consulting/bg.png";
import Img1 from "../../assets/offerings/vyavasayah.png";

const BgStyle = {
  backgroundImage: `url(${BgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "left",
  height: "100%",
  width: "100%",
};

const Agri = ({ reverse = false }) => {
  return (
    <>
      <div className="relative">
        <div className="container-fluid py-10 my-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {/* image section */}
            <div className="rounded-xl bg-white px-5 py-9 space-y-4 shadow-md border border-solid border-[#855CFF] ">
              <div className={`${reverse} ? "md:order-2" : "order-1"`}>
                <img
                  src={Img1}
                  alt=""
                  className="w-full md:max-w-[480px] mx-auto "
                />
              </div>
            </div>
            {/* text-content-section */}
            <div className={`space-y-4 ${reverse ? "md:order-1" : "order-2"}`}>
              <h1 className="text-4xl font-bold">Agriculture</h1>

              <h1 className="text-2xl font-bold mb-4">
                VYAVASAYAH (Launching on May 2025)
              </h1>

              <h4 className="font-semibold my-4 ">
                AI-powered Agriculture Life Cycle Operations Management
                Application empowers farmers. This AI-powered application offers
                a comprehensive suite of tools and functionalities to manage the
                entire agriculture life cycle. It covers activities such as crop
                planning, planting, irrigation, fertilization, pest control,
                harvesting, and post-harvest management, facilitates optimal
                farmer-market connections, and maximizes profitability in the
                agricultural industry.{" "}
              </h4>
              <ul className="list-disc pl-5 mt-5 space-y-4">
                <li>
                  Recommendations on Crop Selection and Optimized Utilization of
                  resources such as land, water, fertilizers, and labor.
                </li>
                <li>
                  Facilitates seamless connections between farmers and
                  agriculture markets
                </li>
                <li>Informed decisions about market demand and supply.</li>
                <li>
                  Facilitates seamless connections between farmers and
                  agriculture markets, ensuring direct access to potential
                  buyers, distributors, and retailers.
                </li>
                <li>
                  Enables farmers to showcase their products, negotiate prices,
                  and make informed decisions about market demand and supply.
                </li>
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

export default Agri;
