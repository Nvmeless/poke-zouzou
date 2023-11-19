import React, { useEffect, useState } from "react";
import { MenuBar, MenuButton } from "../../atoms";
import styled from "styled-components";

const hRem = 3;

const StyledMenu = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-between;
  ${"" /* background-color: red; */}
  height: 100%;
  display: block;
`;
const StyledMenuButton = styled.ul`
  height: 100%;
`;
const Menu = ({ menus }) => {
  const makeMenu = () => {
    return menus.map((menu, i) => {
      return (
        <StyledMenuButton key={i}>
          <MenuButton key={i} uri={menu.uri}>
            {menu.icon ? menu.icon : menu.title}
          </MenuButton>
        </StyledMenuButton>
      );
    });
  };

  return <MenuBar menu={<StyledMenu>{makeMenu(menus)}</StyledMenu>}></MenuBar>;
};

export default Menu;
