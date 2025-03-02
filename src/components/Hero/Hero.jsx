import React from "react";
import HeroBg from "../../assets/brand/hero-texture.png";
import HeroRobot from "../../assets/brand/hi-robot_new.gif";
import Navbar from "../Navbar/Navbar";
import Slider from "react-slick";
import Hero1 from './Hero1'
import { Margin } from "@mui/icons-material";


const Hero = () => {
  const bgImg = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
    width: "100%",
  };
  return (
    <>
      <main style={bgImg}>
        <Navbar isHero={true} />
        {/* <div style={bgImg} className="sm:-mt-[70px] "> */}
        <div className="container-fluid lg:pr-24 xl:px-8">
          <div className="min-h-[550px] grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
            {/* Hero text section */}
            <Hero1 className="order-2 sm:order-1   "/>
            {/* <div className="order-2 sm:order-1 space-y-8 ">
              <p className="text-5xl font-medium text-secondary">
                Transforming  <br />Business Operations
              </p>
              <h1 className="text-4xl font-extrabold text-secondary">
                AI & L L M Empowered
              </h1>
              <p className="text-md  text-garySecondary">
                NarmTech delivers cutting-edge solutions to customers,
                leveraging the power of AI & ML, LLM-driven Algorithms.,
                seamless user experience (UX), and intuitive user interface (UI)
                to provide a truly transformative and user-friendly experience
                with unparalleled efficiency and effectiveness.
              </p>
            </div> */}
            {/* Hero Img section */}
            <div className="order-1 sm:order-2 relative ">
              <img
                src={HeroRobot}
                alt="robot"
                className="w-full xl:w-[75%] lg:-translate-y-12 xl:relative xl:right-[15px]"
              />
            </div>
          </div>
        </div>
        {/* </div> */}
       
      </main>
    </>
  );
};

export default Hero;
