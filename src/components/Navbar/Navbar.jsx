import React, { useState } from "react";
import Logo from "../../assets/brand/logo.png";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import Aibot from "../../pages/Aibot";
import { motion } from "framer-motion";

export const navLinks = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Offerings", url: "/Offerings" },
  { id: 3, text: "Consulting", url: "/Consulting" },
  { id: 4, text: "Internship", url: "/internship" },
  { id: 5, text: "About us", url: "/Aboutus" },
  { id: 6, text: "Our Team", url: "/Ourteam" },
  {
    id: 7,
    text: "Contact us",
    url: "/Contactus",
    // dropdown: [
    //   { id: 7, text: "NYAYAH", url: "/Nyayah" },
    //   { id: 7, text: "ADHYAYN", url: "/Adhyayn" },
    //   { id: 7, text: "VYAYAH", url: "/Vyayah" },
    //   { id: 7, text: "VYAVASAYAH", url: "/Vyavasayah" },
    // ],
  },
];

const Navbar = ({ isHero, onClose }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State for controlling dropdown visibility

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to hide dropdown
  const hideDropdown = () => {
    setShowDropdown(false);
  };
  // const [isAibotOpen, setIsAibotOpen] = useState(false);
  // // const history = useHistory();

  // const handleOpenAIChat = () => {
  //   setIsAibotOpen(!isAibotOpen);
  // };

  // const handleNavLinkClick = () => {
  //   if (isAibotOpen) {
  //     setIsAibotOpen(false);
  //   }
  // };
  // useEffect(() => {
  //   // Listen for route changes
  //   const unlisten = history.listen(() => {
  //     // Close Aibot when navigating
  //     if (isAibotOpen) {
  //       setIsAibotOpen(false);
  //     }
  //   });

  //   // Clean up listener on unmount
  //   return () => {
  //     unlisten();
  //   };
  // }, [history, isAibotOpen]);
  return (
    <>
      <nav className="relative z-50 py-3">
        <div className="container flex items-center justify-between">
          {/* Logo section */}
          <div>
            <Link to={"/"}>
              <img src={Logo} alt="" className="w-[200px] xl:w-[240px]" />
            </Link>
          </div>
          {/* NavLinks section */}
          <ul className="hidden lg:flex items-center gap-4">
            {/* {navLinks.map((link) => {
              const { id, text, url, dropdown } = link;
              return (
                <li key={id} onMouseLeave={hideDropdown}>
                  {dropdown ? (
                    <div className="relative">
                      <NavLink
                        activeClassName="active"
                        className={`text-sm lg:text-base font-medium inline-block px-3 lg:px-4 py-2 lg:py-3  rounded-full  dark:bg-dark/20 dark:text-white dark:hover:bg-dark/40 ${
                          isHero
                            ? "text-white bg-white/10 hover:bg-white/20"
                            : "text-[#005886] bg-gray/20 hover:bg-gray/50"
                        }`}
                        to={url}
                        // Toggle dropdown visibility on link click
                      >
                        {text}
                      </NavLink>
                      {showDropdown && (
                        <ul className="absolute top-full left-0 mt-0 bg-white shadow-md rounded-lg py-1 ml-2">
                          {dropdown.map((sublink) => (
                            <li key={sublink.id}>
                              <NavLink
                                activeClassName="active"
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                                to={sublink.url}
                              >
                                {sublink.text}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      activeClassName="active"
                      className={`text-sm lg:text-base font-medium inline-block px-3 lg:px-4 py-2 lg:py-3  rounded-full  dark:bg-dark/20 dark:text-white dark:hover:bg-dark/40 ${
                        isHero
                          ? "text-white bg-white/10 hover:bg-white/20"
                          : "text-[#005886] bg-gray/20 hover:bg-gray/50"
                      }`}

                      to={url}
                      onClick={onClose}
                      // onClick={handleNavLinkClick}
                    >
                      {text}
                    </NavLink>
                  )}
                </li>
              );
            })} */}
            {navLinks.map((link) => {
              const { id, text, url, dropdown } = link;
              return (
                <li key={id} onMouseLeave={hideDropdown} className="relative">
                  {text === "Internship" ? (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }} // Continuous grow and shrink
                      whileHover={{ scale: 1 }} // Stop animation on hover
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <NavLink
                        className="text-sm lg:text-base font-medium inline-block px-3 lg:px-4 py-2 lg:py-3 rounded-full bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg transition-all hover:shadow-xl hover:from-purple-600 hover:to-blue-500"
                        to={url}
                        onClick={onClose}
                      >
                        {text}
                      </NavLink>
                    </motion.div>
                  ) : (
                    <NavLink
                      className={`text-sm lg:text-base font-medium inline-block px-3 lg:px-4 py-2 lg:py-3 rounded-full dark:bg-dark/20 dark:text-white dark:hover:bg-dark/40 ${isHero
                          ? "text-white bg-white/10 hover:bg-white/20"
                          : "text-[#005886] bg-gray/20 hover:bg-gray/50"
                        }`}
                      to={url}
                      onClick={onClose}
                    >
                      {text}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
          {/* hamburger menu section */}
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="block lg:hidden cursor-pointer transition-all"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="block lg:hidden cursor-pointer transition-all"
              size={30}
            />
          )}
        </div>
      </nav>
      {/* Mobile menu section */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
