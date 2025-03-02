import React from "react";
import BgImg from "../../assets/consulting/bg.png";
import Img1 from "../../assets/offerings/nyayah-logo.png";

const BgStyle = {
  backgroundImage: `url(${BgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "left",
  height: "100%",
  width: "100%",
};

const Legal = ({ reverse = false }) => {
  return (
    <>
      <div className="relative">
        <div className="container py-10 my-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {/* image section */}
            <div className={`${reverse} ? "md:order-2" : "order-1" bg-white rounded-lg border border-solid border-[#855CFF]`}>
              <img
                src={Img1}
                alt=""
                className="w-full md:max-w-[480px] mx-auto shadow-md"
              />
            </div>
            {/* text-content-section */}
            <div className={`space-y-4 ${reverse ? "md:order-1" : "order-2"}`}>
              <h1 className="text-4xl font-bold">Legal</h1>
              {/* <p className="leading-7">
                This powerful solution revolutionizes the legal landscapeby
                empowering legal practitioners and law firms with advanced
                automation and organization capabilities. <br />
                By seamlessly handling their day-to-day operations, streamlining
                data management, and organizing critical documentation, this
                software acts as a catalyst for enhanced efficiency in legal
                processes
              </p>
              <ul className="list-disc pl-5 mt-5 space-y-4">
                <li>
                  Data Strategy: Providing guidance and planning for effective
                  data utilization and management.
                </li>
                <li>
                  Data Management Capability Consulting: Assisting organizations
                  in improving their data management capabilities.
                </li>
                <li>
                  Data Platform Consulting, Solution Design, And PoC: offering
                  expertise in designing And implementing data platforms, along
                  with conducting Proof of Concepts.
                </li>
                <li>
                  BI Consulting: Providing consulting services for business
                  intelligence, including data visualization and reporting.
                </li>
                <li>
                  Data Science Consulting: Offering expertise in leveraging data
                  science techniques and methodologies for business insights.
                </li>
              </ul> */}
              <h1 className="text-2xl font-bold mb-4">
                NYAYAH
              </h1>
              <p className="leading-7">
                This powerful AI solution revolutionizes the legal landscape by
                empowering legal practitioners and law firms with advanced
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
                  Quick and efficient generation of legal Forms and Documents.
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

export default Legal;
