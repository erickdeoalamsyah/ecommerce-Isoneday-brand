import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logoFooter from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="text-gray-300 text-xs md:text-sm py-6 font-[orbitron] border-t border-gray-500">
      <div className="px-4 lg:px-16 ">
        <div className="grid grid-cols-3 justify-center space-x-5  lg:gap-10">
          <div className="cols space-y-2">
            <img src={logoFooter} alt="Logo" className="h-10 mb-4" />
            <p>Bandung City, East Java, Indonesia</p>
            <p>@isoneday.studio</p>
            <p>+62 812 345 6789</p>
            <div className="flex space-x-4 mt-4 ">
              <Link to="https://www.instagram.com/isoneday.studio/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <FaInstagram className="cursor-pointer text-lg hover:scale-150 transition-all duration-100 ease-in " />
              </Link>
              <FaTwitter className=" text-lg hover:scale-150 transition-all duration-100 ease-in" />
              
              <FaYoutube className="cursor-pointer text-lg hover:scale-150 transition-all duration-100 ease-in" />
            </div>
          </div>
          <div>
            <h3 className="text-white text-sm mb-4">COMPANY</h3>
            <ul className="space-y-2 ">
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#collaboration" className="hover:underline">
                  Collaboration
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm mb-4">EVENT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#event1" className="hover:text-white hover:underline">
                  Evartra 2024
                </a>
              </li>
              <li>
                <a href="#event2" className="hover:text-white hover:underline">
                  Tea House 2024
                </a>
              </li>
              <li>
                <a href="#event3" className="hover:text-white hover:underline">
                  Pasar Kreatif VOC 2024
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="px-16 border-t border-gray-500 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>&copy; 2024 Isoneday</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
