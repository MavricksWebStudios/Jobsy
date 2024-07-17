import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import axios from "../../../axiosConfig/axios";
import ExploreworkData from "./ExploreworkData";
import Homedata from "./Homedata";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

// TODO: THIS SHOWS ALL THE PROJECTS

function Explorework() {
  const [users, setUsers] = useState();
  const getData = () => {
    axios
      .get("/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (users && users.length === 0) {
      toast.info("Your search returned no result!");
    }
  }, [users]);

  if (!users) {
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
    >
      <Homedata setUsers={setUsers} />
      <div className="mt-2 grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-4 mx-2">
        {users.map((user) => {
          return (
            <ExploreworkData
              key={user.id}
              userID={user.id}
              imgSRC={user.image}
              imgALT={`${user.firstName}+'image'`}
              heading={user.username}
              userHandle={user.username}
              projectVideoSRC={user.image}
              likesCount={Math.round(user.height)}
              commentsCount={Math.round(user.weight)}
              viewsCount={user.age}
              //todo: skills is remaining
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Explorework;
