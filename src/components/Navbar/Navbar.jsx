import React, { useState } from "react";
import Logo from "../../assets/brand/logo.png";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const navLinks = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Offerings", url: "/Offerings" },
  { id: 3, text: "Consulting", url: "/Consulting" },
  // { id: 4, text: "Internship", url: "/internship" },
  { id: 5, text: "About us", url: "/Aboutus" },
  { id: 6, text: "Our Team", url: "/Ourteam" },
  { id: 7, text: "Contact us", url: "/Contactus" },
];

const Navbar = ({ isHero, onClose }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="relative z-50 py-3">
        <div className="container-fluid flex items-center justify-between px-3">
          {/* Logo section */}
          <div>
            <Link to={"/"}>
              <img src={Logo} alt="Logo" className="w-[200px] xl:w-[240px]" />
            </Link>
          </div>

          {/* NavLinks section */}
          <ul className="hidden lg:flex items-center gap-4">
            {navLinks.map(({ id, text, url }) => (
              <li key={id}>
                <NavLink
                  to={url}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `text-sm lg:text-base font-medium inline-block px-3 lg:px-4 py-2 lg:py-3 rounded-full transition-all shadow-lg ${
                      text === "Internship"
                        ? "bg-gradient-to-r from-red-500 to-blue-500 text-white"
                        : isActive
                        ? "bg-indigo-400 text-white"
                        : "bg-slate-200 text-gray-600 hover:bg-slate-300"
                    }`
                  }
                >
                  {text === "Internship" ? (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {text}
                    </motion.div>
                  ) : (
                    text
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger menu section */}
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
