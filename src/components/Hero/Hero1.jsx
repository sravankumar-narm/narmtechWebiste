import React from "react";
import Slider from "react-slick";
import { ExternalLink } from "lucide-react";
import Nyayah from "../../assets/offerings/nyayah.png";
import Adhyayn from "../../assets/offerings/Adhyayn.png";
import Quizifi from "../../assets/offerings/Quizifai3.png";

const testimonialData = [
  {
    id: 1,
    image1: Quizifi,
    title3: "QuizifiAI",
    text4:
      "Our QuizifAI empowers organizations through the integration of AI-powered Quiz & Exam companions.",
    url: "https://quizifai.com"
  },
  {
    id: 2,
    title: "Transforming ",
    title1: "Business Operations ",
    title2: "AI & LLM Empowered ",
    text: `NARM Tech delivers cutting-edge solutions to customers, leveraging the power of AI & ML,  LLM-driven Algorithms.seamless User Experience (UX), 
    and Intuitive User Interface (UI) to provide a truly transformative and user-friendly experience with unparalleled efficiency and effectiveness.`,
  },
  {
    id: 3,
    image1: Nyayah,
    text4:
      "This powerful AI solution revolutionizes the Legal landscape by empowering Legal Practitioners and Law Firms with advanced automation and organization capabilities.",
  },
  {
    id: 4,
    image1: Adhyayn,
    text4:
      "Our ADHYAYN empowers educational institutions through the integration of AI and LLM Model Technologies.",
    url: "https://adhyayn.com"
  },
  {
    id: 5,
    title2: "GenAI Internship Program",
    text: `An immersive internship program centered on advanced IT skills, emphasizing Generative AI (GenAI) and its application in addressing real-world challenges through the development of GenAI-powered solutions.`,
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
                  url
                }) => {
                  return (
                    <div key={id} className="order-2 sm:order-1 space-y-8 ">
                      {title && <p className="text-4xl font-medium text-secondary">{title} <br /> {title1}</p>}
                      {title2 && <h1 className="text-3xl font-extrabold text-secondary">{title2}</h1>}
                      {text && <p className="text-[18px] xl:w-[550px] 2xl:w-[559px] text-garySecondary">{text}</p>}
                      {image && <img src={image} alt="" className="w-[350px]" />}
                      {text3 && <p className="text-[18px] text-garySecondary">{text3}</p>}
                      {image1 && (
                        <div>
                          <img src={image1} alt="" className="w-[350px]" />
                        </div>
                      )}
                      {text4 && <p className="text-[18px] 2xl:w-[559px] xl:w-[409px] text-garySecondary">{text4}</p>}
                      {url && (
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary underline flex items-center gap-1">
                          Know more <ExternalLink size={16} />
                        </a>
                      )}
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
