import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Services2 from "../components/Services2/Services2";
import AboutUs from "../components/AboutUs/AboutUs";
import Ourteam from "../components/Ourteam/Ourteam";
import Testimonial from "../components/Testimonial/Testimonial";
import ContactUs from "./ContactUs";
import CountdownTimer from "../components/CountdownTimer";

const Layout = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <div>
            {/* <Navbar /> */}
            <Outlet />
            {pathname !== "/internship/signup" && <CountdownTimer endDate="2024-07-31T23:59:59" currentPath={pathname} />}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
