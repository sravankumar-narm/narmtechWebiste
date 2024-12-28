import React from "react";
import BgSvg from "../../assets/brand/team_bg.svg";
import UserIcon from "../../assets/icons/user.png";
import linkedIn from "../../assets/brand/linkedIn.png";

const AdvisoryTeamData = [
  {
    id: 1,
    name: "Narsimha Reddy",
    position: "Program Manager",
    image: UserIcon,
    socialLinks: "",
    about:
      "Program Manager, TATA Consultancy Services, Chicago, USA, 25 years of IT Experience in Data and Analytics, AI & ML",
  },
  {
    id: 2,
    name: "Sasi K",
    position: "AI&ML Expert",
    image: UserIcon,
    socialLinks: "",
    about:
      "Research Associate, AI Center of Excellence, TATA Consultancy Services, Bangalore, India, 17 years of Professional Experience in AI, Data Science & IT Infrastructure Management.",
  },
  {
    id: 3,
    name: "Dr M Padma Lalitha",
    position: "Professor and HOD, AITS",
    image: UserIcon,
    socialLinks: "",
    about:
      "Professor and Head of Department,AITS, Rajampet, Andhra Pradesh, India 25 years of Professional Experience, Research and Development Experience in various subjects and technologies, and AI/ML.",
  },
];
const Team = () => {
  const bgImg = {
    backgroundImage: `url(${BgSvg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
    minHeight: "1208px",
    width: "100%",
  };
  return (
    <>
      <section style={bgImg}>
        <div className="container">
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
                    Ram M Reddy, Founder & CEO of NARM Tech Private Ltd,
                    oversees all business operations of the company. With over
                    21 years of experience in the IT industry, he combines his
                    expertise in technology, legal matters, and business acumen
                    gained through diverse roles in multinational corporations.{" "}
                    <br /> <br /> Throughout his career, he has excelled in
                    areas such as Data & Analytics, Software Products
                    Development, Portfolio Management, Project Management, and
                    IT Strategy for global markets. Under his guidance,
                    companies have achieved remarkable success in building
                    robust product pipelines for the USA and EU markets.
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
                    className="flex flex-col  rounded-xl bg-white p-8 space-y-4 shadow-md 2xl:h-[377px]"
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
