import React from "react";
import styled from "styled-components";

const StyledMenuBar = styled.nav`
  background-color: blue;
`;
const MenuBar = (props) => {
  return <StyledMenuBar>{props.children}</StyledMenuBar>;
};

export default MenuBar;
