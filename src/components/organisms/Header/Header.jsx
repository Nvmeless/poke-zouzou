import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Style from "./Header.module.css";
import { Button, Title } from "../../atoms";

export const Header = (props) => {
  const tasks = useSelector((state) => {
    console.log(state.todoList);

    return state.todoList;
  });
  return (
    <h1 id="header">
      Hello,
      <br />
      {props?.username}
      <span
        style={{
          position: "relative",
          top: 10,
        }}
      >
        {props?.icon}
      </span>
      {tasks.map((x) => {
        return <h4>{x.title}</h4>;
      })}
    </h1>
  );
};
export default Header;
