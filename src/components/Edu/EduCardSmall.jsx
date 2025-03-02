import React from "react";

const EduCardSmall = ({ reverse = false, data, image }) => {
  const { title, content } = data;
  return (
    <div className="py-10 mb-8">
      <div className="container-fluid">
        <div className={`${ 
              reverse ? " justify-end items-end" : "justify-start items-start"
            } flex flex-col sm:flex-row items-center gap-6`}>
            <img
              src={image}
              alt=""
              className={`${
                reverse ? "order-2" : "order-1"
              } max-w-[250px] rounded-lg bg-[#FDFAFA] border-[1px] border-[#FFF500] shadow-md p-10`}
            />
         
          <div className={`space-y-4 ${reverse ? "order-1" : "order-2"}`}>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="leading-8">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduCardSmall;
