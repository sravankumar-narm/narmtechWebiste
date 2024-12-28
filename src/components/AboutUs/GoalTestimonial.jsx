import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    title: "Vision",
    text: `To transform the landscape of business operations through state-of-the-art AI-powered software products.
     To equip organizations with advanced data analytics, seamless automation, and augmented decision- making capabilities.
     To drive operational efficiency, agility, and strategic innovation in businesses across diverse sectors.
     `,
  },
  {
    id: 2,
    title1: "Mission",
    text1: "Transforming business operations with AI-powered software, enabling advanced analytics, automation, and augmented decision-making. Driving operational efficiency, strategic innovation, and intelligence for businesses, ushering in a new era of data-driven operations.",
  },
  {
    id: 3,
    title1: "Values",
    text1: "Excellence is our standard the growth and well-being of our team members is our priority. We embrace innovation, encourage open debate, and strive for big dreams while fostering teamwork to achieve success.",
  },
];

const GoalTestimonial = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos-duration="300" className="py-1">
        <div className=" mx-auto">
          {/* heading section */}
          {/* testimonial section */}
          <div className="grid grid-cols-1   gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, title, text, title1, text1 }) => {
                return (
                  <div
                    key={id}
                    className="bg-white rounded-3xl p-6 mt-6 min-h-[400px]  shadow-md xl:h-[370px]  2xl:min-h-[400px] items-center justify-center "
                  >
                    <h1 className="text-2xl font-bold text-secondary mt-16">
                      {title}
                    </h1>
                    <p className="leading-8 2xl:leading-10  text-[18px] xl:max-w-[500px] 2xl:max-w-[500px]">
                      {text}
                    </p>
                    <h1 className="text-2xl font-bold text-secondary mt-16 ">
                      {title1}
                    </h1>
                    <p className="leading-8 2xl:leading-10  text-[18px]  xl:max-w-[500px] 2xl:max-w-[500px]">
                      {text1}
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalTestimonial;
