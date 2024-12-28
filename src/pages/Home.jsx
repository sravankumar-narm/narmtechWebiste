import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Services2 from "../components/Services2/Services2";
import Team from "../components/Team/Team";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <main className="overflow-x-hidden bg-white text-black dark:bg-dark dark:text-white">
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Services />
        <Services2 />
        <Team />
        {/* <Testimonial /> */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
