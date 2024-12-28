import React from "react";
import BgImg from "../../assets/consulting/bg.png";
import Img1 from "../../assets/offerings/vyayah1.png";

const BgStyle = {
  backgroundImage: `url(${BgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "left",
  height: "100%",
  width: "100%",
};

const IT = ({ reverse = false }) => {
  return (
    <>
      <div className="relative">
        <div className="container py-10 my-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {/* image section */}
            <div className="rounded-xl bg-white px-5 py-9 space-y-4 shadow-md border border-solid border-[#855CFF] ">
              <div className={`${reverse} ? "md:order-2" : "order-1"`}>
                <img
                  src={Img1}
                  alt=""
                  className="w-full p-10  md:max-w-[480px] mx-auto "
                />
              </div>
            </div>
            {/* text-content-section */}
            <div className={`space-y-4 ${reverse ? "md:order-1" : "order-2"}`}>
              <h1 className="text-4xl font-bold">IT Infrastructure</h1>

              <h1 className="text-2xl font-bold mb-4">
                VYAYAH (Launching on Nov 2024)
              </h1>

              <h4 className="font-bold my-4">
                Leveraging AI and analytics, the product analyzes usage
                patterns, performance metrics, and cost data to provide
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

export default IT;
