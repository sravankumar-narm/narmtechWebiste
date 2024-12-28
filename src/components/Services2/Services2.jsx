import React from "react";
import Icon1 from "../../assets/cards/Icon1.png";
import Icon2 from "../../assets/cards/Icon2.png";
import Icon3 from "../../assets/cards/Icon3.png";
import { useNavigate } from "react-router-dom";

const CardsData = [
  {
    id: 1,
    icon: Icon1,
    heading: "AI & LLM powered SAAS products",
    heading1: "(Web, iOS, and Android APPs)",
    text: `Web Applications Development, Mobile Applications Development [Android & iOS], Empowering applications with AI & LLM capability. `,

    //  text: `Web Applications Development.`,
    // text1: `Mobile Applications Development`,
    // text2:`[Android & iOS]`,
    //  text3: `Empowering applications with AI & LLM capability`,
    // foot: `Learn more (AI & LLM)`,
  },
  {
    id: 2,
    icon: Icon2,
    heading: "UI and UX Services",
    text:`High-fidelity UX Design, Prototyping, Enhancing visual appearance and User experience of Web & Mobile Applications`,
    // text: `High-fidelity UX Design, Prototyping `,
    // text1: `Enhancing visual appearance and`,
    // text2: ` User experience of Web & Mobile Applications`,
    // foot: `Learn more (UI & UX)`,
  },
  {
    id: 3,
    icon: Icon3,
    heading: "Cloud Solutions Consulting",
    text:`Scalable and Cost-optimized Cloud Solutions
    Hybrid Cloud Platform & Infrastructure designs
    Cloud Migration and Adoption strategies.`,
    // text: `Scalable and Cost-optimized Cloud Solutions.`,
    // text1: `Hybrid Cloud Platform & Infrastructure designs`,
    // text2: `Cloud Migration and Adoption strategies`,
    // foot: `Learn more (Cloud & Sols)`,
  },
];
const Services2 = () => {
  const navigate = useNavigate();

  const navigateToConsulting = () => {
    navigate("/consulting");
  };
  return (
    <>
      <section className="py-12">
        <div className="container space-y-8">
          {/* heading section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold  lg:w-[500px] mx-auto">
              Powerful Consulting to boost your Productivity
            </h1>
          </div>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {CardsData.map(
              ({ id, icon, heading, heading1, text, text1, text2,text3 }) => (
                <div
                  key={id}
                  className="rounded-xl hover:bg-lightBlue px-5 py-9 space-y-4 shadow-md hover:shadow-lg "
                >
                  <img
                    src={icon}
                    alt=""
                    className="w-full mix-blend-multiply"
                  />
                  {/* text section */}
                  <div className="space-y-2 ">
                    <h1 className="text-xl font-bold lg:text-sm text-center">
                      {heading} <br />
                      {heading1}
                    </h1>
                    <p className="text-[#797979] text-base leading-8 text-center 2xl:w-[383px]">
                      {text} <br />
                      {text1} <br />
                      {text2} <br />
                      {text3}
                    </p>
                  </div>
                  <div className="text-center">
                    {/* <button
                      href="#"
                      className="underline font-semibold text-[#444444]"
                      onClick={navigateToConsulting}
                    >
                      {" "}
                      {foot}
                    </button> */}
                  </div>
                </div>
              )
            )}
          </div>
          <div className=" flex justify-center items-center">
            <button className="primary-btn rounded-full"  onClick={navigateToConsulting}> Learn more</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services2;
