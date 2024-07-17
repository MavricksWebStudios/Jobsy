import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // fixme: fix footer positioning
    <footer className="my-4 border-t border-gray-300">
      <div className="flex flex-col   bottom w-full">
        <div className="text-center text-3xl text-blue-500 mb-2">LOGO</div>
        <div className="flex justify-around  mx-16 my-2">
          <div>
            <Link className=" text-gray-600 hover:text-gray-700" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className=" text-gray-600 hover:text-gray-700" to="/">
              Disclaimer
            </Link>
          </div>
          <div>
            <Link className=" text-gray-600 hover:text-gray-700" to="/">
              Cookie Policy
            </Link>
          </div>
          <div>
            <Link className=" text-gray-600 hover:text-gray-700" to="/">
              Return Policy
            </Link>
          </div>
          <div>
            <Link className=" text-gray-600 hover:text-gray-700" to="/">
              Terms of Services
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-5 text-gray-600 text-lg my-2">
          <BsFacebook className="hover:text-gray-700 cursor-pointer"></BsFacebook>
          <BsInstagram className="hover:text-gray-700 cursor-pointer"></BsInstagram>
          <BsTwitter className="hover:text-gray-700 cursor-pointer"></BsTwitter>
        </div>
        <div className="text-gray-600 text-lg text-center mt-2  cursor-pointer hover:text-gray-700">
          © Daksh & Ganesh
        </div>
      </div>
    </footer>
  );
}

export default Footer;
