import React from "react";

const testimonialData = [
  {
    id: 1,
    name: "Narsimha",
    designation: "CEO @ Narmtech",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem.",
    rating: 5,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: 2,
    name: "Narsimha",
    designation: "CEO @ Narmtech",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem.",
    rating: 5,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: 3,
    name: "Narsimha",
    designation: "CEO @ Narmtech",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem.",
    rating: 5,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
];
const Testimonial = () => {
  return (
    <>
      <div>
        <div className="container-fluid">
          {/* heading section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold  lg:w-[500px] mx-auto">
              Powerful consulting to boost your productivity
            </h1>
          </div>

          {/* card section */}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
