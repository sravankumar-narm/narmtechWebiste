import React from "react";
import FooterSvg from "../../assets/background.png";
import Icon1 from "../../assets/footer-icons/icon1.png";
import Icon2 from "../../assets/footer-icons/icon2.png";
import Icon3 from "../../assets/footer-icons/icon3.png";
import Icon4 from "../../assets/brand/linkedIn.png";
import Icon5 from "../../assets/footer-icons/Layer_1.png";
import Icon6 from "../../assets/footer-icons/Facebook.png";

const bgImage = {
  backgroundImage: `url(${FooterSvg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "auto",
  width: "100%",
};
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-white mt-20">
      <div className="container rounded-t-3xl bg-gradient-to-b from-[#684FFF] to-[#7190FE] z-10 relative">
        <div style={bgImage}>
          <h1 className="py-5 text-3xl font-bold text-yellow text-center">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-b-2 border-white py-2">
            <div className="text-center space-y-4">
              <div>
                <img src={Icon1} alt="" className="w-14 mx-auto" />
              </div>
              <p>
              #50, 1st Floor, GVR Towers<br></br>
              Munireddy Layout, 1st Main,<br></br>
              Horamavu main Road,<br></br>
              Bangalore, Karnataka 560043<br></br>
              </p>
              <div className="flex justify-center gap-2">
              <a href="https://www.linkedin.com/company/narmtech/" target="_blank"><img src={Icon6} alt="" className="w-5"/></a>
              <a href="https://www.linkedin.com/company/narmtech/"  target="_blank"><img src={Icon4} alt="" className="w-5"/></a>
             <a  href="https://twitter.com/narmtech"  target="_blank"><img src={Icon5} alt="" className="w-5"/></a>
            </div>
            </div>
            <div className="text-center space-y-4 mt-6">
              <div>
                <img src={Icon2} alt="" className="w-14 mx-auto" />
              </div>
              <div>
                <p>info@narmtech.com</p>
                <p>hr@narmtech.com</p>
                <p>sales@narmtech.com</p>
              </div>
            </div>
            <div className="text-center space-y-4 mt-3">
              <div>
                <img src={Icon3} alt="" className="w-14 mx-auto" />
              </div>
              <div>
                <p>+91 9611291621 - Sales and Services</p>
                <p> +91 9663901621 - Hiring Queries</p>
                <p> +91 8297902227 - Whatsapp</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div className="flex gap-2">
            <p>© Copyright {currentYear} - NARM Tech</p>
           {/* <a href="https://www.linkedin.com/company/narmtech/"><img src={Icon4} alt="" className="w-5"/></a>
           <a href="https://twitter.com/narmtech"><img src={Icon5} alt="" className="w-5"/></a> */}
           </div>
            <div className="flex items-center">
              {/* <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a> */}
             {/* <p>Privacy Policy</p>
             <p>Terms & Conditions</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
