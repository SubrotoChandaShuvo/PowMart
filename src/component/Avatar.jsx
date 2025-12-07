import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Avatar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="relative avatar px-2">
      <div className=" w-9 h-9 rounded-full group">
        <img
          id="my-anchor-element"
          src={user?.photoURL || "/placeholder-avatar.png"}
          alt="User avatar"
          className="w-full h-full object-cover rounded-full"
        />
        <Tooltip anchorSelect="#my-anchor-element" content={user?.displayName || "User"}/>˝
      </div>
    </div>
  );
};

export default Avatar;
