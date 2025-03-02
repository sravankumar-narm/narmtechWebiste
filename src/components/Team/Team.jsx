import React from "react";
import BgSvg from "../../assets/brand/team_bg.svg";
import UserIcon from "../../assets/icons/user.png";
import linkedIn from "../../assets/brand/linkedIn.png";

const AdvisoryTeamData = [
  {
    id: 1,
    name: "Dr. Samantha S",
    position: "Product Management & Delivery Lead",
    image: UserIcon,
    socialLinks: "https://www.linkedin.com/in/samanthasunkara/",
    about:
      `Dr. Samantha S, with over a decade of experience, leads Product Management and Delivery at NARM Tech. Her expertise in Education and IT drives innovative product development and seamless delivery. A key force behind NARM Tech’s commitment to quality, she crafts impactful solutions for global markets.`,
  },
  {
    id: 2,
    name: "Deepika Reddy",
    position: "Human Resources, Sales & Marketing Lead",
    image: UserIcon,
    socialLinks: "https://www.linkedin.com/in/deepika-reddy-04b24838/",
    about:
      `Deepika Reddy, an MBA in Human Resources, has nearly a decade of experience in talent acquisition, HR management, and sales & marketing. At NARM Tech, she fosters a people-first culture while driving business growth through strategic HR and marketing initiatives. `,
  },
  {
    id: 3,
    name: "Dr M Padma Lalitha",
    position: "Advisor",
    image: UserIcon,
    socialLinks: "https://www.linkedin.com/in/padmalalitha-mareddy-86393b17/",
    about:
      `Dr. M Padma Lalitha, a seasoned academic and industry expert with 25 years of experience, advises NARM Tech. As a Professor and HOD at AITS, Rajampet, she specializes in AI, ML, and R&D. Her expertise drives NARM Tech’s innovation and research initiatives. `,
  },
];
const Team = () => {
  const bgImg = {
    backgroundImage: `url(${BgSvg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "1208px",
    width: "100%",
  };
  return (
    <>
      <section style={bgImg}>
        <div className="container-fluid">
          <div className="min-h-[1240px] flex flex-col gap-8 justify-center items-center">
            {/*Our team section */}
            <div className="mt-[240px] lg:mt-[200px] xl:mt-0">
              <h1 className="text-4xl font-bold text-yellow mb-8 text-center">
                Our Team
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-white">
                <div className="flex items-center gap-8 flex-row-reverse border-r border-solid border-white p-10">
                  {/* <img src={UserIcon} alt="" /> */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <p className="text-xl font-bold">Ram M Reddy </p>
                      <a href="https://www.linkedin.com/in/rmreddi/" target="_blank">
                        <img src={linkedIn} />
                      </a>
                    </div>
                    <p>Founder & CEO</p>
                  </div>
                </div>
                <div className="col-span-3 xl:w-[830px] 2xl:w-[831px]">
                  <p className="leading-6">
                    As the Founder and CEO of NARM Tech Private Ltd, Ram M Reddy 
                    drives the company’s strategic vision and oversees all business operations. 
                    With over 23 years of expertise in the IT industry, he combines deep 
                    technological knowledge, a strong legal understanding, and strategic 
                    business insights gained through leadership roles 
                    at multinational corporations. {" "}
                    <br /> <br /> Ram specializes in areas such as Data & Analytics,
                     Software Product Development, Portfolio Management, Project Management, 
                     and IT Strategy for global markets. His leadership has been instrumental 
                     in building high-performing product pipelines for the USA and EU markets, 
                     consistently achieving business excellence. 
                  </p>
                </div>
              </div>
            </div>
            {/* Advisory team section */}
            <div className="">
              <h1 className="text-4xl font-bold text-yellow mb-8 text-center">
                Advisory Team
              </h1>

              {/* card section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                {AdvisoryTeamData.map(({ id, icon, name, about, position }) => (
                  <div
                    key={id}
                    className="flex flex-col  rounded-xl bg-white p-8 space-y-4 shadow-md 2xl:h-[400px]"
                  >

                    <div className="flex items-center gap-4 bg-darkBlue p-4 rounded-xl text-white w-fit float-end">
                      {/* <img src={UserIcon} alt="" className="w-16" /> */}
                      <div>
                        <div>
                          <div className="flex gap-2 justify-between">
                            <h1 className="text-base font-bold min-w-[180px]">{name}</h1>
                          </div>
                          <p className="text-base">{position}</p>
                        </div>
                      </div>
                    </div>
                    <p className="leading-8 justify-start items-start">{about}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
