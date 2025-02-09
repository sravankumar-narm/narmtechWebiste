import React from "react";
import UserIcon from "../../assets/icons/user.png";
import linkedIn from "../../assets/brand/linkedIn.png";

const TeamData = [
  {
    id: 0,
    name: "Ram M Reddy",
    position: "Founder & CEO",
    image: UserIcon,
    socialLinks: "https://www.linkedin.com/in/rmreddi/",
    about:
      "As the Founder and CEO of NARM Tech Private Ltd, Ram M Reddy drives the company’s strategic vision and oversees all business operations. With over 23 years of expertise in the IT industry, he combines deep technological knowledge, a strong legal understanding, and strategic business insights gained through leadership roles at multinational corporations.",
    bgColor: "bg-blue-100"
  },
  {
    id: 1,
    name: "Dr. Samantha S",
    position: "Product Management & Delivery Lead",
    image: UserIcon,
    socialLinks: "https://www.linkedin.com/in/samanthasunkara/",
    about:
      `Dr. Samantha S, a seasoned professional with over a decade of experience, leads Product Management and Delivery at NARM Tech. With a strong academic background and expertise spanning the Education and IT industries, she plays a pivotal role in driving innovative product development and ensuring seamless delivery. 

Her deep understanding of the educational domain, combined with her extensive product management experience, empowers her to craft impactful solutions for global markets. Dr. Samantha is a key force behind NARM Tech’s commitment to quality and excellence. `,
    bgColor: "bg-[#c8ffc8]"
  },
  {
    id: 2,
    name: "Deepika Reddy",
    position: "Human Resources, Sales & Marketing Lead",
    image: UserIcon,
    socialLinks: "https://www.linkedin.com/in/deepika-reddy-04b24838/",
    about:
      `Deepika Reddy, with a Master’s in Business Administration specializing in Human Resources, brings nearly a decade of experience in talent acquisition, human resource management, and sales & marketing. At NARM Tech, she plays a critical role in fostering a people-first culture while driving sales and marketing strategies that support business growth. 

Her expertise in HR operations and team-building ensures a robust and dynamic workforce, while her strategic insights into sales and marketing contribute to expanding NARM Tech’s footprint across industries and markets. `,
    bgColor: "bg-[#ffe8e8]"
  },
  {
    id: 3,
    name: "Dr M Padma Lalitha",
    position: "Advisor",
    image: UserIcon,
    socialLinks: "https://www.linkedin.com/in/padmalalitha-mareddy-86393b17/",
    about:
      `Dr. M Padma Lalitha, a distinguished academic and industry expert, serves as an Advisor to NARM Tech. With 25 years of professional experience, she is a Professor and Head of Department at AITS, Rajampet, Andhra Pradesh, India. 

Her extensive background spans Research and Development in cutting-edge fields, including Artificial Intelligence (AI) and Machine Learning (ML), along with various other technologies. Dr. Lalitha’s guidance and expertise are invaluable in shaping NARM Tech’s innovation roadmap and advancing its R&D initiatives. `,
    bgColor: "bg-purple-100"
  },
];

const Team = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Meet Our Team</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {TeamData.map(({ id, name, position, image, about, socialLinks, bgColor }, index) => (
            <div
              key={id}
              className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6 shadow-md rounded-lg overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-blue-400 ${bgColor} ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <img
                src={image}
                alt={name}
                className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-blue-300"
              />
              <div className="text-center lg:text-left space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <h2 className="text-2xl font-semibold text-blue-800">{name}</h2>
                  <a href={socialLinks} target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt="LinkedIn" className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-blue-600 font-medium">{position}</p>
                <p className="text-gray-700 leading-relaxed">{about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
