import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CancellationRefund from "../components/Footer/CancellationRefund";

const Refund = () => {
  return (
    <div>
      <Navbar />
      <CancellationRefund />
      <Footer />
    </div>
  );
};

export default Refund;