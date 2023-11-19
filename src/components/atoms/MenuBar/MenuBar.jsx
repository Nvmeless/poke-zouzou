import React from "react";
import styled from "styled-components";

const StyledMenuBar = styled.nav`
  ${"" /* background-color: blue; */}
  height: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
`;
const MenuBar = (props) => {
  return <StyledMenuBar>{props.menu}</StyledMenuBar>;
};

export default MenuBar;
