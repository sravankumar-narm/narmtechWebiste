import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Narayana Swami",
    designation: "Highcourt Advocate",
    text: "This app is a must-have for anyone dealing with legal matters. It's not just about convenience; it's about peace of mind. I can trust the accuracy of the information and the effectiveness of the tools provided. Thank you for making legal processes accessible and understandable.",
    rating: 5,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: 2,
    name: "Sarath Kumar Reddy",
    designation: "High Court Advocate",
    text: "Absolutely blown away by the efficiency and accuracy of this legal application! As a busy advocate, having a tool that streamlines research and case preparation is invaluable. Highly recommend to anyone in the legal profession.",
    rating: 5,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: 3,
    name: "Dr SMV Narayana",
    designation: "Principal, AITS University",
    text: "I've been in the education sector for over two decades, and I can confidently say that this ERP application has revolutionized how we operate. From managing admissions to tracking student progress, it's a comprehensive solution that every school should consider.",
    rating: 5,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}
const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos-duration="300" className="py-10">
        <div className="container mx-auto">
          {/* heading section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold  lg:w-[500px] mx-auto">
            What Clients say
            </h1>
          </div>
          {/* testimonial section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(
                ({ id, name, text, ImageUrl, rating, designation }) => {
                  return (
                    <div key={id} className="my-6">
                      <div className="flex flex-col justify-center items-center gap-3 text-center p-4 mx-4 ">
                        <img
                          src={ImageUrl}
                          alt=""
                          className="rounded-full w-28 block mx-auto"
                        />
                        <h1 className="text-xl font-bold text-[#4E4E4E]">{name}</h1>
                        <p className="text-xs text-[#4E4E4E]">{designation}</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p className="text-[#4E4E4E] text-sm">{text}</p>
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

export default Testimonial;
