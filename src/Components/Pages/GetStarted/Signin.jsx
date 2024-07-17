import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineEmail, MdOutlinePassword } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import login_bg from "Assets/Images/login_bg.jpg";
import axios from "axiosConfig/axios.js";
import { setUser } from "../../../redux/userSlice";
const Signin = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const dispatch = useDispatch();
  function submitHandler() {
    axios
      .post("/auth/login", {
        username,
        password,
      })
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        toast.error("Wrong username or password,\nPlease try again!");
      });
    setPassword("");
    setUsername("");
  }
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 1, type: "tween" }}
      style={{
        backgroundImage: `url(${login_bg})`,
      }}
      className="h-[calc(99vh_-_60px)] bg-[#27272a] bg-blend-overlay flex items-center justify-center lg:justify-start bg-right md:bg-no-repeat"
    >
      <div className="gradient lg:max-w-[35%] md:w-[60%] md:ml-4 md:px-8 md:py-12 mx-2 px-2 py-4 rounded-md text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          <IoIosPeople className="inline" /> Log-in / Sign-up
        </h2>
        <p className="tracking-wide leading-relaxed mt-7 text-xl">
          Develop your portfolio, win challenges, and be hired from the front.
        </p>
        <div className="mt-3 px-3">
          <label>
            <MdOutlineEmail className="inline mr-1 text-xl"></MdOutlineEmail>
            <input
              type="text"
              className="bg-transparent placeholder:text-white p-1 w-[90%] pt-2 focus:border-b focus:border-black focus:outline-none"
              placeholder="username"
              name="tech"
              id="tech"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <hr className="md:hidden"/>
          <label>
            <MdOutlinePassword className="inline mr-1 text-xl "></MdOutlinePassword>
            <input
              type="password"
              className="mb-2 bg-transparent placeholder:text-white p-1 w-[90%] pt-2 focus:border-b focus:border-black focus:outline-none"
              placeholder="password"
              name="city"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            onClick={() => submitHandler()}
            className="btn-primary px-6 bg-transparent"
          >
            LOGIN
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Signin;
