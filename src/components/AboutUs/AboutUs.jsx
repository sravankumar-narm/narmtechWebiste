import React from "react";
import AboutBg from "../../assets/brand/about.png";
import AboutMain from "../../assets/brand/about-main.png";
import Slider from "react-slick";
import GoalTestimonial from "./GoalTestimonial";
import Hand from "../../assets/brand/Hand.png";

const About = () => {
  const bgImg = {
    backgroundImage: `url(${AboutBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    minHeight: "1039px",
    width: "100%",
  };
  return (
    <>
      {/* <span id="about"></span> */}
      <section style={bgImg}>
        <div className="container-fluid my-10">
          <div className="min-h-[1050px] grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
            {/* Image section */}
            <div>
              <img
                src={Hand}
                alt=""
                className=" bg-[#6850FF] p-2 rounded-[50px] hover:bg-[#FC4E2B] lg:min-h-[750px]"
              />
            </div>
            {/* about text section */}
            <div className="  xl:gap-8  xl:w-[600px] ">
              <h1 className="text-3xl font-bold text-yellow mb-4 mx-3">
                About Us
              </h1>
              <p className="text-white leading-8 text-[18px] mx-3 text-justify">
                At <b>NARM Tech</b>, we specialize in <b>Generative AI</b>, developing smart AI-powered 
                solutions that enhance business efficiency. 
                Our expertise lies in creating <b>GenAI-based products</b> that simplify workflows, 
                improve user experiences, and seamlessly integrate AI into applications.
                Founded just two years ago, we are a fast-growing startup driven by a passion for AI and innovation. 
                Under the leadership of our <b>Founder & CEO, Ram M Reddy</b>, our dedicated team focuses on making technology more intuitive and impactful for businesses.
                At NARM Tech, we believe in making AI accessible—<b>shaping user experiences and simplifying efforts with Generative AI.
                Innovate. Automate. Elevate.</b>
              </p>
              <GoalTestimonial />
              {/* <div className="bg-white rounded-3xl p-6 mt-6 shadow-md">
                <h1 className="text-2xl font-bold text-secondary">Vision</h1>
                <p className="leading-8">
                  To transform the landscape of business operations through
                  state-of-the-art AI-powered software products.To equip
                  organizations with advanced data analytics, seamless
                  automation, and augmented decision- making capabilities. To
                  drive operational efficiency, agility, and strategic
                  innovation in businesses across diverse sectorsTo be the
                  catalyst for a new era of intelligent and data-driven business
                  operations
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
