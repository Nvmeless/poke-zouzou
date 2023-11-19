import React from "react";
import { useSelector } from "react-redux";

const UserCard = () => {
  const user = useSelector((state) => {
    return state.user;
  });
  return <div>name :{user?.username}</div>;
};

export default UserCard;
