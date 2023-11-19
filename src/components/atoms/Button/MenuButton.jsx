import React from "react";
import styled from "styled-components";
//INTERNAL IMPORT
import Style from "./Button.module.css";
const StyledMenuButton = styled.nav`
  ${"" /* background-color: pink; */}
  height: 100%;
`;
const MenuButton = (props, { title, uri }) => {
  return (
    <span className="nes-pointer">
      <StyledMenuButton className={Style.button}>
        {props.children}
      </StyledMenuButton>
    </span>
  );
};

export default MenuButton;
