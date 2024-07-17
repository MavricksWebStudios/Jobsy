import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosPeople } from 'react-icons/io';
import { HiUsers } from "react-icons/hi";

const LiveChallangesCard = () => {
  let imgAddress =
    "https://findcoder.fra1.digitaloceanspaces.com/31435946afe818cc466cea6f8e38180c";
  return (
    <div className="shadow-md rounded-md md:py-8 md:px-2 max-w-[90%] grid md:grid-cols-3 grid-cols-1 gap-2 items-center py-4 px-2">
      <img
        src={imgAddress}
        className="rounded-md shadow-sm aspect-video"
        alt="img"
      />
      <div className="col-span-2 space-y-2">
        <h1 className="font-medium md:text-2xl text-xl items-center flex justify-between">
          Pensil Community Landing Page
          <span className="text-base">
            <BsShare></BsShare>
          </span>
        </h1>
        <p className="text-sm md:text-base">
          Design and Build a template web page that will act as the landing page
          for a Pensil Community
        </p>
        <p className="secondary-color">
          <AiOutlineThunderbolt className="icon" />
          Powered By
          <a className="underline ml-1 cursor-pointer text-blue-500">Pensil</a>
        </p>
        <div>LOGO</div>
        <div className="flex flex-col md:flex-row justify-start gap-4 items-center">
          <p className="flex-1 w-full">
            <span className="secondary-color">
              <FaRupeeSign className="icon"></FaRupeeSign>
              Prizes
            </span>
            <p className="md:text-lg mt-2">Prizes worth INR 35,000</p>
          </p>

          <p className="flex-1 w-full">
            <span className="secondary-color">
              <IoIosPeople className="icon text-2xl" />
              Participants joined
            </span>
            <p className="md:text-lg mt-2">
              <HiUsers className="icon text-xl"></HiUsers> 272+ participants
            </p>
          </p>
        </div>
        <div>
          <button className="btn-primary rounded-sm px-4 mr-4 w-full md:w-fit">
            View Details
          </button>
          <button className="btn-primary rounded-sm px-4 w-full md:w-fit">
            Voting has ended
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChallangesCard;
