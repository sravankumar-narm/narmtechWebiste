import React from "react";
import BgImg from "../../assets/consulting/bg.png";
import Img1 from "../../assets/offerings/Adhyayn1.png";

const BgStyle = {
  backgroundImage: `url(${BgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "left",
  height: "100%",
  width: "100%",
};

const Edu = ({ reverse = false }) => {
  return (
    <>
      <div className="relative">
        <div className="container py-10 my-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {/* image section */}
            {/* <div className="  h-[350px] w-[450px] mx-auto bg-white rounded-[20px]  border-[1px] border-darkBlue shadow-md grid place-items-center"> */}
            <div
              className={`${reverse} ? "md:order-2" : "order-1" bg-white rounded-lg`}
            >
              <img
                src={Img1}
                alt=""
                className="w-[450px]  md:max-w-[480px] mx-auto shadow-md border  border-solid border-[#855CFF] rounded-lg "
              />
            </div>

            {/* text-content-section */}
            <div className={`space-y-4 ${reverse ? "md:order-1" : "order-2"}`}>
              <h1 className="text-4xl font-bold">Education</h1>

              <h1 className="text-2xl font-bold mb-4">
                ADHYAYN (Launching on Nov 2024)
              </h1>
              <p className="leading-10">
                Our ADHYAYN empowers educational institutions through the
                integration of AI and LLM Model Technologies.
              </p>
              <h4 className="font-bold my-4">
                AI intelligence is extensively applied in the following.{" "}
              </h4>
              <ul className="list-disc pl-5 mt-5 space-y-4">
                <li>
                  Intelligent and complete automation of day-to-day activities
                  such as Attendance Tracking, Resource allocations, Classroom
                  Assignments, Grading, and calendar management. Administrative
                  tasks such as Convocations/Placements.
                </li>
                <li>
                  Efficient usage of Staff Time for high-value-added activities
                </li>
                <li>
                  Reports and Valuable insights, enabling decision-makers to
                  make informed choices quickly and efficiently.
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

export default Edu;
