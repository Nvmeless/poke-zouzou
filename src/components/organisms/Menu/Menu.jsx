import React, { useEffect, useState } from "react";
import { MenuBar, MenuButton } from "../../atoms";
const Menu = ({ menus }) => {
  // const pokezouzou = useSelector((state) => {
  //   console.log("STATE", state);
  //   return state.pokedex;
  // });
  // const [DataIsLoaded, setDataIsLoaded] = useState(pokezouzou.status);

  const makeMenu = () => {
    return menus.map((menu, i) => {
      return (
        <MenuButton key={i} uri={menu.uri}>
          {menu.icon ? menu.icon : menu.title}
        </MenuButton>
      );
    });
  };

  return <MenuBar>{makeMenu(menus)}</MenuBar>;
};

export default Menu;
