import React from "react";
import { MenuBar, MenuButton } from "../../atoms";
const Menu = ({ menus }) => {
  const makeMenu = () => {
    return menus.map((menu) => {
      return (
        <MenuButton uri={menu.uri}>
          {menu.icon ? menu.icon : menu.title}
        </MenuButton>
      );
    });
  };

  return <MenuBar>{makeMenu(menus)}</MenuBar>;
};

export default Menu;
