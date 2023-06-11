import React from "react";
import { FaBeer, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-4 footer p-10 bg-base-200 text-base-content">
        <div>
          <img
            src="https://i.ibb.co/znGVTBn/Logo.png"
            alt=""
            className="w-28"
          />
          <p>
            Summer Camp for Sport
            <br />
            Providing Summer Camp Related Details
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Production</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Selling</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Instructors</a>
          <a className="link link-hover">Classes</a>
          <a className="link link-hover">Home</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p>
            R-5, H-Kha-51/1, Nikunja-2, Khilkhet,<br></br> Dhaka, Bangladesh
          </p>
        </div>
      </footer>
      <footer className="grid grid-cols-2 justify-between footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <img
            src="https://i.ibb.co/znGVTBn/Logo.png"
            alt=""
            className="w-10"
          />
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 items-end justify-items-end">
          <a className="text-xl">
            <FaYoutube></FaYoutube>
          </a>
          <a className="text-xl">
            <FaFacebook></FaFacebook>
          </a>
          <a className="text-xl">
            <FaTwitter></FaTwitter>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
