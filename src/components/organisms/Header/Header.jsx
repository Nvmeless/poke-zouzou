import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Style from "./Header.module.css";
import { Button, Title } from "../../atoms";

export const Header = (props) => {
  return (
    <>
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
      </h1>
    </>
  );
};
export default Header;
