import { motion } from "framer-motion";
import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsSave } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";

function ExploreworkData({
  userID,
  imgSRC,
  imgALT,
  heading,
  userHandle,
  projectVideoSRC,
  likesCount,
  commentsCount,
  viewsCount,
  skills,
}) {
  return (
    <>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{ duration: 1, type: "tween" }}
        className="mt-2 border border-sky-200 rounded-md shadow-md"
      >
        <div className="flex w-full items-center justify-start gap-3  p-3">
          <img
            loading="lazy"
            className="aspect-square object-cover rounded-full h-12 w-12"
            src={imgSRC}
            alt={imgALT}
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h1 className="line-clamp-1 font-medium">{heading}</h1>
            <div className="flex w-full items-center justify-between">
              <p className="line-clamp-1 text-sm">@{userHandle}</p>
            </div>
          </div>
        </div>
        <div className="flex items-start w-fit rounded-sm bg-blue-100">
          <img
            className="object-contain aspect-video"
            src={projectVideoSRC}
          ></img>
        </div>
        <div className="stats flex md:w-1/3 items-end justify-between p-3">
          <div className="flex w-full flex-col items-start justify-center">
            <div className="flex w-full items-center justify-between gap-3">
              <div className="mb-1 flex w-full items-center justify-start gap-3">
                <button className="text-base inline-flex items-center justify-start">
                  <AiOutlineHeart className="icon" /> {likesCount}
                </button>
                <button className="text-base inline-flex items-center justify-start">
                  <FaRegCommentDots className="icon" /> {commentsCount}
                </button>
                <button className="text-base inline-flex items-center justify-start">
                  <AiOutlineEye className="icon" /> {viewsCount}
                </button>
              </div>
              <div className="relative undefined">
                <div className="active:outline-none" aria-expanded="false">
                  <button className="flex items-center justify-center">
                    <RiSendPlaneFill className="icon" />
                  </button>
                </div>
              </div>
              <button className="ml-auto">
                <BsSave className="icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-[-1em] font-medium items-start justify-start gap-2 p-3">
          <span className="pill">html</span>
          <span className="pill">css</span>
          <span className="pill">javascript</span>
        </div>
      </motion.div>
    </>
  );
}

export default ExploreworkData;
