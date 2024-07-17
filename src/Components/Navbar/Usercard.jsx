import React from "react";

export const Usercard = ({ userImage }) => {
  return (
    <>
      <img
        className="rounded-full object-contain"
        src={userImage}
        alt="user profile picture"
      />
    </>
  );
};
