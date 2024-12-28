import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ConsultingCard from "../components/Consulting/ConsultingCard";
import Image1 from '../assets/consulting/img1.png';
import Image2 from '../assets/consulting/img2.png';
import Image3 from '../assets/consulting/img3.png';

const Consulting = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const  consultingData = [
    {
      title : 'AI & LLM powered SAAS products',
      para: [
        'In the rapidly evolving landscape of technology, the provision and utilization of AI & LLM products have become pivotal for businesses seeking innovation and competitive advantage.',
        "Our company is at the forefront, providing innovative and front-line AI products that cater to diverse needs and demands of today's dynamic market, ensuring our clients stay ahead and thrive in the era of intelligent technologies."
      ],
      image : Image1
    },
    {
      title : 'UI and UX services',
      para: [
        'At the heart of every successful digital venture lies the harmonious blend of UI development and UX design.',
        "Our commitment to excellence is reflected in our provision of UI development services, where we meticulously craft visually striking interfaces, coupled with an emphasis on UX to create seamless, enjoyable interactions. By prioritizing user satisfaction and accessibility, we enable our clients to deliver exceptional digital experiences that leave a lasting impression on their audience."
      ],
      image : Image2
    },
    {
      title : 'Cloud Solutions Consulting',
      para: [
        'Through strategic cloud solutioning tailored for SAAS applications and Data and Analytics hurdles, bolstered by a robust Platform and Data engineering architecture, organizations can achieve optimal cost-efficiency and performance enhancements across existing applications, spanning infrastructure and data processing, while also orchestrating seamless cloud migration and adoption strategies.',
      ],
      image : Image3
    }
  ]
  return (
    <div>
      <Navbar />
      <ConsultingCard  data={consultingData[0]}/>
      <ConsultingCard reverse={true} data={consultingData[1]}/>
      <ConsultingCard data={consultingData[2]}/>
      <Footer />
    </div>
  );
};

export default Consulting;
