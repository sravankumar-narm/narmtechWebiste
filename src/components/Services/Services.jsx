import React from "react";
import Icon1 from "../../assets/icons/icon1.png";
import Icon2 from "../../assets/icons/icon2.png";
import Icon3 from "../../assets/icons/icon3.png";
import { useNavigate } from "react-router-dom";

const Features = [
  {
    id: 1,
    icon: Icon1,
    heading: "Powerful AI/ML solutions",
    text: `Pioneering solutions to customers.
    Unparalleled efficiency and effectiveness.
    Enhancing decision-making processes with insightful, data-driven precision.`,
  },
  {
    id: 2,
    icon: Icon2,
    heading: "User Friendly",
    text: `Experience unparalleled convenience and satisfaction with NarmTech's user-friendly products and services, designed to effortlessly meet the needs of every user.`,
  },
  {
    id: 3,
    icon: Icon3,
    heading: "Integrated Platform",
    text1: `Experience a cohesive environment where AI/ML, and LLMs seamlessly work together, creating an integrated platform that delivers a holistic and efficient user experience.`,
  },
];
const Services = () => {
  const navigate = useNavigate();

  const navigateToOffering = () => {
    navigate("/offerings");
  };
  return (
    <>
      <section className="py-12">
        <div className="container space-y-8">
          {/* heading section */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-secondary">
              Explore Premium Features
            </h1>
            <h1 className="text-3xl font-bold text-secondary">
              Our AI Powered Products for Business Operations
            </h1>
            <p className="lg:w-[590px] mx-auto mt-6 text-[#4E4E4E]">
              Unique and powerful suite of software to run your entire
              business, <br />brought to you by us with the long term vision to
              transform the way you work.
            </p>
          </div>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {Features.map(({ id, icon, heading, text,text1 }) => (
              <div
                key={id}
                className="rounded-xl hover:bg-lightBlue px-5 py-9 space-y-2
                 shadow-md hover:shadow-lg"
              >
                <img src={icon} alt="" className="w-12 h-12" />
                {/* text section */}
                <div className="space-y-2">
                  <h1 className="text-2xl font-semibold">{heading}</h1>
                  <p className="text-[#4E4E4E]">{text}</p>
                  <p className="text-[#4E4E4E] 2xl:w-[399px]">{text1}</p>

                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn" onClick={navigateToOffering}>Read More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
