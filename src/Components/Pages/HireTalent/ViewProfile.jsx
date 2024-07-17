import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BiCoinStack } from "react-icons/bi";
import {
  BsFillChatDotsFill,
  BsGithub,
  BsLinkedin,
  BsSave2,
  BsShare,
} from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import axios from "../../../axiosConfig/axios";

function ViewProfile() {
  const { userID } = useParams();
  const [user, setUser] = useState();
  const getData = () => {
    axios
      .get(`/users/${userID}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getData();
  }, []);

  if (!user) {
    return (
      <div className="flex h-[80vh] justify-center">
        <HashLoader color="#38bdf8" className="self-center" />
      </div>
    );
  }
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 1, type: "tween" }}
      className="grid grid-cols-4 gap-4"
    >
      <div className="CARD p-1">
        <div className="flex gradient p-2">
          <img
            src={`${user.image}`}
            alt="user image"
            className="h-16 w-16 rounded-full mr-4 bg-transparent"
          />
          <div>
            <h1 className="font-bold ml-1 text-lg">{user.username}</h1>
            <p>
              <RiSuitcaseLine className=" inline text-lg mb-1"></RiSuitcaseLine>
              {user.company.title}
            </p>
            <p>
              <IoLocationOutline className=" inline text-lg mb-1"></IoLocationOutline>
              {user.address.city}
            </p>
          </div>
        </div>
        <div className="social-media-links">
          <a className="cursor-pointer  m-3">
            <BsGithub className="inline scale-125"></BsGithub>
          </a>
          <a className="cursor-pointer  m-3">
            <BsLinkedin className="inline scale-125"></BsLinkedin>
          </a>
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
        <div className="buttons-section flex justify-around w-full mt-2">
          <button className="btn-primary">
            <BsShare className="inline mr-1"></BsShare> SHARE
          </button>
          <button className="btn-primary">
            <BsSave2 className="inline mr-1"></BsSave2> SAVE
          </button>

          <button className="btn-primary">
            <BsFillChatDotsFill className="inline mr-1 mb-[3px]" />
            CHAT
          </button>
        </div>
      </div>
      <div className="col-span-3 p-1">
        <h2 className="font-bold mb-1">About {user.username}</h2>
        {`hi, i'm ${user.username},
        a passionate self-taught full stack web
        developer and a freelance software engineer from india. my passion for
        software lies with dreaming up ideas and making them come true with
        elegant interfaces. i take great care in the experience, architecture,
        and code quality of the things I build.`}
        <h2 className="font-bold my-1">Contact Information:</h2>
        e-mail - {user.email}
        <hr />
        Phone - {user.phone}
        <hr />
        Address - {user.address.address}, {user.address.city}
        <hr />
      </div>
    </motion.div>
  );
}

export default ViewProfile;
