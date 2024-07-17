import { motion } from "framer-motion";
import React from "react";
import { BiCoinStack } from "react-icons/bi";
import {
  BsFillBookmarkFill,
  BsFillChatDotsFill,
  BsShare,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axiosConfig/axios.js";
import { toast } from "react-toastify";

export default function ProfilesData({
  userID,
  userImage,
  userImageALT,
  userName,
  userDesignation,
  userLocation,
  skills,
  availabilities,
}) {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  function viewHandler(id) {
    user ? navigate(`/hiretalent/${id}`) : notLoggedIn();
  }

  function notLoggedIn() {
    setTimeout(() => {
      navigate("/getstarted");
    }, 2000);
    toast.error("You need to login first!");
  }

  function shareHandler(id) {
    navigator.clipboard.writeText(`${axios.defaults.baseURL}/hiretalent/${id}`);
    toast.success("Link copied to clipboard");
  }
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 1, type: "tween" }}
    >
      <div className="CARD shadow-md  ">
        <div className="flex gradient rounded-md p-2">
          <img
            src={`${userImage}`}
            alt={userImageALT}
            className="h-16 w-16 rounded-full  mr-4 bg-transparent"
          />
          <div>
            <h1 className="font-bold ml-1 text-lg">{userName}</h1>
            <p>
              <RiSuitcaseLine className="inline text-lg mb-1"></RiSuitcaseLine>
              {userDesignation}
            </p>
            <p>
              <IoLocationOutline className="inline text-lg mb-1"></IoLocationOutline>
              {userLocation}
            </p>
          </div>
        </div>
        <div className="skills-section mt-2">
          <p className="font-medium text-neutral-200 inline-flex items-center gap-1">
            <BiCoinStack className="inline text-xl"></BiCoinStack> SKILLS
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="pill">HTML</p>
            <p className="pill">HTML</p>
            <p className="pill">HTML</p>
            <p className="pill">HTML</p>
          </div>
        </div>
        <div className="avl-section">
          <p className="font-medium text-neutral-200 inline-flex items-center gap-1 mt-2">
            <MdEventAvailable></MdEventAvailable> AVAILABILITIES
          </p>
          <div className="text-xs m-2 font-medium">
            <p className="pill">HTML</p>
            <p className="pill">HTML</p>
            <p className="pill">HTML</p>
            <p className="pill">HTML</p>
          </div>
        </div>
        <div className="buttons-section flex flex-wrap gap-4 sm:gap-0 sm:justify-around w-full mt-2">
          <button onClick={() => shareHandler(userID)} className="btn-primary">
            <BsShare className="icon"></BsShare>SHARE
          </button>
          <button className="btn-primary">
            <BsFillBookmarkFill className="icon"></BsFillBookmarkFill>
            SAVE
          </button>
          <button onClick={() => viewHandler(userID)} className=" btn-primary">
            <CgProfile className="icon mb-[3px]" />
            VIEW
          </button>
          <button className="btn-primary">
            <BsFillChatDotsFill className="icon mb-[3px]" />
            CHAT
          </button>
        </div>
      </div>
    </motion.div>
  );
}
