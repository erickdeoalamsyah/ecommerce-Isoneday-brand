import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.webp";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }bg-black  `}
    >
      <div className="hidden md:flex px-10 py-2 justify-between items-center bg-black">
        <div className="flex-shrink-0">
          <Link to="/">
          <img
      src={logo}
      alt="logo"
      className="h-7"
    />
          </Link>
        </div>

        <nav className="flex items-center px-6 py-3 shadow-md gap-x-6 font-[Orbitron]">
          {["/", "/shop", "/about", "/contact"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`text-sm text-white relative transition-all duration-300 hover:scale-110 ${
                location.pathname === path
                  ? 'after:absolute after:content-[""] after:h-0.5 after:w-full after:bg-red-500 after:bottom-[-4px] after:left-0'
                  : ""
              }`}
            >
              {path.replace("/", "").toUpperCase() || "HOME"}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-x-4 text-lg text-white">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="focus:outline-none"
          >
            {isSearchOpen ? <AiOutlineClose /> : <IoSearchOutline />}
          </button>
          <VscAccount />
          <MdOutlineShoppingCart />
        </div>
      </div>

      <div className="md:hidden w-full px-4 py-4 flex bg-black items-center justify-between">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white "
        >
          {isMenuOpen ? (
            <AiOutlineClose className="h-5 w-5" />
          ) : (
            <AiOutlineMenu className="h-5 w-5" />
          )}
        </button>

        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-7" />
            
          </Link>
        </div>

        <div className="flex items-center gap-x-4 text-lg text-white">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="focus:outline-none"
          >
            {isSearchOpen ? <AiOutlineClose /> : <IoSearchOutline />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-black/80 w-full text-sm text-gray-300 absolute top-0 left-0 py-5 px-6 mt-12 pb-10 font-[orbitron] ">
          <motion.nav
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center border border-gray-500 p-4 mb-4 rounded-full hover:border hover:border-white">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-grow  focus:outline-none text-gray-300"
              />
              <button className="text-lg text-gray-200">
                <ImSearch />
              </button>
            </div>
            <Link
              to="/"
              className="block hover:underline hover:text-white hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/shop"
              className="block hover:underline hover:text-white hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              to="/about"
              className="block hover:underline hover:text-white hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="block hover:underline hover:text-white hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </motion.nav>
        </div>
      )}

      {isSearchOpen && (
        <div className="bg-black/80 text-gray-300 w-full shadow-lg px-4 py-6 absolute top-0 left-0 mt-15 border-b border-gray-300 lg:px-10 font-[orbitron]">
          <h2 className="text-sm font-bold text-gray-300 mb-4">
            WHAT ARE YOU LOOKING FOR?
          </h2>
          <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-grow  focus:outline-none text-gray-300"
            />
            <button>
              <ImSearch />
            </button>
          </div>
          <h3 className="text-sm font-bold text-gray-300 mb-4">QUICKLINKS</h3>
          <motion.nav
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="space-y-3 text-xs text-gray-300"
          >
            <a
              href="/shop"
              className="block hover:underline hover:text-white hover:font-semibold"
            >
              New Arrivals
            </a>
            <a
              href="/"
              className="block  hover:underline hover:text-white hover:font-semibold"
            >
              Sticker
            </a>
            <a
              href="/"
              className="block hover:underline hover:text-white hover:font-semibold"
            >
              Accessories
            </a>
            <a
              href="/shop"
              className="block hover:underline hover:text-white hover:font-semibold"
            >
              T-shirt
            </a>
            <a
              href="/shop"
              className="block hover:underline hover:text-white hover:font-semibold"
            >
              Featured Product
            </a>
          </motion.nav>
        </div>
      )}
    </header>
  );
};

export default Header;
