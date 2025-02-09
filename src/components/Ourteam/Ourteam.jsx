import React from "react";
import UserIcon from "../../assets/icons/user.png";
// import BgSvg from "../../assets/brand/team_bg.svg";

import linkedIn from "../../assets/brand/linkedIn.png";

const AdvisoryTeamData = [
  {
    id: 1,
    name: "Dr. Samantha S ",
    position: "Product Management & Delivery Lead ",
    image: UserIcon,
    socialLinks: "https://www.linkedin.com/in/samanthasunkara/",
    about:
      `Dr. Samantha S, a seasoned professional with over a decade of experience, leads Product Management and Delivery at NARM Tech. With a strong academic background and expertise spanning the Education and IT industries, she plays a pivotal role in driving innovative product development and ensuring seamless delivery. 
<br></br>Her deep understanding of the educational domain, combined with her extensive product management experience, empowers her to craft impactful solutions for global markets. Dr. Samantha is a key force behind NARM Tech’s commitment to quality and excellence.`,
  },
  {
    id: 2,
    name: "Deepika Reddy ",
    position: "Human Resources, Sales & Marketing Lead ",
    image: UserIcon,
    socialLinks: "https://www.linkedin.com/in/deepika-reddy-04b24838/",
    about:
      `Deepika Reddy, with a Master’s in Business Administration specializing in Human Resources, brings nearly a decade of experience in talent acquisition, human resource management, and sales & marketing. At NARM Tech, she plays a critical role in fostering a people-first culture while driving sales and marketing strategies that support business growth. 

<br></br>Her expertise in HR operations and team-building ensures a robust and dynamic workforce, while her strategic insights into sales and marketing contribute to expanding NARM Tech’s footprint across industries and markets. `,
  },
  {
    id: 3,
    name: "Dr M Padma Lalitha",
    position: "Advisor",
    image: UserIcon,
    socialLinks: "https://www.linkedin.com/in/padmalalitha-mareddy-86393b17/",
    about:
      `Dr. M Padma Lalitha, a distinguished academic and industry expert, serves as an Advisor to NARM Tech. With 25 years of professional experience, she is a Professor and Head of Department at AITS, Rajampet, Andhra Pradesh, India. 

    <br></br>Her extensive background spans Research and Development in cutting-edge fields, including Artificial Intelligence (AI) and Machine Learning (ML), along with various other technologies. Dr. Lalitha’s guidance and expertise are invaluable in shaping NARM Tech’s innovation roadmap and advancing its R&D initiatives. 
    `,
  },
];
const Team = () => {
  // const bgImg = {
  //     backgroundImage: `url(${BgSvg})`,
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "cover",
  //     backgroundPosition: "right",
  //     minHeight: "1039px",
  //     width: "100%",
  //   };
  return (
    <>
      {/* <section style={bgImg} > */}
      <section  >
        <div className="container">
          <div className="min-h-[939px] flex flex-col gap-8 justify-center items-center">
            {/*Our team section */}
            <div className="mt-[240px] lg:mt-[2px] xl:mt-0">
              <h1 className="text-4xl font-bold  mb-8 text-center">
                Our Team
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-black">
                <div className="flex items-center gap-8 flex-row-reverse border-r border-solid border-blue-500 p-10">
                  {/* <img src={UserIcon} alt="" /> */}
                  <div className="space-y-2 bg-[#6C6CFF] text-white px-3 py-4 rounded-lg ">
                    <div className="flex gap-2">
                      <p className="text-xl font-bold">Ram M Reddy </p>
                      <a href="https://www.linkedin.com/in/rmreddi/" target="_blank">
                        <img src={linkedIn} />
                      </a>
                    </div>
                    <p>Founder & CEO</p>
                  </div>
                </div>
                <div className="col-span-3 lg:w-[700px] xl:w-[830px] 2xl:w-[831px]">
                  <p className="leading-6 w-fit">
                    As the Founder and CEO of NARM Tech Private Ltd, Ram M Reddy drives the company’s strategic vision and oversees all business operations. With over 23 years of expertise in the IT industry, he combines deep technological knowledge, a strong legal understanding, and strategic business insights gained through leadership roles at multinational corporations. {" "}
                    <br /> <br />
                    Ram specializes in areas such as Data & Analytics, Software Product Development, Portfolio Management, Project Management, and IT Strategy for global markets. His leadership has been instrumental in building high-performing product pipelines for the USA and EU markets, consistently achieving business excellence.

                  </p>
                </div>
              </div>
            </div>
            {/* Advisory team section */}
            <div className="">
              <h1 className="text-3xl font-bold mb-8 text-center">
                Advisory Team
              </h1>

              {/* card section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                {AdvisoryTeamData.map(
                  ({ id, icon, name, about, position }) => (
                    <div
                      key={id}
                      className="flex flex-col  rounded-xl  bg-gradient-to-r from-[#684FFF] to-[#7190FE] p-8  space-y-4 shadow-md  "
                    >

                      <div className="flex gap-4 bg-white p-4 rounded-xl  w-fit float-end">
                        {/* <img src={UserIcon} alt="" className="w-16" /> */}
                        <div>
                          <div>
                            <div className="flex gap-2 justify-between">
                              <h1 className="text-base font-bold text-blue-500 min-w-[180px]">{name}</h1>
                            </div>
                            <p className="text-base text-blue-500">{position}</p>
                          </div>
                        </div>
                      </div>
                      <p className="leading-8 text-white" dangerouslySetInnerHTML={{ __html: about }}></p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
