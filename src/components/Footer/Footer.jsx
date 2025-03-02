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
      <div className="container-fulid rounded-t-3xl bg-gradient-to-b from-[#684FFF] to-[#7190FE] z-10 relative">
        <div style={bgImage}>
          {/* Header */}
          <h1 className="py-5 text-3xl font-bold text-yellow text-center">
            Contact Us
          </h1>

          {/* Four Blocks Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-b-2 border-white py-4 px-4">
            {/* Location Block */}
            <div className="text-center space-y-4">
              <div>
                <img src={Icon1} alt="Location Icon" className="w-8 mx-auto" />
              </div>
              <p className="text-sm">
                #50, 1st Floor, GVR Towers<br />
                Munireddy Layout, 1st Main,<br />
                Horamavu Main Road,<br />
                Bangalore, Karnataka 560043
              </p>
              <div className="flex justify-center gap-2">
                <a href="https://www.linkedin.com/company/narmtech/" target="_blank" rel="noopener noreferrer">
                  <img src={Icon6} alt="LinkedIn Icon" className="w-6 hover:opacity-75 transition-opacity" />
                </a>
                <a href="https://www.linkedin.com/company/narmtech/" target="_blank" rel="noopener noreferrer">
                  <img src={Icon4} alt="LinkedIn Icon" className="w-6 hover:opacity-75 transition-opacity" />
                </a>
                <a href="https://twitter.com/narmtech" target="_blank" rel="noopener noreferrer">
                  <img src={Icon5} alt="Twitter Icon" className="w-6 hover:opacity-75 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Email Block */}
            <div className="text-center space-y-4">
              <div>
                <img src={Icon2} alt="Email Icon" className="w-8 mx-auto" />
              </div>
              <div className="text-sm">
                <a href="mailto:info@narmtech.com" className="hover:underline block">
                  info@narmtech.com
                </a>
                <a href="mailto:hr@narmtech.com" className="hover:underline block">
                  hr@narmtech.com
                </a>
                <a href="mailto:sales@narmtech.com" className="hover:underline block">
                  sales@narmtech.com
                </a>
              </div>
            </div>

            {/* Numbers Block */}
            <div className="text-center space-y-4">
              <div>
                <img src={Icon3} alt="Phone Icon" className="w-8 mx-auto" />
              </div>
              <div className="text-sm">
                <a href="tel:+919663901621" className="hover:underline block">
                  +91 9663901621 - Sales and Services
                </a>
                <a href="tel:+919663901621" className="hover:underline block">
                  +91 9663901621 - Hiring Queries
                </a>
              </div>
            </div>

            {/* Important Links Block */}
            <div className="text-center space-y-4">
              <div>
                {/* <span className="text-3xl">📚</span> Emoji Icon */}
                <p className="font-semibold text-lg text-yellow">Important Links</p>
              </div>
              <div>
                <div className="space-y-2 text-sm">
                  <a href="/PrivatePolicy" className="hover:underline block">
                    Privacy Policy
                  </a>
                  <a href="/TermsandConditions" className="hover:underline block">
                    Terms & Conditions
                  </a>
                  <a href="/CancellationAndRefundPolicy" className="hover:underline block">
                    Cancellation & Refund Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="flex justify-center items-center p-4">
            <p className="text-sm">
              © Copyright {currentYear} - NARM Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;