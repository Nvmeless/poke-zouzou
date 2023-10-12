import React from "react";

//INTERNAL IMPORT
import Style from "./Button.module.css";

const MenuButton = (props, { title, uri }) => {
  return <button className={Style.menuButton}>{props.children}</button>;
};

export default MenuButton;
