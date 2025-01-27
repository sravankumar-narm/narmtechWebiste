import React from "react";
import Slider from "react-slick";
import Nyayah from "../../assets/offerings/nyayah.png";
import Adhyayn from "../../assets/offerings/Adhyayn.png";
import Quizifi from "../../assets/offerings/Quizifai3.png";

const testimonialData = [
  {
    id: 1,
    title: "Transforming ",
    title1: "Business Operations ",
    title2: "AI & LLM Empowered ",
    text: `NARM Tech delivers cutting-edge solutions to customers, leveraging the power of AI & ML,  LLM-driven Algorithms.seamless User Experience (UX), 
    and Intuitive User Interface (UI) to provide a truly transformative and user-friendly experience with unparalleled efficiency and effectiveness.`,
  },
  {
    id: 2,
    image: Nyayah,
    text3:
      "This powerful AI solution revolutionizes the Legal landscape by empowering Legal Practitioners and Law Firms with advanced automation and organization capabilities.",
  },
  {
    id: 3,
    image: Adhyayn,
    text3:
      "Our ADHYAYN empowers educational institutions through the integration of AI and LLM Model Technologies.",
  },
  {
    id: 4,
    image1: Quizifi,
    title3: "QuizifiAI",
    text4:
      "Our QuizifAI empowers organizations through the integration of AI-powered Quiz & Exam companions.",
  },
  {
    id: 5,
    title2: "Generative AI Internship Program",
    text: `Orientation: Intro to Generative AI, web app development, project planning & team setup.<br/>
          6-Week Development: Project mentorship & documentation guidance.<br/>
          Closing Ceremony: Project presentations, certificates, and feedback.`,
  }
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

const GoalTestimonial = () => {
  var settings = {
    dots: true,
    arrows: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      <div data-aos-duration="300" className="py-10 order-2 sm:order-1 space-y-8 2xl:relative 2xl:right-[55px]">
        <div className=" mx-auto ">
          {/* heading section */}
          {/* testimonial section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(
                ({
                  id,
                  title,
                  title1,
                  title2,
                  title3,
                  text,
                  text3,
                  text4,
                  image,
                  image1,
                }) => {
                  return (
                    <div key={id} className="order-2 sm:order-1 space-y-8 ">
                      <p className="text-4xl font-medium text-secondary">
                        {title} <br /> {title1}
                      </p>
                      <h1 className="text-3xl font-extrabold text-secondary">
                        {title2}
                      </h1>
                      {/* <p className="text-[18px] xl:w-[550px] 2xl:w-[559px] text-garySecondary">{text}</p> */}
                      <p className="text-[18px] xl:w-[550px] 2xl:w-[559px] text-garySecondary space-y-2">
                        {text && text.includes("<br/>") ? (
                          text.split("<br/>").map((line, index) => (
                            <span key={index} className="block">
                              <span className="text-primary text-lg">🔹</span> {line.trim()}
                            </span>
                          ))
                        ) : (
                          <span>{text}</span> // Render normally if no <br/> is found
                        )}
                      </p>
                      <div>
                        <img src={image} alt="" className="w-[350px]" />
                      </div>
                      <div className="2xl:w-[559px] xl:w-[409px]">
                        <p className="text-[18px]   text-garySecondary">{text3}</p>
                      </div>
                      <div className="flex flex-col relative bottom-[50px]">
                        <div>
                          <img src={image1} alt="" className="w-[350px]" />
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                          {/* <h1 className="text-3xl font-extrabold text-secondary">
                            {title3}
                          </h1> */}
                          <p className="text-[18px] 2xl:w-[559px] xl:w-[409px] text-garySecondary relative">{text4}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalTestimonial;
