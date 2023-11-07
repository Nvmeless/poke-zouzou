import React, { useEffect, useState } from "react";
import { MenuBar, MenuButton } from "../../atoms";
import styled from "styled-components";

const hRem = 3;

const StyledMenu = styled.ul`
  display: flex;
  height: 3rem;
  background-color: red;
  padding: 1rem;
`;
const StyledMenuButton = styled.ul`
  width: 3rem;
  height: 3rem;
  background-color: pink;
`;
const Menu = ({ menus }) => {
  // const pokezouzou = useSelector((state) => {
  //   console.log("STATE", state);
  //   return state.pokedex;
  // });
  // const [DataIsLoaded, setDataIsLoaded] = useState(pokezouzou.status);

  const makeMenu = () => {
    return menus.map((menu, i) => {
      return (
        <StyledMenuButton>
          <MenuButton key={i} uri={menu.uri}>
            {menu.icon ? menu.icon : menu.title}
          </MenuButton>
        </StyledMenuButton>
      );
    });
  };

  return (
    <MenuBar>
      <StyledMenu>{makeMenu(menus)}</StyledMenu>
    </MenuBar>
  );
};

export default Menu;
