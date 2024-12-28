import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Img1 from "../assets/offerings/nyayah.png";
import OfferingsCard from "../components/Offerings/OfferingsCard";
import OfferingsCardIT from "../components/Offerings/OfferingsCardIT";
import OfferingsCardReverse from "../components/Offerings/OfferingsCardReverse";
import OfferingsCardReverseAgri from "../components/Offerings/OfferingsCardReverseAgri";
import NyayahImg from '../assets/offerings/nyayah.png';
import AdhyaynImg from '../assets/offerings/Adhyayn.png';
import VyayahImg from '../assets/offerings/vyayah1.png';
import VyavasayahImg from '../assets/offerings/Vyayah2.png';


const Offerings = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* offerings section */}
      <OfferingsCard  Image={NyayahImg}/>
      <OfferingsCardReverse Image={AdhyaynImg}/>
      <OfferingsCardIT Image={VyayahImg} />
      <OfferingsCardReverseAgri Image={VyavasayahImg}/>
      <Footer />
    </div>
  );
};

export default Offerings;
