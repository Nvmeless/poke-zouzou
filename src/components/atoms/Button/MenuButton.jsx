import React from "react";

//INTERNAL IMPORT
import Style from "./Button.module.css";
import { Link } from "react-router-dom";

const MenuButton = (props, { title, uri }) => {
  return <li className={Style.menuButton}>{props.children}</li>;
};

export default MenuButton;
