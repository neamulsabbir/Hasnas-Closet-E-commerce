import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto grid sm:grid-cols-3 lg:grid-cols-4 justify-between items-start pt-10">
        <div>
          <div className="flex items-center">
            <img className="w-44" src={logo} alt="" />
          </div>
          <h1 className="w-52">
            Favorite collections and hottest trends,Find it, love it, buy it.
          </h1>
        </div>
        <div className="sm:ml-8 md:ml-0 mt-5 sm:mt-0">
          <h1 className="font-bold">ABOUT</h1>
          <div className="sm:mt-5">
            <p>About Us</p>
            <p>FAQ</p>
            <p>Achivement</p>
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>
        <div className="text-base sm:ml-5 md:ml-0 mt-5 sm:mt-0">
          <h1 className="font-bold">CONTACT US</h1>
          <div className="sm:mt-5">
            <div>
              <p className="font-semibold">Hotline:</p>
            </div>
            <span>+880 1938927389</span>

            <div>
              <p className="font-semibold">Email:</p>
            </div>
            <span>support@neamul.com</span>
          </div>
        </div>
        <div className="flex md:flex-row mt-5 lg:mt-0">
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-black rounded-full p-1 text-black text-xs"
          >
            <FaFacebookF></FaFacebookF>
          </Link>
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-black rounded-full p-1 text-black text-xs"
          >
            <FaInstagram></FaInstagram>
          </Link>
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-black rounded-full p-1 text-black text-xs"
          >
            <FaYoutube></FaYoutube>
          </Link>
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-black rounded-full p-1 text-black text-xs"
          >
            <FaLinkedin></FaLinkedin>
          </Link>
        </div>
      </div>
      <p className="py-8 text-center">
        Copyright © 2023 Neamul's Bazar All rights reserved
      </p>
    </div>
  );
};

export default Footer;
