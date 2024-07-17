import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import axios from "../../../axiosConfig/axios";
import ProfilesData from "./ProfilesData";
  
// TODO: THIS SHOWS ALL THE USER PROFILES

function Profiles() {
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
      className="m-2 md:m-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-7"
    >
      {users.map((user) => {
        return (
          <ProfilesData
            key={user.id}
            userID={user.id}
            userImage={user.image}
            userImageALT={`${user.firstName}+'image'`}
            userName={user.username}
            userDesignation={user.company.title}
            userLocation={user.address.city}
            //todo: skills, availabilities are remaining
          />
        );
      })}
    </motion.div>
  );
}

export default Profiles;
